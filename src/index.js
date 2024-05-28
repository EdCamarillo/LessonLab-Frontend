import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/dashboard.jsx'
import Lesson from './pages/lesson.jsx'
import Quiz from './pages/quiz.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/lesson',
    element: <Lesson />,
  },
  {
    path: '/quiz',
    element: <Quiz />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
