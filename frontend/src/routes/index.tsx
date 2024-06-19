import { Navigate, createFileRoute } from '@tanstack/react-router'
import React from 'react'

export const Route = createFileRoute('/')({
  component: () => <Navigate to="/dashboard" />
})