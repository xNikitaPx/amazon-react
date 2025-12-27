import { OrderProduct } from "./OrderProduct";

function OrderDetailsGrid({ order, products, addToCart }) {
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <OrderProduct
            key={orderProduct.productId}
            order={order}
            orderProduct={orderProduct}
            products={products}
            addToCart={addToCart}
          ></OrderProduct>
        );
      })}
    </div>
  );
}

export { OrderDetailsGrid };
