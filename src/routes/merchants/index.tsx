import MainLayout from '@/components/layouts/MainLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/merchants/')({
  component: () => <MainLayout>Hello /merchants/!</MainLayout>,
})
