'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Image from 'next/image'
// UploadProductPage.tsx

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { TiDelete } from 'react-icons/ti'
import { Textarea } from '@/components/ui/textarea'
import { productSchema } from '@/lib/validation'

type ProductFormData = z.infer<typeof productSchema>

const UploadProductPage = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  console.log(`uploadedImages:`, uploadedImages)

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: '',
      oldPrice: '',
      newPrice: '',
      description: '',
      images: [],
      category: '',
      material: '',
      stone: '',
      color: '',
      size: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    console.log('Form data:', values)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      )
      setUploadedImages((prevImages) => [...prevImages, ...imageUrls])
    }
  }

  const deleteImage = (index: number) => {
    const updatedImages = [...uploadedImages]
    updatedImages.splice(index, 1)

    setUploadedImages(updatedImages)
  }

  return (
    <div>
      <h1>Upload New Jewelry Product</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          {/* Add your form fields here */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title" type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="oldPrice"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Old Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter old price"
                    type="number"
                    className="max-w-1/2"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="newPrice"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>New Price</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter new price"
                    type="number"
                    {...field}
                    className="max-w-1/2"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter product description"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Enter category" type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="material"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Material</FormLabel>
                <FormControl>
                  <Input placeholder="Enter material" type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stone"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Stone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter stone" type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Enter color" type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="size"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Size</FormLabel>
                <FormControl>
                  <Input placeholder="Enter size" type="text" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Display uploaded images */}
          <FormField
            control={form.control}
            name="images"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Images</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    multiple
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex-wrap flex w-full">
            {uploadedImages.map((imageUrl, index: number) => (
              <div
                className="relative max-w-[250px] max-h-[250px] border rounded-md m-1"
                key={index}
              >
                <Image
                  width={250}
                  height={250}
                  src={imageUrl}
                  alt={`Uploaded Image ${index + 1}`}
                  className="object-cover rounded-md "
                />
                <button
                  className="text-red-600 text-xl absolute top-0 right-0"
                  onClick={() => deleteImage(index)}
                >
                  <TiDelete />
                </button>
              </div>
            ))}
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default UploadProductPage
