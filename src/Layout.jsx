import React from "react";
import { Outlet } from "react-router-dom";
import Headersection from './components/Headersection.jsx'
import Fotter from './components/Fotter.jsx'



function Layout() {
  return (
    <>
    <Headersection/>
    <Outlet/>
    <Fotter/>
    </>  
    )
}

export default Layout
