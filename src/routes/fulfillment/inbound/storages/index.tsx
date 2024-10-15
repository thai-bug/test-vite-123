import MainLayout from '@/components/layouts/MainLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fulfillment/inbound/storages/')({
  component: () => <MainLayout>Hello /fulfillment/inbound/storages/!</MainLayout>,
})
