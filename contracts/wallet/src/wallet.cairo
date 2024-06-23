#[starknet::contract(account)]
mod MyAccount {
    use openzeppelin::account::AccountComponent;
    use openzeppelin::introspection::src5::SRC5Component;

    component!(path: AccountComponent, storage: account, event: AccountEvent);
    component!(path: SRC5Component, storage: src5, event: SRC5Event);

    // Account Mixin
    #[abi(embed_v0)]
    impl AccountMixinImpl = AccountComponent::AccountMixinImpl<ContractState>;
    impl AccountInternalImpl = AccountComponent::InternalImpl<ContractState>;

    #[storage]
    struct Storage {
        manager: felt252,
        ERC20_kyc: bool,
        ERC20_kyb: bool,
        #[substorage(v0)]
        account: AccountComponent::Storage,
        #[substorage(v0)]
        src5: SRC5Component::Storage
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        AccountEvent: AccountComponent::Event,
        #[flat]
        SRC5Event: SRC5Component::Event
    }

    #[constructor]
    fn constructor(ref self: ContractState, public_key: felt252,validator: felt252) {
        self.account.initializer(public_key);
    }
    #[external(v0)]
    fn initialize_erc20_kyc(ref self: ContractState) {
        // We will be asserting the hardcoded manager address here
        self.ERC20_kyc.write(true);
    }
    #[external(v0)]
    fn initialize_erc20_kyb(ref self: ContractState) {
        // We will be asserting the hardcoded manager address here
        self.ERC20_kyb.write(true);
    }
    #[external(v0)]
    fn revoke_erc20_kyc(ref self: ContractState) {
        // We will be asserting the hardcoded manager address here
        self.ERC20_kyc.write(false);
    }
    #[external(v0)]
    fn revoke_erc20_kyb(ref self: ContractState) {
        // We will be asserting the hardcoded manager address here
        self.ERC20_kyb.write(false);
    }
}