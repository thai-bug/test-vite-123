import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'
import DetailStorageLabelsPage from '@/pages/fulfillments/Inbound/components/storageLables/Detail'

export const Route = createFileRoute(
  '/fulfillment/inbound/storage-labels/$code/detail/',
)({
  component: () => (
    <MainLayout>
      <DetailStorageLabelsPage />
    </MainLayout>
  ),
})
