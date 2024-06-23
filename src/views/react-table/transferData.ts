export type DataType = {
  id: number
  token: string
  type: string
  compliance?: string

  available?: string
}

const data: DataType[] = [
  {
    id: 1,
    token: 'STRK',
    type: 'ERC20',
    compliance: 'MiCA, KYC',
    available: 'Available'
  },
  {
    id: 2,
    token: 'CMPY',
    type: 'Security',
    compliance: 'MiCA, KYC',
    available: 'Available'
  },
  {
    id: 3,
    token: 'NYREAL3',
    type: 'Real Estate',
    compliance: 'MiCA',
    available: 'Available'
  },
  {
    id: 4,
    token: 'SGold',
    type: 'Commodity',
    compliance: 'MiCA, KYC',
    available: 'Available'
  }
]

export default data
