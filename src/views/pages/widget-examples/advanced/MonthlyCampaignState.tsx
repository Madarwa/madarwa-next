// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  title: string
  amount: string
  avatarColor: ThemeColor
  trendNumber: string
  trend?: 'positive' | 'negative'
}

// Vars
const data: DataType[] = [
  {
    title: 'Real Estate',
    amount: '12,346',
    trendNumber: '',
    avatarColor: 'success',
    icon: 'tabler-home'
  },
  {
    title: 'Loans',
    amount: '8,734',
    trendNumber: '',
    avatarColor: 'info',
    icon: 'tabler-git-fork'
  },
  {
    title: 'Commodities',
    amount: '967',
    trendNumber: '',
    trend: 'negative',
    avatarColor: 'warning',
    icon: 'tabler-plant'
  },
  {
    title: 'Security Tokens',
    amount: '345',
    trendNumber: '',
    avatarColor: 'primary',
    icon: 'tabler-coin'
  }
]

const MonthlyCampaignState = () => {
  return (
    <Card>
      <CardHeader
        title='Tokenized Value($M)'
        subheader='By Sector'
        action={<OptionMenu options={['Last Month', 'Last 6 Months', 'Last Year']} />}
      />
      <CardContent className='flex flex-col gap-[1.5625rem]'>
        {data.map((item, index) => (
          <div key={index} className='flex items-center gap-4'>
            <CustomAvatar skin='light' variant='rounded' color={item.avatarColor} size={34}>
              <i className={classnames(item.icon, 'text-[22px]')} />
            </CustomAvatar>
            <div className='flex flex-wrap justify-between items-center gap-x-4 gap-y-1 is-full'>
              <Typography className='font-medium' color='text.primary'>
                {item.title}
              </Typography>
              <div className='flex items-center gap-4'>
                <Typography>{item.amount}</Typography>
                <Typography
                  className='flex justify-end is-11'
                  color={`${item.trend === 'negative' ? 'error' : 'success'}.main`}
                >
                  {item.trendNumber}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export default MonthlyCampaignState
