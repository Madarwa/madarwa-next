'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'

// Third-party Imports
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

// Type Imports

// Style Imports
import styles from '@core/styles/table.module.css'

// Data Imports
import defaultData from './transferData'
import { DataType } from './transferData'

// Column Definitions
const columnHelper = createColumnHelper<DataType>()

const columns = [
  columnHelper.accessor('token', {
    cell: info => info.getValue(),
    header: 'Token'
  }),
  columnHelper.accessor('type', {
    cell: info => info.getValue(),
    header: 'Type'
  }),
  columnHelper.accessor('compliance', {
    cell: info => info.getValue(),
    header: 'Compliance'
  }),
  columnHelper.accessor('available', {
    cell: info => info.getValue(),
    header: 'Available'
  }),

  columnHelper.accessor('token', {
    cell: info => (
      <Button variant='contained' startIcon={<i className='tabler-send' />}>
        Transfer
      </Button>
    ),
    header: 'send'
  })
]

const BasicDataTables = () => {
  // States
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(() => [...defaultData])

  // Hooks
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    filterFns: {
      fuzzy: () => false
    }
  })

  return (
    <Card className='w-fit'>
      <div className=''>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 10)
              .map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default BasicDataTables
