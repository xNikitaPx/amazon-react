import { Header } from "../../components/Header";
import { OrdersGrid } from "./OrdersGrid";
import "./OrdersPage.css";

function OrdersPage({ cart, products, addToCart }) {
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
      <Header cart={cart} />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid products={products} addToCart={addToCart} />
      </div>
    </>
  );
}

export { OrdersPage };
