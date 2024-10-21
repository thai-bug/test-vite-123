import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'
import Product from '@/pages/product'

export const Route = createFileRoute('/product/')({
  component: () => <MainLayout><Product /></MainLayout>,
})
