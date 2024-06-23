// MUI Imports
'use client'

import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'
import KYCCard from '@/components/dialogs/kyc'
import { Alert, Button, ButtonProps } from '@mui/material'

const KYB = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Go to KYC Provider',
    className: 'bg-primary text-white w-52'
  }
  const kybVerified = false
  return (
    <div className='flex flex-col w-70 p-10  border shadow-sm gap-6 mt-20'>
      {kybVerified ? (
        <>
          <p className='font-bold'>KYB Service</p>
          <p className='pt-2'>
            Only users who have completed KYC verification can buy or sell security and RWA tokens.
          </p>
          <Alert severity='success' onClose={() => {}}>
            KYC Verified
          </Alert>
        </>
      ) : (
        <>
          <p className='font-bold'>KYB Service</p>
          <p className='pt-2'>
            Only users who have completed KYC verification can buy or sell security and RWA tokens.
          </p>
          <Alert severity='warning' onClose={() => {}}>
            Your KYC will be permanently linked with your connected Starknet Wallet
          </Alert>
          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={KYCCard} />
        </>
      )}
    </div>
  )
}

export default KYB
