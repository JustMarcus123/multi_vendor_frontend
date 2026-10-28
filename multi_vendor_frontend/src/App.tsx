import { Route, Routes } from "react-router-dom"
import { StoreLayout } from "./components/layout/StoreLayout"
import { HomePage } from "./pages/HomePage"


 export default function App (){
  return (
    <div>
      <Routes>
        <Route element={<StoreLayout/>}>
          <Route path="/" element={<HomePage/>}/>
        </Route>
      </Routes>
    </div>
  )
}
