/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

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
import { Button } from '@/components/ui/button'
import { deleteProductByID } from '@/lib/admin/product'
import { removeProductById } from '@/redux/shop-slicer'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

type Props = {}
type Payment = {
  order: string
  status: string
  lastOrder: string
  method: string
}

export default function ProductsPage({}: Props) {
  const dispatch = useDispatch()
  const products = useSelector((state: any) => state.shop.productData)
  const [loading, setLoading] = useState(false)

  const handleDeleteProduct = async (id: string) => {
    setLoading(true)
    const response = await deleteProductByID(id)
    if (response) {
      dispatch(removeProductById(id))
      setLoading(false)
      toast.success('Product removed successfully', {
        position: toast.POSITION.TOP_CENTER,
      })

    } else {
      toast.error('Error removing product', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorKey: 'newPrice',
      header: 'New Price',
    },

    {
      header: 'Images',
      accessorKey: 'images',
      cell: ({ row }) => {
        const images: any = row.getValue('images')
        return (
          <Image
            src={images.length !== 0 ? images[0] : '/assets/icons/no-image.svg'}
            alt="ProductImage"
            width={500}
            height={500}
            className="object-contain w-12 h-12"
          />
        )
      },
    },
    {
      accessorKey: '_id',
      cell: ({ row }) => {
        const _id: any = row.getValue('_id')
        return (
          <Button
            title="Delete"
            variant={'destructive'}
            className="w-14 h-8 p-1"
            onClick={() => handleDeleteProduct(_id)}
          >
            Delete
          </Button>
        )
      },
      header: 'Action',
    },
  ]
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Products" />
      {loading ? <Loader /> : <DataTable columns={columns} data={products} />}
      <ToastContainer />
    </div>
  )
}
