// MUI Imports
'use client'
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
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import CardStatHorizontalWithSubtitle from '@/components/card-statistics/HorizontalWithSubtitle'
import LineChartImpression from '@/views/pages/widget-examples/statistics/LineChartImpression'
import Horizontal from '@/views/pages/widget-examples/statistics/Horizontal'

import { CardStatsType } from '@/types/pages/widgetTypes'
import CardStatsLineAreaCharts from '@/views/pages/widget-examples/statistics/CardStatsLineAreaCharts'
import PopularProducts from '@/views/pages/widget-examples/advanced/PopularProducts'
import SalesOverview from '@/views/pages/widget-examples/statistics/SalesOverview'
import MonthlyCampaignState from '@/views/pages/widget-examples/advanced/MonthlyCampaignState'
import Stark from '@/@core/svg/Stark'
import {
  Alert,
  Chip,
  MenuItem,
  Theme,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
  Button
} from '@mui/material'
import classnames from 'classnames'
import CreateDeal from '@/views/pages/wizard-examples/create-deal'
import StepDealType from '@/views/pages/wizard-examples/create-deal/StepDealType'
import React, { SyntheticEvent, useState } from 'react'
import CustomTextField from '@/@core/components/mui/TextField'
import { InvoiceType } from '@/types/apps/invoiceTypes'
import { FormDataType } from '@/views/apps/invoice/add/AddCustomerDrawer'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { getLocalizedUrl } from '@/utils/i18n'
import type { Locale } from '@/configs/i18n'

