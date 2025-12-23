import { OrdersCardHeader } from "./OrdersCardHeader";
import { OrderDetailsGrid } from "./OrderDetailsGrid";

function OrdersCard({ order }) {
  return (
    <div className="order-container">
      <OrdersCardHeader order={order} />
      <OrderDetailsGrid order={order} />
    </div>
  );
}

export { OrdersCard };
