import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'

export const Route = createFileRoute('/fulfillment/inbound/storage-labels/')({
  component: () => <MainLayout>Hello /fulfillment/inbound/storage-labels/!</MainLayout>,
})
