import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

function HomePage({ cart, addToCart, products }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={filteredProducts} addToCart={addToCart} />
      </div>
    </>
  );
}

export { HomePage };
