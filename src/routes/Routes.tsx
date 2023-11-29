import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
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
      { path: '', element: <HomePage /> },
      { path: 'timeline', element: <TimelinePage /> },
      { path: 'bankcard', element: <BankCardPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
