import { createFileRoute } from '@tanstack/react-router'
import Login from './login/index'

export const Route = createFileRoute('/login')({
  component: () => <div> <Login /> </div>
})