import { getProducts } from "@/actions/getProducts";

const Products: React.FC = async () => {
  const products = await getProducts();
  console.log(products)

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Precio costo: {product.costPrice}</p>
          <p>Precio en efectivo: {product.priceCash}</p>
          <p>Precio con tarjeta: {product.priceCard}</p>
          <button>Editar producto</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
