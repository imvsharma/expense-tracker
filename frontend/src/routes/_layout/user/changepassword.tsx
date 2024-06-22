import { ChangeUserPasswordPage } from '@/pages/Home/User/ChangeUserPasswordPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/user/changepassword')({
  component: ChangeUserPasswordPage
})