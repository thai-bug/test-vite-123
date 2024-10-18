import MainLayout from '@/components/layouts/MainLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Orders/$id')({
  component: () => <MainLayout>Hello /orders/$id!</MainLayout>,
})
