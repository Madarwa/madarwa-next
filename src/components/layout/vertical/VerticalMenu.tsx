'use client'

// Next Imports
import { useParams } from 'next/navigation'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { getDictionary } from '@/utils/getDictionary'
import type { VerticalMenuContextProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'
import CustomChip from '@core/components/mui/Chip'

// import { GenerateVerticalMenu } from '@components/GenerateMenu'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

// Menu Data Imports
// import menuData from '@/data/navigation/verticalMenuData'

type RenderExpandIconProps = {
  open?: boolean
  transitionDuration?: VerticalMenuContextProps['transitionDuration']
}

type Props = {
  dictionary: Awaited<ReturnType<typeof getDictionary>>
  scrollMenu: (container: any, isPerfectScrollbar: boolean) => void
}

const RenderExpandIcon = ({ open, transitionDuration }: RenderExpandIconProps) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }: Props) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { settings } = useSettings()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale, id } = params

  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <MenuSection label={dictionary['navigation'].madaRWANativedApps}>
          <MenuItem href={`/${locale}/forms/form-layouts`} icon={<i className='tabler-globe' />}>
            {dictionary['navigation'].crossBorderPayment}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-validation`} icon={<i className='tabler-transfer' />}>
            {dictionary['navigation'].transfer}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-wizard`} icon={<i className='tabler-basket' />}>
            {dictionary['navigation'].assetManagement}
          </MenuItem>
          <MenuItem href={`/${locale}/react-table`} icon={<i className='tabler-arrow-bar-down' />}>
            {dictionary['navigation'].tokenEngine}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].RWAOfferings}>
          <MenuItem href={`/${locale}/forms/form-layouts`} icon={<i className='tabler-sitemap' />}>
            {dictionary['navigation'].realEstateTokens}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-validation`} icon={<i className='tabler-plant' />}>
            {dictionary['navigation'].loans}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-wizard`} icon={<i className='tabler-coin' />}>
            {dictionary['navigation'].commodities}
          </MenuItem>
        </MenuSection>
        <MenuSection label={dictionary['navigation'].securityTokens}>
          <MenuItem href={`/${locale}/forms/form-layouts`} icon={<i className='tabler-planet' />}>
            {dictionary['navigation'].toStarknet}
          </MenuItem>
          <MenuItem href={`/${locale}/forms/form-validation`} icon={<i className='tabler-pokeball' />}>
            {dictionary['navigation'].toEthereum}
          </MenuItem>
        </MenuSection>
      </Menu>
      {/* <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <GenerateVerticalMenu menuData={menuData(dictionary, params)} />
      </Menu> */}
    </ScrollWrapper>
  )
}

export default VerticalMenu
