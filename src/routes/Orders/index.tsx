import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Orders/')({
  component: () => <div>Hello /Orders/!</div>,
})
