// app/layout.tsx
'use client'

import Stark from '@/@core/svg/Stark'
import { Alert } from '@mui/material'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className='flex m-5 h-12 w-70 bg-gray-200 pl-5 items-center gap-3'>
        <Stark />
        <p>MadaRWA Native Token Engine v01 for StarkHack</p>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
