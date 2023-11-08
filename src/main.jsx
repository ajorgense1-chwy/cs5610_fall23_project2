import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CountProvider from './CountProvider.jsx'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Info from './Info.jsx'
import StudentGrades from './StudentGrades.jsx'
import GradeProvider from './GradeProvider.jsx'
// import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/info',
    element: <Info />
  },
  // {
  //   path: '/game/easy',
  //   element: <EasyGame />
  // },
  // {
  //   path: '/game/hard',
  //   element: <HardGame numebrOfRows={5} />
  // }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
    {/* element: <App /> */}

    {/* <GradeProvider>
      <StudentGrades />

    </GradeProvider> */}

      <RouterProvider router={router} />
      {/* <App /> */}
      {/*  same as calling App() */}
    </CountProvider>

  </React.StrictMode>,
)
