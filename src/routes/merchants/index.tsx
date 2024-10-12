import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/merchants/')({
  component: () => <div>Hello /merchants/!</div>,
})
