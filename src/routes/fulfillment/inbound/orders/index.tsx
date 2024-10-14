import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'

export const Route = createFileRoute('/fulfillment/inbound/orders/')({
  component: () => <MainLayout>Hello /fulfillment/inbound/orders/!</MainLayout>,
})
