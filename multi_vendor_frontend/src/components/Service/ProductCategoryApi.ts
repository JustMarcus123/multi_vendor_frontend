import { apiRequest } from "@/lib/API";
import type { ProductCategory } from "@/pages/Vendor/VendorProductPage";


export interface ProductCategoryType{
    category:{
         name: string;
  slug: string;
  description?: string;
  isActive: boolean; 
    }
}

export  function CategoryApi(){

    return  apiRequest <ProductCategory []>("/product/category",{
        method: "GET"
    })

}