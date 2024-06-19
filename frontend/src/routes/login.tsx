import LoginPage from '@/pages/Login/Login';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  component: LoginPage
})