import { UserProfile } from '@/components/app/User/UserSettings/UserProfile/UserProfile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/settings/profile')({
  component: UserProfile
})