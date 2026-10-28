import { Navbar } from "./navbar"
import {Outlet} from "react-router-dom"
import { Footer } from "./footer"

export const StoreLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
