// MUI Imports
'use client'

import { Alert, Button, ButtonProps } from '@mui/material'
import OpenDialogOnElementClick from '@/components/dialogs/OpenDialogOnElementClick'
import KYBCard from '@/components/dialogs/kyb'
const KYB = () => {
  // Vars
  const buttonProps: ButtonProps = {
    variant: 'contained',
    children: 'Go to KYB Provider',
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
            Only institions who have completed KYB verification:
            <br />
            <i className='tabler-point-filled  bg-black align-bottom ' /> can buy or sell security and RWA tokens.
            <br />
            <i className='tabler-point-filled  bg-black align-bottom ' /> use token engine (for loans / commodities /
            security tokens)
          </p>
          <Alert severity='warning' onClose={() => {}}>
            Your KYB will be permanently linked with your connected Starknet Wallet{' '}
          </Alert>

          <OpenDialogOnElementClick element={Button} elementProps={buttonProps} dialog={KYBCard} />
        </>
      )}
    </div>
  )
}

export default KYB
