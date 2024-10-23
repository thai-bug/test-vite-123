import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'
import Products from '@/pages/product'

export const Route = createFileRoute('/products/')({
  component: () =>
    <MainLayout>
      <Products />
    </MainLayout>,
})
