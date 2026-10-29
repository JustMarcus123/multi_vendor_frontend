import { Navbar } from "./navbar"
import {Outlet} from "react-router-dom"
import Footer from "@/components/layout/footer"

export const StoreLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
