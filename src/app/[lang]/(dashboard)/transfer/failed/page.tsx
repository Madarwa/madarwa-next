// MUI Imports
'use client'

import { Alert, Button } from '@mui/material'

const Failed = () => {
  // Vars

  return (
    <div className='flex flex-col w-70 p-10  border shadow-sm gap-6 mt-20'>
      {' '}
      <Alert severity='warning' onClose={() => {}}>
        You can only send this token to KYCed Users, Otherwise transfer will be failed.
      </Alert>
      <Alert severity='warning' onClose={() => {}}>
        Click to View Failed TX.
      </Alert>
      <Button variant='contained' className='flex mx-20 bg-success' endIcon={<i className='tabler-arrow-back-up ' />}>
        Return to Main Page
      </Button>
    </div>
  )
}

export default Failed
