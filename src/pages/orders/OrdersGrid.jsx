import { orders } from "../../utils/order";
import { OrdersCard } from "./OrdersCard";

function OrdersGrid({ products, addToCart }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <OrdersCard
            key={order.id}
            order={order}
            products={products}
            addToCart={addToCart}
          />
        );
      })}
    </div>
  );
}

export { OrdersGrid };
