import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'

export const Route = createFileRoute('/orders/$id')({
  component: () => <MainLayout>Hello /orders/$id!</MainLayout>,
})
