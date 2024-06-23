import { UserAccount } from '@/components/app/User/UserSettings/UserAccount/UserAccount'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/settings/account')({
  component: UserAccount
})