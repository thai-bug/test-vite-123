import MainLayout from '@/components/layouts/MainLayout'
import PickingJobDetail from '@/pages/fulfillment/outbound/picking-jobs/detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/fulfillment/outbound/picking-jobs/$code',
)({
  component: () => (
    <MainLayout>
      <PickingJobDetail />
    </MainLayout>
  ),
})
