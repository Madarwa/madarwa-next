import { useState } from 'react'
import { connect, disconnect } from 'starknetkit'

const useWallet = (rpcProvider: any) => {
  const [connection, setConnection] = useState<any>(undefined)
  const [provider, setProvider] = useState<any>(undefined)
  const [address, setAddress] = useState<any>(undefined)

  const connectWallet = async () => {
    try {
      const { wallet } = await connect({ provider: rpcProvider })
      if (wallet && wallet.isConnected) {
        setConnection(wallet)
        setProvider(wallet.account)
        setAddress(wallet.selectedAddress)
      } else {
        console.log('Failed to connect wallet')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const disconnectWallet = async () => {
    await disconnect()
    setConnection(undefined)
    setProvider(undefined)
    setAddress(undefined)
  }
  return { wallet: { connect, provider, address, connection }, walletFns: { connectWallet, disconnectWallet } }
}
export default useWallet
