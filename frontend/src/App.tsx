import { useState } from 'react'
import './App.css';
import { Button } from './components/ui/button';
import ThemeProvider from './components/theme-provider';
import ModeToggle from './components/mode-toggle';
import Header from './components/app/header';
import LoginPage from './pages/Login/Login';
import SignupPage from './pages/Signup/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import UserProvider from './lib/context/user.context';
import PrivateRoute from './components/app/PrivateRoute';
import DashboardPage from './pages/Home/Dashboard/DashboardPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [
          {
            path: '/',
            element: <DashboardPage />
          }
        ]
      }
    ]
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'signup',
    element: <SignupPage />
  }
])



function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
