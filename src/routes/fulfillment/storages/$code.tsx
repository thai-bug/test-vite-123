import MainLayout from '@/components/layouts/MainLayout'
import StorageDetail from '@/pages/fulfillment/storages/detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fulfillment/storages/$code')({
  component: () => (
    <MainLayout>
      <StorageDetail />
    </MainLayout>
  ),
})
