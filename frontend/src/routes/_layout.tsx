import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthService } from '@/services/auth.service';
import HomePage from '@/pages/Home/HomePage';


export const Route = createFileRoute('/_layout')({
  beforeLoad: async ({location}) => {
    const isUserLoggedIn = await AuthService.isUserLoggedIn()
    if(!isUserLoggedIn) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: HomePage
})