import PageTitle from '@/components/admin/PageTitle'
import UploadProductPage from '@/forms/admin/AddProduct'

function AddNewProduct() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Add New Products" />
      <UploadProductPage />
    </div>
  )
}

export default AddNewProduct
