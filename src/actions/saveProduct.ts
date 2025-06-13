import { ICreateProduct } from "@/interfaces/ICreateProduct"

const API_URL = process.env.NEXT_PUBLIC_API_URL


export const saveProduct = async (saveProduct: ICreateProduct) =>{
    try{
        const response = await fetch(`${API_URL}/product/product`, {
            method: "POST",
            body: JSON.stringify({product: saveProduct})
        })
        if(!response.ok){
            throw new Error(`Failed to save product: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }
    catch (error){
        console.error("Error in save product:", error)
        throw error;
    }
}