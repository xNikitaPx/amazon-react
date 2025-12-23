import { OrderProduct } from "./OrderProduct";

function OrderDetailsGrid({ order }) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <OrderProduct
            key={orderProduct.product.id}
            order={order}
            orderProduct={orderProduct}
          ></OrderProduct>
        );
      })}
    </div>
  );
}

export { OrderDetailsGrid };
