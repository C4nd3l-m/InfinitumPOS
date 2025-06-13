import { IProducts } from "@/interfaces/IProducts"

const API_URL = process.env.NEXT_PUBLIC_API_URL


export const editProduct = async (editproduct: IProducts) =>{
    try{
        const response = await fetch(`${API_URL}/product/product`, {
            method: "PUT",
            body: JSON.stringify({product: editproduct})
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