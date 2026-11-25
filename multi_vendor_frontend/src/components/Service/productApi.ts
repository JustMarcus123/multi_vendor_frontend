import { apiRequest } from "@/lib/API";
import type { VendorProduct } from "@/pages/Vendor/VendorProductPage";



export interface ProductType{
    product:{
        id: string;
        productName: string;
        price: number;
        category: string;
        image?: File| string | null;
    }
}



export function createProductApi(form: FormData) {
  return apiRequest<{ product: ProductType }>("/vendor/products", {
    method: "POST",
    body: form,
  });
}

export function getProductApi(){

 return apiRequest<{products:VendorProduct[]}>("/vendor/products",{
  method: "GET"
 })

}