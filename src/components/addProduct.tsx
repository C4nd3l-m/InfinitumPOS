"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import { saveProduct } from "@/actions/saveProduct";
import { ICreateProduct } from "@/interfaces/ICreateProduct";

const AddProduct = () => {
    const initialState: ICreateProduct = {
        name: "",
        costPrice: 0,
        priceCash: 0,
        priceCard: 0,
    };


    const [productData, setProductData] = useState(initialState);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setProductData({
            ...productData,
            [name]: event.target.type === "number" ? Number(value) : value,
        });

    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await saveProduct(productData);
            toast.success("Product saved");
        } catch (error) {
            console.error("Error saving product", error);
            toast.error("An error occurred");
        }
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>Name</label>
                <input title="name"
                    type="text"
                    name="product"
                    value={productData.name}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Cost Price</label>
                <input
                    title="cost"
                    type="number"
                    name="costPrice"
                    value={productData.costPrice}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Sale Price</label>
                <input
                    title="sale"
                    type="number"
                    name="salePrice"
                    value={productData.priceCash}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <label>Card Sale Price</label>
                <input
                    title="card"
                    type="number"
                    name="cardPrice"
                    value={productData.priceCard}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit">Save Product</button>
        </form>
    );
};

export default AddProduct;
