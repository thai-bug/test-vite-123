import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div>
      Mainlayout
    </div>
  )
}
