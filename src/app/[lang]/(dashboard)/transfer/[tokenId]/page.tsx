// MUI Imports
'use client'

import CustomTextField from '@/@core/components/mui/TextField'
import Stark from '@/@core/svg/Stark'
import { InvoiceType } from '@/types/apps/invoiceTypes'
import { FormDataType } from '@/views/apps/invoice/add/AddCustomerDrawer'
import BasicDataTables from '@/views/react-table/BasicDataTables'
import TransferTable from '@/views/react-table/TransferTable'
import { Alert, Button, Card, MenuItem, Theme, Tooltip, Typography, useMediaQuery } from '@mui/material'
import classnames from 'classnames'
import React from 'react'
import { SyntheticEvent, useState } from 'react'

const Transfer = () => {
  // Vars
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(1)
  const [selectData, setSelectData] = useState<InvoiceType | null>(null)
  const [issuedDate, setIssuedDate] = useState<Date | null | undefined>(null)
  const [dueDate, setDueDate] = useState<Date | null | undefined>(null)

  // Hooks
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const onFormSubmit = (data: FormDataType) => {}

  const deleteForm = (e: SyntheticEvent) => {
    e.preventDefault()

    // @ts-ignore
    e.target.closest('.repeater-item').remove()
  }
  const [alignment, setAlignment] = React.useState<string | null>('left')

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment)
  }
  return (
    <Card className=' flex flex-col m-5 p-5 gap-5'>
      <div className='mx-5 w-full'>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-1'>
            <Typography className='font-medium' color='text.primary'>
              Selected Token{' '}
            </Typography>
            <CustomTextField
              className={classnames('min-is-[220px]', { 'is-1/2': isBelowSmScreen })}
              value={'NYREAL3'}
              onChange={e => {}}
              defaultValue={'NYREAL3'}
              disabled
            >
              <MenuItem
                className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
                value='NYREAL3'
                onClick={() => {
                  setSelectData(null)
                  setOpen(true)
                }}
              ></MenuItem>
            </CustomTextField>
          </div>
          <div className='flex flex-col gap-1'>
            <Typography className='font-medium' color='text.primary'>
              Amount to Send{' '}
            </Typography>
            <CustomTextField className={classnames('min-is-[220px]', { 'is-1/2': isBelowSmScreen })} onChange={e => {}}>
              <MenuItem
                className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
                value=''
                onClick={() => {
                  setSelectData(null)
                  setOpen(true)
                }}
              ></MenuItem>
            </CustomTextField>
          </div>
        </div>
      </div>
      <Alert severity='warning' onClose={() => {}} className='mx-5'>
        You can only send this token to KYCed Users, Otherwise transfer will be failed.
      </Alert>
      <Alert severity='warning' onClose={() => {}} className='mx-5'>
        This token is compliant with MiCA.{' '}
      </Alert>
      <div className='flex flex-col gap-1  p-5'>
        <Typography className='font-medium' color='text.primary'>
          Receiver Wallet
        </Typography>
        <CustomTextField className={classnames('min-is-[220px]', { 'is-1/2': isBelowSmScreen })} onChange={e => {}}>
          <MenuItem
            className='flex items-center gap-2 !text-success !bg-transparent hover:text-success hover:!bg-[var(--mui-palette-success-lightOpacity)]'
            value=''
            onClick={() => {
              setSelectData(null)
              setOpen(true)
            }}
          ></MenuItem>
        </CustomTextField>
      </div>

      <Button variant='contained' className='flex mx-20 bg-success' endIcon={<i className='tabler-send ' />}>
        Send
      </Button>
    </Card>
  )
}

export default Transfer
