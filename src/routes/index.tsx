import { AuthProvider, RequireAuth } from 'react-auth-kit'
import { useRoutes, type RouteObject } from "react-router-dom"

// Layouts
import DefaultLayout from '@/layouts/Default'

// Pages
import Home from '@/pages/Home'
import Login from '@/pages/auth/Login'

export default function Routes() {

  // Setups
  const loginPage: string = '/auth/login'
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
    {
      path: '/authenticated',
      element: <RequireAuth loginPath={loginPage}><DefaultLayout /></RequireAuth>,
      children: []
    },
    {
      path: '/auth',
      element: <DefaultLayout />,
      children: [
        {
          path: loginPage,
          element: <Login />
        }
      ]
    }
  ]
  const router = useRoutes(routes)

  return (
    <AuthProvider authType={'localstorage'} authName={'_auth'}>
      {router}
    </AuthProvider>
  )
}

/*
If you don't need authentication, you can use the following code:

import { useRoutes, type RouteObject } from "react-router-dom"
import DefaultLayout from '@/layouts/Default'
import Home from '@/pages/Home'

export default function Routes() {

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ]

  const router = useRoutes(routes)

  return (
    <>
      {router}
    </>
  )
}
*/