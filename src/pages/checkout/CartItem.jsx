import { DeliveryDate } from "./DeliveryDate";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";

function CartItem({ cartItem, deliveryOptions, loadCart }) {
  return (
    <div className="cart-item-container">
      <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem} />
      <div className="cart-item-details-grid">
        <CartItemDetails cartItem={cartItem} loadCart={loadCart} />
        <DeliveryOptions
          deliveryOptions={deliveryOptions}
          cartItem={cartItem}
          loadCart={loadCart}
        />
      </div>
    </div>
  );
}

export { CartItem };
