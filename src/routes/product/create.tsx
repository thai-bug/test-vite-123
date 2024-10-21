import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'
import CreateProduct from '@/pages/product/components/Create'

export const Route = createFileRoute('/product/create')({
  component: () =>
    <MainLayout>
      <CreateProduct />
    </MainLayout>,
})
