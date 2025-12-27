import { formatMoney } from "../../utils//money";
import { useState } from "react";

function CartItemDetails({ cartItem, products, cart, setCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const matchingItem = products.find(
    (product) => product.id === cartItem.productId
  );

  const deleteCartItem = () => {
    setCart(cart.filter((item) => cartItem.productId !== item.productId));
  };

  const updatedQuantity = () => {
    if (isUpdatingQuantity) {
      setCart(
        cart.map((item) =>
          item.productId === cartItem.productId
            ? { ...item, quantity: +quantity }
            : item
        )
      );
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  };

  const updatedQuantityInput = (event) => {
    setQuantity(event.target.value);
  };

  const handleQuantityKeyDown = (event) => {
    const keyPressed = event.key;

    if (keyPressed === "Enter") {
      updatedQuantity();
    } else if (keyPressed === "Escape") {
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  };

  if (!matchingItem) return null;

  return (
    <>
      <img className="product-image" src={matchingItem.image} />

      <div className="cart-item-details">
        <div className="product-name">{matchingItem.name}</div>
        <div className="product-price">
          {formatMoney(matchingItem.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdatingQuantity ? (
              <input
                type="text"
                className="quantity-textbox"
                value={quantity}
                onChange={updatedQuantityInput}
                onKeyDown={handleQuantityKeyDown}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={updatedQuantity}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}

export { CartItemDetails };
