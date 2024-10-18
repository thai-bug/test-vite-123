import MainLayout from '@/components/layouts/MainLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Orders/')({
  component: () => <MainLayout>Hello /orders/!</MainLayout>,
})
