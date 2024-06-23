import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/')({
  component: () => <Outlet />
})