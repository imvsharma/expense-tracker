import Dashboard from '@/components/app/Dashboard/Dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/dashboard')({
  component: Dashboard
})