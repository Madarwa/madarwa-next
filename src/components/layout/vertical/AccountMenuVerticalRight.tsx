'use client'

// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import { styled, useColorScheme, useTheme } from '@mui/material/styles'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'
import type { Mode, SystemMode } from '@core/types'

// Component Imports
import VerticalNav, { NavHeader, NavCollapseIcons } from '@menu/vertical-menu'
import VerticalMenu from './VerticalMenu'
import Logo from '@components/layout/shared/Logo'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Style Imports
import navigationCustomStyles from '@core/styles/vertical/navigationCustomStyles'
import { Avatar, AvatarGroup, Button, Card, Grid, Icon } from '@mui/material'
import LineAreaYearlySalesChart from '@/views/dashboards/crm/LineAreaYearlySalesChart'
import LineAreaDailySalesChart from '@/views/dashboards/analytics/LineAreaDailySalesChart'
import BasicDataTables from '@/views/react-table/BasicDataTables'

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  mode: Mode
  systemMode: SystemMode
}

const StyledBoxForShadow = styled('div')(({ theme }) => ({
  top: 60,
  left: -8,
  zIndex: 2,
  opacity: 0,
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  height: theme.mixins.toolbar.minHeight,
  transition: 'opacity .15s ease-in-out',
  background: `linear-gradient(var(--mui-palette-background-paper) ${
    theme.direction === 'rtl' ? '95%' : '5%'
  }, rgb(var(--mui-palette-background-paperChannel) / 0.85) 30%, rgb(var(--mui-palette-background-paperChannel) / 0.5) 65%, rgb(var(--mui-palette-background-paperChannel) / 0.3) 75%, transparent)`,
  '&.scrolled': {
    opacity: 1
  }
}))

const AccountMenuVerticalRight = (props: Props) => {
  // Props
  const { dictionary, mode, systemMode } = props

  // Hooks
  const verticalNavOptions = useVerticalNav()
  const { updateSettings, settings } = useSettings()
  const { mode: muiMode, systemMode: muiSystemMode } = useColorScheme()
  const theme = useTheme()

  // Refs
  const shadowRef = useRef(null)

  // Vars
  const { isCollapsed, isHovered, collapseVerticalNav, isBreakpointReached } = verticalNavOptions
  const isServer = typeof window === 'undefined'
  const isSemiDark = settings.semiDark
  let isDark

  if (isServer) {
    isDark = mode === 'system' ? systemMode === 'dark' : mode === 'dark'
  } else {
    isDark = muiMode === 'system' ? muiSystemMode === 'dark' : muiMode === 'dark'
  }

  const scrollMenu = (container: any, isPerfectScrollbar: boolean) => {
    container = isBreakpointReached || !isPerfectScrollbar ? container.target : container

    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('scrolled')) {
        // @ts-ignore
        shadowRef.current.classList.add('scrolled')
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('scrolled')
    }
  }

  useEffect(() => {
    if (settings.layout === 'collapsed') {
      collapseVerticalNav(true)
    } else {
      collapseVerticalNav(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.layout])

  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav
      customStyles={navigationCustomStyles(verticalNavOptions, theme)}
      collapsedWidth={71}
      backgroundColor='var(--mui-palette-background-paper)'
      // eslint-disable-next-line lines-around-comment
      // The following condition adds the data-mui-color-scheme='dark' attribute to the VerticalNav component
      // when semiDark is enabled and the mode or systemMode is light
      {...(isSemiDark &&
        !isDark && {
          'data-mui-color-scheme': 'dark'
        })}
    >
      {/* Nav Header including Logo & nav toggle icons  */}
      <p className='p-5 pb-0 text-lg'>Connected</p>
      <text className='p-10 pl-5 pb-5 pt-0 text-lg'>
        : :<strong className='font-bold'>RWA</strong>llet
      </text>
      <Card className=' mx-2 h-12 mt-0 px-5 py-2 flex  items-center justify-between bg-backgroundDefault rounded shadow-md'>
        <Avatar></Avatar>
        <text>
          <strong className='text-bold'>Emre</strong> 0x421...Ab
        </text>
        <i className='tabler-link-off' />
      </Card>
      <Grid item xs={12} sm={6} md={4} lg={3} className='p-2'>
        <LineAreaDailySalesChart />
      </Grid>
      <Card className='overflow-y-auto max-h-40 mx-2 overflow-x-auto shadow-md'>
        <BasicDataTables />
      </Card>
      <Card className='flex flex-col p-4 rounded-lg m-2 mt-4 gap-2 shadow-md '>
        <p className='text-md'>KYC</p>
        <p className='flex items-center text-xs'>
          {' '}
          <i className='tabler-point-filled stroke-success bg-success align-bottom ' />
          Can Trade Security Tokens
        </p>
        <p className='flex items-center text-xs'>
          {' '}
          <i className='tabler-point-filled stroke-success bg-success align-bottom' />
          Not in Sanction List.
        </p>
        <Button className='bg-[#28C76F] bg-opacity-20 w-full text-success h-7  rounded-lg'>KYC Approved</Button>
      </Card>
      <Card className='flex flex-col p-4 rounded-lg m-2 mt-4 gap-2 shadow-md'>
        <p className='text-md'>KYB</p>
        <p className='flex items-center text-xs'>
          {' '}
          <i className='tabler-point-filled stroke-success bg-error align-bottom ' />
          Cannot Mint Security Tokens
        </p>

        <Button className='bg-primary text-white w-full h-7  rounded-lg'>Start KYB</Button>
      </Card>
    </VerticalNav>
  )
}

export default AccountMenuVerticalRight
