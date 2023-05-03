import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routers'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import AuthProvider from './AuthProvider/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
   <Toaster />
  </AuthProvider>
  </React.StrictMode>
)
