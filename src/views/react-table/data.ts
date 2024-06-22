export type DataType = {
  id: number
  token: string
  type: string
  price: string
}

const data: DataType[] = [
  {
    id: 1,
    token: 'STRK',
    type: 'ERC20',
    price: '5,000'
  },
  {
    id: 2,
    token: 'CMPY',
    type: 'Security',
    price: '1'
  },
  {
    id: 3,
    token: 'NYREAL3',
    type: 'Real Estate',
    price: '0.50'
  },
  {
    id: 4,
    token: 'SGold',
    type: 'Commodity',
    price: '4519'
  }
]

export default data
