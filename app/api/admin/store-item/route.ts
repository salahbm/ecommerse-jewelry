'use server'

import { storeProduct } from '@/lib/admin/add-product'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await storeProduct(body)

    if (response) {
      return new Response(
        JSON.stringify({
          message: 'Api Response:',
          data: response,
        }),
        { status: 200 }
      )
    } else {
      console.error('Response from API:', response.status)
      return new Response(
        JSON.stringify({ error: 'Failed to store product' }),
        {
          status: 500,
        }
      )
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
