export type DataType = {
  id: number
  token: string
  type: string
  price: string
}

const data: DataType[] = [
  {
    id: 1,
    token: 'BTC',
    type: 'Bitcoin',
    price: '$10,000'
  },
  {
    id: 2,
    token: 'ETH',
    type: 'Ethereum',
    price: '$1,000'
  },
  {
    id: 3,
    token: 'XRP',
    type: 'Ripple',
    price: '$0.50'
  },
  {
    id: 4,
    token: 'BNB',
    type: 'Binance Coin',
    price: '$300'
  }
]

export default data
