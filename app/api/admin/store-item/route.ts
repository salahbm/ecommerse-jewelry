'use server'

import { storeProduct } from "@/lib/admin/add-product"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log(`body:`, body)



    const response =  await storeProduct(body)

    if (response) {
      const data = await response.json()

      return new Response(
        JSON.stringify({
          message: 'Api Response:',
          data: data,
        }),
        { status: 200 }
      )
    } else {
      const errorData = await response.json()
      console.error('Response from API:', response.status, errorData)

      return new Response(JSON.stringify(errorData), {
        status: response.status,
      })
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
