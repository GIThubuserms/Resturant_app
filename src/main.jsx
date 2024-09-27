import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Dishes from './components/Dishes.jsx'
import Aboutsection from './components/Aboutsection.jsx'
import Mission from './components/Mission.jsx'
import Expertisesection from './components/Expertisesection.jsx'
import Review from './components/Review.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'



const Router=createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>             
  <Route path='Review' element={<Review/>}/>
  <Route path='Dishes' element={<Dishes/>}/>
  <Route path='Mission' element={<Mission/>}/>
  <Route path='Contact'  element={<Contact/>}/>
  <Route path='About'  element={<Aboutsection/>}/>
  <Route path='Expertise'  element={<Expertisesection/>}/>
  </Route> 

)   
)


ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider  router={Router}>
   </RouterProvider>

)
