// MUI Imports
'use client'

import { Alert } from '@mui/material'

const DashboardCRM = () => {
  // Vars

  return (
    <div className='flex flex-col w-70 p-10  border shadow-sm gap-6 mt-20'>
      {' '}
      <p className='font-bold'>Tokenization Completed.</p>
      <Alert severity='success' onClose={() => {}}>
        <p className='underline cursor-pointer'>Click to See TX.</p>
      </Alert>
    </div>
  )
}

export default DashboardCRM
