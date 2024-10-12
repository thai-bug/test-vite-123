import React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '@/pages/mainLayout'

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div>
      <MainLayout />
    </div>
  )
}
