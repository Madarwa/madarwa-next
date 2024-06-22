// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import DistributedBarChartOrder from '@views/dashboards/crm/DistributedBarChartOrder'
import LineAreaYearlySalesChart from '@views/dashboards/crm/LineAreaYearlySalesChart'
import CardStatVertical from '@/components/card-statistics/Vertical'
import BarChartRevenueGrowth from '@views/dashboards/crm/BarChartRevenueGrowth'
import EarningReportsWithTabs from '@views/dashboards/crm/EarningReportsWithTabs'
import RadarSalesChart from '@views/dashboards/crm/RadarSalesChart'
import SalesByCountries from '@views/dashboards/crm/SalesByCountries'
import ProjectStatus from '@views/dashboards/crm/ProjectStatus'
import ActiveProjects from '@views/dashboards/crm/ActiveProjects'
import LastTransaction from '@views/dashboards/crm/LastTransaction'
import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'
import LineAreaDailySalesChart from '@views/pages/widget-examples/statistics/LineAreaDailySalesChart'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import CardStatHorizontalWithSubtitle from '@/components/card-statistics/HorizontalWithSubtitle'
import LineChartImpression from '@/views/pages/widget-examples/statistics/LineChartImpression'
import Horizontal from '@/views/pages/widget-examples/statistics/Horizontal'

import { CardStatsType } from '@/types/pages/widgetTypes'
import CardStatsLineAreaCharts from '@/views/pages/widget-examples/statistics/CardStatsLineAreaCharts'
import PopularProducts from '@/views/pages/widget-examples/advanced/PopularProducts'

const getData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/pages/widget-examples`)

  if (!res.ok) {
    throw new Error('Failed to fetch permissions data')
  }

  return res.json()
}
const DashboardCRM = async () => {
  // Vars
  const data: CardStatsType = await getData()

  return (
    <Grid container spacing={6}>
      <p className='p-10 pb-2 font-semibold'>Welcome to madaRWA</p>
      <p className='pl-10 pt-2'>
        madaRWA is a Starknet L3 chain specifically designed for the Real World Asset (RWA) ecosystem.
        <br /> Here,
        <br />
        <i className='tabler-point-filled  bg-black align-bottom ' /> Only users who have completed KYC verification can
        buy or sell security and RWA tokens.
        <br />
        <i className='tabler-point-filled  bg-black align-bottom ' /> Enjoy zero transaction fees on madaRWA with a
        simple monthly subscription.
        <br />
        <i className='tabler-point-filled  bg-black align-bottom ' /> Only businesses completed KYB, can use token
        engine.
      </p>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <CardStatHorizontalWithSubtitle
          title='Users'
          avatarColor='primary'
          avatarIcon='tabler-users'
          change='29'
          subTitle='MAU'
          value='81,419'
          changeNumber='29%'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <CardStatHorizontalWithSubtitle
          title='KYC Verified Users'
          avatarColor='success'
          avatarIcon='tabler-user-check'
          change='negative'
          subTitle='Last week analytics'
          value='59,860'
          changeNumber='14%'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <CardStatHorizontalWithSubtitle
          title='Institutions'
          avatarColor='warning'
          avatarIcon='tabler-building-community'
          change='12'
          subTitle='Last week analytics'
          value='237'
          changeNumber='42%'
        />
      </Grid>
      <Grid item lg={8}>
        <CardStatsLineAreaCharts
          data={[
            {
              stats: '92.6k',
              chartColor: 'primary',
              avatarSize: 42,
              avatarColor: 'primary',
              avatarIconSize: 26,
              avatarIcon: 'tabler-users',
              avatarSkin: 'light',
              title: 'RWA Token Volume',
              chartSeries: [{ data: [40, 4, 58, 12, 35, 10, 84] }]
            },
            {
              title: 'Tokenized Assets',
              stats: '$1.525M',
              avatarSize: 42,
              avatarIconSize: 26,
              avatarColor: 'error',
              avatarIcon: 'tabler-shopping-cart',
              avatarSkin: 'light',
              chartColor: 'error',
              chartSeries: [{ data: [44, 75, 24, 57, 6, 84] }]
            }
          ]}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PopularProducts />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
