import { UserSettingsPage } from '@/pages/Home/User/UserSettingsPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/settings')({
  component: UserSettingsPage
})