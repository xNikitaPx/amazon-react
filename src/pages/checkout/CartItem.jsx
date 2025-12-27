import { DeliveryDate } from "./DeliveryDate";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";

function CartItem({ cartItem, deliveryOptions, products, cart, setCart }) {
  return (
    <div className="cart-item-container">
      <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem} />
      <div className="cart-item-details-grid">
        <CartItemDetails
          cartItem={cartItem}
          products={products}
          cart={cart}
          setCart={setCart}
        />
        <DeliveryOptions
          deliveryOptions={deliveryOptions}
          cartItem={cartItem}
          setCart={setCart}
        />
      </div>
    </div>
  );
}

export { CartItem };
