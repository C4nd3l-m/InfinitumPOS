import AddProduct from "@/components/addProduct";

const Addproducts = () => {
  return (
    <div className="min-h-screen bg-[#0c1b2a] text-[#d4af37] flex flex-col items-center justify-start py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 tracking-wide">Agregar productos</h1>
      <AddProduct />
    </div>
  );
};

export default Addproducts;
