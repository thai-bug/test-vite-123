import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fulfillments/inbound/storage-labels/')({
  component: () => <div>Storages Labels</div>,
})
