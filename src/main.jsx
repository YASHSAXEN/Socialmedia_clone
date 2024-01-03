import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './routes/Home'
import ProfilePage from './routes/ProfilePage'

const router = createBrowserRouter([
  {path:'/', element:<Home/>},
  {path:'/profile-page',element:<ProfilePage/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
