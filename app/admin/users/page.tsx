/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
'use client'

import { DataTable } from '@/components/admin/DataTable'
import PageTitle from '@/components/admin/PageTitle'
import { Loader } from '@/components/shared/Loader'
import { getAllUsers } from '@/lib/admin/users'
import { UserTypes } from '@/types/user'
import { ColumnDef } from '@tanstack/react-table'
import { log } from 'console'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

type Props = {}
type Payment = {
  name: string
  email: string
  lastOrder: string
  method: string
}

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              'username'
            )}`}
            alt="user-image"
          />
          <p>{row.getValue('username')} </p>
        </div>
      )
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'lastOrder',
    header: 'Last Order',
  },
]

export default function UsersPage({}: Props) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function fetchData() {
    try {
      setLoading(true)
      const getUsers: UserTypes[] | any = await getAllUsers()
      if (getUsers.length > 0) {
        setUsers(getUsers)
        setLoading(false)
      }
    } catch (error: any) {
      console.log(error.message)
      toast.error('Error fetching all users', {
        position: toast.POSITION.TOP_CENTER,
      })
    }}
    fetchData()
  }, [])
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      {loading ? <Loader /> : <DataTable columns={columns} data={users} />}
      <ToastContainer />
    </div>
  )
}
