import { getProducts } from "@/actions/getProducts"

const Products = async () => {
    try {
        const products = await getProducts();
        {
            products.map
        }
    }
    catch {
        return <div> Error</div>
    }
    return (
        <>
            <div>
            </div>
        </>
    )
}

export default Products