import { UserAppearance } from '@/components/app/User/UserSettings/UserAppearance/UserAppearance'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/settings/appearance')({
  component: UserAppearance
})