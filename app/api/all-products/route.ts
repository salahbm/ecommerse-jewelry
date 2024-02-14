import { getALlProducts } from '@/lib/admin/add-product'

export async function GET(res: Response) {
  try {
    const response = await getALlProducts()
console.log(response)
    if (response) {
      return new Response(
        JSON.stringify({
          message: 'Api Response:',
          data: response,
        }),
        { status: 200 }
      )
    } else {
      console.error('Response from API:', response)
      return new Response(
        JSON.stringify({ error: 'Failed to store product' }),
        {
          status: 500,
        }
      )
    }
  } catch (error: any) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
