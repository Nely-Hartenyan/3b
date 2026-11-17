import { useState,useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/productsApi";

function ProductList({ onAddToCart }) {
  const [productsData,setProductsData] = useState([])
  const [isLoading,setIsLoading] = useState(true)

  
   useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);

        const data = await fetchProducts();

        setProductsData(data);
      } catch (err) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

   if (isLoading) {
    return (
      <section className="px-6 py-16 text-center">
        <p className="text-lg text-gray-600">
          Loading products...
        </p>
      </section>
    );
  }

  return (
    <section
      id="products"
      className="mx-auto max-w-7xl px-6 py-16"
    >
      <h2 className="mb-10 text-3xl font-bold">
        Our Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productsData.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;