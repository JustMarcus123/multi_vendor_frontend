import { Route, Routes } from "react-router-dom"
import { StoreLayout } from "./components/layout/StoreLayout"
import { HomePage } from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import VendorLayout from "./components/vendor/VendorLayout"
import { GuestOnly, RequiredRole } from "./components/RequireRoles"
import AdminDashboard from "./components/admin/AdminDashboard"


 export default function App (){
  return (
    <div>
      <Routes>
        {/* public */}
        <Route element={<StoreLayout/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>

        {/* guest user only */}
        <Route>
          <Route path="/login" element={<GuestOnly><AuthPage mode="login"/></GuestOnly>} />
          <Route path="/register" element={<GuestOnly><AuthPage mode ="register"/></GuestOnly>}/>
        </Route>

        {/* below are protected route */}

        {/* vendor */}
        <Route path="/vendor/*" element={<RequiredRole roles={["vendor", "admin"]}><VendorLayout/></RequiredRole>}>
        </Route>

        {/* admin */}
        <Route path="/admin/*" element={<RequiredRole roles={["admin"]}><AdminDashboard/></RequiredRole> }>

        </Route>
      </Routes>
    </div>
  )
}
