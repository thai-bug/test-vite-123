import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/stores/')({
  component: () => <div>Hello /stores/!</div>,
})
