import MainLayout from '@/components/layouts/MainLayout'
import StoragesPage from '@/pages/fulfillment/storages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fulfillment/storages/')({
  component: () => (
    <MainLayout>
      <StoragesPage />
    </MainLayout>
  ),
})
