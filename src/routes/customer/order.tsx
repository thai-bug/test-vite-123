import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/customer/order')({
  component: () => <div>Hello /customer/order!</div>
})