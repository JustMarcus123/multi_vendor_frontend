import { Route, Routes } from "react-router-dom"
import { StoreLayout } from "./components/layout/storeLayout"
import { HomePage } from "./pages/HomePage"
import { ProductsPage } from "./pages/ProductsPage"


export const App = () => {
  return (
   
    <Routes>

      //1. this route is for the store 
      <Route element={<StoreLayout/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
      </Route>

    </Routes>

  )
}
