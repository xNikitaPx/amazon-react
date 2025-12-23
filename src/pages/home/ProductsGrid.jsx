import { Product } from "./Product";

function ProductsGrid({ products }) {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export { ProductsGrid };
