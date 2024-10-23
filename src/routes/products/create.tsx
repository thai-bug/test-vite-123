import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'
import CreateProduct from '@/pages/product/components/Create'

export const Route = createFileRoute('/products/create')({
  component: () => (
    <MainLayout>
      <CreateProduct />
    </MainLayout>
  ),
})