const TokenEngine = () => {
  // Vars
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(1)
  const [selectData, setSelectData] = useState<InvoiceType | null>(null)
  const [issuedDate, setIssuedDate] = useState<Date | null | undefined>(null)
  const [dueDate, setDueDate] = useState<Date | null | undefined>(null)

  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const onFormSubmit = (data: FormDataType) => {}

  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-item').remove()
  }
  const [alignment, setAlignment] = React.useState<string | null>('left')

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }
  const redirectURL = searchParams.get('redirectTo') ?? '/tokenEngine/success'
  return (
    <div>
      <div className='flex m-5 h-12 w-70 bg-gray-200 pl-5 items-center gap-3'>
        <Stark />
        <p>MadaRWA Native Token Engine v01 for StarkHack</p>
      </div>
      <Alert severity='warning' onClose={() => {}} className='m-5'>
        Only Institutions with KYB can use Token Engine
      </Alert>
      <ToggleButtonGroup
        size='large'
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label='text alignment'
        className='m-5'
      >
        <ToggleButton value='left' aria-label='left aligned'>
          <div className='w-28'>
            <i className='tabler-home' />
            <p>Real Estate</p>
          </div>
        </ToggleButton>
        <ToggleButton value='center' aria-label='centered'>
          <div className='w-28'>
            <i className='tabler-wallet' />
            <p>Financial Asset</p>
          </div>
        </ToggleButton>
        <ToggleButton value='right' aria-label='right aligned'>
          <div className='w-28'>
            <i className='tabler-diamond' />
            <p>Commodities</p>
          </div>
        </ToggleButton>
        <ToggleButton value='justify' aria-label='justified'>
          <div className='w-28'>
            <i className='tabler-clipboard-text' />
            <p>Loans</p>
          </div>
        </ToggleButton>
      </ToggleButtonGroup>
      <Grid item xs={12} className='m-5'>
        <div className='flex justify-between flex-col gap-4 flex-wrap sm:flex-row'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-4'>
              <Typography className='font-medium' color='text.primary'>
                Token Standard
              </Typography>
              <CustomTextField
                className={classnames('min-is-[220px]', { 'is-1/2': isBelowSmScreen })}
                defaultValue={'Fungible Token'}
                value={'Fungible Token'}
                onChange={e => {}}
                disabled
              >
                <MenuItem
                  className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
                  value='Fungible Token'
                  onClick={() => {
                    setSelectData(null)
                    setOpen(true)
                  }}
                ></MenuItem>
              </CustomTextField>
            </div>
            <div className='flex flex-col gap-2'>
              <Typography className='font-medium' color='text.primary'>
                Regulary Compliance madaRWA Standard
              </Typography>
              <CustomTextField
                disabled
                className={classnames('min-is-[220px]', { 'is-1/2': isBelowSmScreen })}
                value={'MiCA Regulation Standard by MiCA'}
                onChange={e => {}}
                defaultValue={'MiCA Regulation Standard by MiCA'}
              >
                <MenuItem
                  className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
                  value='MiCA Regulation Standard by MiCA'
                  onClick={() => {
                    setSelectData(null)
                    setOpen(true)
                  }}
                ></MenuItem>
              </CustomTextField>
              <Tooltip title='Will be activated after hackhathon'>
                <Button
                  className='mt-2'
                  size='small'
                  variant='contained'
                  onClick={() => setCount(count + 1)}
                  startIcon={<i className='tabler-plus' />}
                >
                  Add new Compliance Standard
                </Button>
              </Tooltip>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <Typography className='font-medium' color='text.primary'>
              Issuer Company
            </Typography>
            <div>
              <div className='flex items-center gap-4'>
                <Typography className='min-is-[100px]'>Company Name:</Typography>
                <Typography>Real FinTech Co.</Typography>
              </div>
              <div className='flex items-center gap-4'>
                <Typography className='min-is-[100px]'>Country:</Typography>
                <Typography> United States</Typography>
              </div>
              <div className='flex items-center gap-4'>
                <Typography className='min-is-[100px]'>KYB Code:</Typography>
                <Typography>ETD95476213874685</Typography>
              </div>
              <div className='flex items-center gap-4'>
                <Typography className='min-is-[100px]'>Regulary Code</Typography>
                <Typography>BR91905</Typography>
              </div>
              <div className='flex items-center gap-4'>
                <Typography className='min-is-[100px]'>Minter Wallet:</Typography>
                <Typography>0x4125125125125124</Typography>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} className=' mt-12 m-5 '>
        {Array.from(Array(count).keys()).map((item, index) => (
          <div
            key={index}
            className={classnames('repeater-item flex relative mbe-4 border rounded', {
              'mbs-8': !isBelowMdScreen,
              '!mbs-14': index !== 0 && !isBelowMdScreen,
              'gap-5': isBelowMdScreen
            })}
          >
            <Grid container spacing={5} className='m-0 pbe-5'>
              <Grid item lg={6} md={5} xs={12}>
                <Typography className='font-medium md:absolute md:-top-8' color='text.primary'>
                  Token Name
                </Typography>
                <CustomTextField
                  fullWidth
                  defaultValue='NY Tower 3 Real Estate Token'
                  className='mbe-5'
                  disabled
                ></CustomTextField>
              </Grid>
              <Grid item lg={2} md={3} xs={12}>
                <Typography className='font-medium md:absolute md:-top-8'>ABR.</Typography>
                <CustomTextField
                  {...(isBelowMdScreen && { fullWidth: true })}
                  type='text'
                  placeholder='NYREAL3'
                  defaultValue='NYREAL3'
                  className='mbe-5'
                  InputProps={{ inputProps: { min: 0 } }}
                  disabled
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <Typography className='font-medium md:absolute md:-top-8'>Quantity</Typography>
                <CustomTextField
                  {...(isBelowMdScreen && { fullWidth: true })}
                  type='number'
                  placeholder='100000'
                  defaultValue='100000'
                  InputProps={{ inputProps: { min: 0 } }}
                  disabled
                />
              </Grid>
            </Grid>
            <div className='flex flex-col justify-start border-is'>
              <IconButton size='small' onClick={deleteForm}>
                <i className='tabler-x text-actionActive' />
              </IconButton>
            </div>
          </div>
        ))}
        <Grid item xs={12}>
          <Tooltip title='Will be activated after hackhathon'>
            <Button
              size='small'
              variant='contained'
              onClick={() => setCount(count + 1)}
              startIcon={<i className='tabler-plus' />}
            >
              Asset Proof Service
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <div className='flex w-full justify-center'>
        <Button
          className='m-5 mt-2 w-60'
          size='large'
          variant='contained'
          onClick={() => router.push(redirectURL)}
          startIcon={<i className='tabler-coins' />}
        >
          Tokenize
        </Button>
      </div>
    </div>
  )
}

export default TokenEngine
