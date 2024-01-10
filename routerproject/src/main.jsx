import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />} >
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
