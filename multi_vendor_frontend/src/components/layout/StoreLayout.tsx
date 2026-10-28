import { Navbar } from "./Navbar"
import {Outlet} from "react-router-dom"
import { Footer } from "./Footer"

export const StoreLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
