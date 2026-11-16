import { Route, Routes } from "react-router-dom"
import { StoreLayout } from "./components/layout/StoreLayout"
import { HomePage } from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import VendorLayout from "./components/vendor/VendorLayout"


 export default function App (){
  return (
    <div>
      <Routes>
        <Route element={<StoreLayout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<AuthPage mode="login"/>} />
          <Route path="/register" element={<AuthPage mode ="register"/>}/>
        </Route>

        {/* vendor */}
        <Route path="/vendor" element={<VendorLayout/>}>

        </Route>
      </Routes>
    </div>
  )
}
