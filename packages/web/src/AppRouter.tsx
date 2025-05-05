import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router'
import { AuthLayout } from './auth/layout/AuthLayout'
import { LoginPage } from './auth/pages/LoginPages'
import { RegisterPages } from './auth/pages/RegisterPages'
import DashboardPage from './dashboard/pages/DashboradPages'

const DashboardLayout = lazy( () => import('./dashboard/layout/DashboardLayout') )

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='/auth/register' element={<RegisterPages />} />
        </Route>
        <Route path='/dashboard' element={
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardLayout />
          </Suspense>
        }>
          <Route index element={<DashboardPage />} />
        </Route>

        <Route path='/' element={<Navigate to='/auth' />} />
        <Route path='*' element={<Navigate to='/auth' />} />

      </Routes>
    </BrowserRouter>
  )
}