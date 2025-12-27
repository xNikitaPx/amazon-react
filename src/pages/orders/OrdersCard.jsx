import { OrdersCardHeader } from "./OrdersCardHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

function OrdersCard({ order, products, addToCart }) {
  return (
    <div className="order-container">
      <OrdersCardHeader order={order} />
      <OrderDetailsGrid
        order={order}
        products={products}
        addToCart={addToCart}
      />
    </div>
  );
}

export { OrdersCard };
