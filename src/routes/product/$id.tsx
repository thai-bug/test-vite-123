import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'
import ProductDetail from '@/pages/product/components/Detail'

export const Route = createFileRoute('/product/$id')({
  component: () => <MainLayout><ProductDetail /></MainLayout>,
})
