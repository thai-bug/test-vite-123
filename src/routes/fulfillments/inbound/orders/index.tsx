import { createFileRoute } from '@tanstack/react-router'
import Orders from '@/components/home/components/Orders '

export const Route = createFileRoute('/fulfillments/inbound/orders/')({
  component: () => <div>orders</div>,
})
