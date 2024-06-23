// MUI Imports
'use client'

import { Alert } from '@mui/material'

const DashboardCRM = () => {
  // Vars

  return (
    <div className='flex flex-col w-70 p-10  border shadow-sm gap-6 mt-20'>
      {' '}
      <p className='font-bold'>Tokenization is not completed. Need KYB</p>
      <Alert severity='warning' onClose={() => {}}>
        Only Business provided KYB, can use the Token Engine.
      </Alert>
      <Alert severity='warning' onClose={() => {}}>
        Click to View Failed TX.
      </Alert>
    </div>
  )
}

export default DashboardCRM
