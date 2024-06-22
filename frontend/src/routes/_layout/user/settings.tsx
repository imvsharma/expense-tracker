import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/settings')({
  component: () => <div>Hello /_layout/user/settings!</div>
})