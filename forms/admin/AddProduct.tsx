'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// UploadProductPage.tsx

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const productSchema = z.object({
  title: z.string().min(3),
  oldPrice: z.number(),
  newPrice: z.number(),
  description: z.string().min(10),
  images: z.array(z.string()).refine((val) => val.length <= 5, {
    message: 'You can upload up to 5 images.',
  }),
  category: z.string(),
  material: z.string(),
  store: z.string(),
  color: z.string(),
  size: z.string(),
})

type ProductFormData = z.infer<typeof productSchema>

const UploadProductPage = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  })

  const onSubmit = (data: ProductFormData) => {
    // Handle form submission (e.g., send data to the server)
    console.log('Form data:', data)
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
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Repeat the pattern for other form fields */}

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

          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* Display uploaded images */}
      <div>
        {uploadedImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Uploaded ${index + 1}`}
            style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }}
          />
        ))}
      </div>
    </div>
  )
}

export default UploadProductPage
