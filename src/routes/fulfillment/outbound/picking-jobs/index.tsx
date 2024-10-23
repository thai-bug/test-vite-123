import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/components/layouts/MainLayout'
import PickingJobsPage from '@/pages/fulfillment/outbound/picking-jobs'

export const Route = createFileRoute('/fulfillment/outbound/picking-jobs/')({
  component: () => (
    <MainLayout>
      <PickingJobsPage />
    </MainLayout>
  ),
})
