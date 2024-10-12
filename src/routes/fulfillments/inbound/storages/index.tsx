import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fulfillments/inbound/storages/')({
  component: () => <div>storages</div>,
})
