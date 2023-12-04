import React from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import App from '@/App'
import { PATH } from '@/constants/path'
import BankCardPage from '@/pages/BankCardPage'
import ContactPage from '@/pages/ContactPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import HomePage from '@/pages/HomePage'
import TimelinePage from '@/pages/TimelinePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to={PATH.HOME} /> },
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.TIME_LINE, element: <TimelinePage /> },
      { path: PATH.BANK_CARD, element: <BankCardPage /> },
      { path: PATH.CONTACTS, element: <ContactPage /> },
    ],
  },
])
