'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'

// Type Imports
import type { ThemeColor } from '@core/types'

// Component Imports
import DialogCloseButton from '../DialogCloseButton'
import CustomTextField from '@core/components/mui/TextField'

type BillingCardData = {
  cardNumber?: string
  name?: string
  expiryDate?: string
  cardCvv?: string
  imgSrc?: string
  imgAlt?: string
  cardStatus?: string
  badgeColor?: ThemeColor
}

type BillingCardProps = {
  open: boolean
  setOpen: (open: boolean) => void
  data?: BillingCardData
}

const initialCardData: BillingCardProps['data'] = {
  cardNumber: '',
  name: '',
  expiryDate: '',
  cardCvv: '',
  imgSrc: '',
  imgAlt: '',
  cardStatus: '',
  badgeColor: 'primary'
}

const KYBCard = ({ open, setOpen, data }: BillingCardProps) => {
  // States
  const [cardData, setCardData] = useState(initialCardData)

  const handleClose = () => {
    setOpen(false)
    setCardData(initialCardData)
  }

  useEffect(() => {
    setCardData(data ?? initialCardData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}>
      <DialogCloseButton onClick={() => setOpen(false)} disableRipple>
        <i className='tabler-x' />
      </DialogCloseButton>
      <DialogTitle variant='h4' className='flex flex-col gap-2 text-center p-6 sm:pbs-16 sm:pbe-6 sm:pli-16'>
        {'3rd Party KYB Provider / STEP 3/3'}
      </DialogTitle>
      <form onSubmit={e => e.preventDefault()}>
        <DialogContent className='overflow-visible pbs-0 p-6 sm:pli-16'>
          <p className='text-md font-semibold'>KYB</p>
          <p className='flex items-center text-xs'>
            {' '}
            <i className='tabler-point-filled stroke-success bg-success align-bottom ' />
            Docs Submitted
          </p>
          <p className='flex items-center text-xs'>
            {' '}
            <i className='tabler-point-filled stroke-success bg-success align-bottom' />
            Credentials Submitted
          </p>
        </DialogContent>
        <DialogActions className='justify-center pbs-0 p-6 sm:pbe-16 sm:pli-16'>
          <Button variant='contained' type='submit' onClick={handleClose}>
            {'Finalize 3rd Party KYB, and receive KYB Token'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default KYBCard
