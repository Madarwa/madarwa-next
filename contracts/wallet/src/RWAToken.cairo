// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts for Cairo ^0.14.0

#[starknet::contract]
mod RWADEMO {
    use openzeppelin::access::ownable::OwnableComponent;
    use openzeppelin::token::erc20::ERC20Component;
    use starknet::ContractAddress;

    component!(path: ERC20Component, storage: erc20, event: ERC20Event);
    component!(path: OwnableComponent, storage: ownable, event: OwnableEvent);

    #[abi(embed_v0)]
    impl ERC20MixinImpl = ERC20Component::ERC20MixinImpl<ContractState>;
    #[abi(embed_v0)]
    impl OwnableMixinImpl = OwnableComponent::OwnableMixinImpl<ContractState>;

    impl ERC20InternalImpl = ERC20Component::InternalImpl<ContractState>;
    impl OwnableInternalImpl = OwnableComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        ERC20_kyc: LegacyMap<ContractAddress, u256>,
        ERC20_kyb: LegacyMap<ContractAddress, u256>,
        #[substorage(v0)]
        erc20: ERC20Component::Storage,
        #[substorage(v0)]
        ownable: OwnableComponent::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        ERC20Event: ERC20Component::Event,
        #[flat]
        OwnableEvent: OwnableComponent::Event,
    }

    impl ERC20HooksImpl of ERC20Component::ERC20HooksTrait<ContractState> {
        fn before_update(
          ref self: ERC20Component::ComponentState<ContractState>,
          from: ContractAddress,
          recipient: ContractAddress,
          amount: u256
        ) {
            let contract_state = ERC20Component::HasComponent::get_contract_mut(ref self);
            assert(contract_state.ERC20_kyc.read(recipient) > 0, 'KYC not passed');
        }
    
        fn after_update(
          ref self: ERC20Component::ComponentState<ContractState>,
          from: ContractAddress,
          recipient: ContractAddress,
          amount: u256
        ) {}
      }

    #[constructor]
    fn constructor(ref self: ContractState, owner: ContractAddress) {
        self.erc20.initializer("RWADEMO", "RWA");
        self.ownable.initializer(owner);
    }

    #[generate_trait]
    #[abi(per_item)]
    impl ExternalImpl of ExternalTrait {
        #[external(v0)]
        fn mint(ref self: ContractState, recipient: ContractAddress, amount: u256) {
            assert(self.ERC20_kyb.read(recipient) > 0, 'KYB not passed');
            self.ownable.assert_only_owner();
            self.erc20.mint(recipient, amount);
        }
        #[external(v0)]
        fn kyc(
            ref self: ContractState, account: ContractAddress, amount: u256
        ) {
            self.ERC20_kyc.write(account, amount);
        }
        #[external(v0)]
        fn kyb(
            ref self: ContractState, account: ContractAddress, amount: u256
        ) {
            self.ERC20_kyb.write(account, amount);
        }
        #[external(v0)]
        fn get_kyc(
            ref self: ContractState, account: ContractAddress
        ) -> u256 {
            self.ERC20_kyc.read(account)
        }
        #[external(v0)]
        fn get_kyb(
            ref self: ContractState, account: ContractAddress
        ) -> u256 {
            self.ERC20_kyb.read(account)
        }
        #[external(v0)]
        fn get_both(
            ref self: ContractState, account: ContractAddress
        ) -> (u256, u256) {
            (self.ERC20_kyc.read(account), self.ERC20_kyb.read(account))
        }
        

    }
}
