import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'

import HomePage from '../../pages/home/HomePage'
import LoginPage from '../../pages/auth/LoginPage'
import RegisterPage from '../../pages/auth/RegisterPage'
import DashboardPage from '../../pages/dashboard/DashboardPage'
import ServicesPage from '../../pages/services/ServicesPage'
import AppointmentPage from '../../pages/appointment/AppointmentPage'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: 'appointment', element: <AppointmentPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
