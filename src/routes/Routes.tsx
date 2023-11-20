import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import BankCardPage from '@/pages/BankCardPage/BankCardPage'
import ContactPage from '@/pages/ContactPage/ContactPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import HomePage from '@/pages/HomePage'
import TimelinePage from '@/pages/TimelinePage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'timeline', element: <TimelinePage /> },
      { path: 'bankcard', element: <BankCardPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
