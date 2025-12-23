import { OrdersCard } from "./OrdersCard";

function OrdersGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return <OrdersCard key={order.id} order={order} />;
      })}
    </div>
  );
}

export { OrdersGrid };
