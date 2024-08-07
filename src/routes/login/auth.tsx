import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/login/auth')({
  component: () => <div>Hello /login/auth!</div>
})