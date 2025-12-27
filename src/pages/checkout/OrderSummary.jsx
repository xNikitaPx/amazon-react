import { CartItem } from "./CartItem";

function OrderSummary({ cart, deliveryOptions, products, setCart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.productId}
              cartItem={cartItem}
              deliveryOptions={deliveryOptions}
              products={products}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
    </div>
  );
}

export { OrderSummary };
