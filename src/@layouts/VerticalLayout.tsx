// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import LayoutContent from './components/vertical/LayoutContent'

// Util Imports
import { verticalLayoutClasses } from './utils/layoutClasses'

type VerticalLayoutProps = ChildrenType & {
  navigation?: ReactNode
  accountMenuVerticalRight?: ReactNode
  navbar?: ReactNode
  footer?: ReactNode
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  // Props
  const { navbar, footer, navigation, children, accountMenuVerticalRight } = props

  return (
    <div className={classnames(verticalLayoutClasses.root, 'flex flex-auto')}>
      <div className='flex-row-reverse'>{navigation || null}</div>{' '}
      <div className={classnames(verticalLayoutClasses.contentWrapper, 'flex flex-col min-is-0 is-full')}>
        {/* Content */}
        <LayoutContent>{children}</LayoutContent>
      </div>
      {accountMenuVerticalRight || null}
    </div>
  )
}

export default VerticalLayout
