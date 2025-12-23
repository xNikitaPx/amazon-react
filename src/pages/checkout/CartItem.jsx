import { DeliveryDate } from "./DeliveryDate";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOptions } from "./DeliveryOptions";

function CartItem({ cartItem, deliveryOptions }) {
  return (
    <div className="cart-item-container">
      <DeliveryDate deliveryOptions={deliveryOptions} cartItem={cartItem} />
      <div className="cart-item-details-grid">
        <CartItemDetails cartItem={cartItem} />
        <DeliveryOptions
          deliveryOptions={deliveryOptions}
          cartItem={cartItem}
        />
      </div>
    </div>
  );
}

export { CartItem };
