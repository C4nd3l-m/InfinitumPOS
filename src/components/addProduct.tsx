"use client";
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
    const { name, value, type } = event.target;
    setProductData({
      ...productData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!productData.name.trim()) {
    toast.error("El nombre del producto es obligatorio");
    return;
  }

  try {
    await saveProduct(productData);
    toast.success("Producto guardado");
    setProductData(initialState);  
  } catch (error) {
    console.error("Error saving product", error);
    toast.error("Error al guardar");
  }
};


  return (
    <form
      onSubmit={handleOnSubmit}
      className="bg-[#132c41] p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 border border-[#d4af37]"
    >
      <div>
        <label className="block mb-1 font-semibold">Nombre</label>
        <input
          title="name"
          type="text"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#0c1b2a] text-[#d4af37] border border-[#d4af37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Precio de costo</label>
        <input
          title="cost"
          type="number"
          name="costPrice"
          value={productData.costPrice}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#0c1b2a] text-[#d4af37] border border-[#d4af37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Precio en efectivo</label>
        <input
          title="sale"
          type="number"
          name="priceCash"
          value={productData.priceCash}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#0c1b2a] text-[#d4af37] border border-[#d4af37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Precio con tarjeta</label>
        <input
          title="card"
          type="number"
          name="priceCard"
          value={productData.priceCard}
          onChange={handleInputChange}
          className="w-full px-4 py-2 bg-[#0c1b2a] text-[#d4af37] border border-[#d4af37] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 bg-[#d4af37] text-[#0c1b2a] font-bold rounded-md hover:bg-yellow-500 transition"
      >
        Guardar producto
      </button>
    </form>
  );
};

export default AddProduct;
