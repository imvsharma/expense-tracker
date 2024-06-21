import LoginPage from '@/pages/Login/Login';
import { AuthService } from '@/services/auth.service';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/login')({
  beforeLoad: async () => {
    const isUserLoggedIn = await AuthService.isUserLoggedIn()
    if(isUserLoggedIn) {
      throw redirect({
        to: '/',
      })
    }
  },
  component: LoginPage
})