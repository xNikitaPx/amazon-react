import { Link } from "react-router";
import dayjs from "dayjs";
import { getImageUrl } from "../../utils/getImageUrl";
import BuyAgainIcon from "../../assets/images/icons/buy-again.png";
import { useState } from "react";

function OrderProduct({ order, orderProduct, products, addToCart }) {
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const showMessage = async () => {
    setShowAddedMessage(true);
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 2000);
  };

  const product = products.find(
    (product) => product.id === orderProduct.productId
  );
  if (!product) return null;

  const onAddToCard = () => {
    addToCart(product.id, orderProduct.quantity);
    showMessage();
  };

  return (
    <>
      <div className="product-image-container">
        <img src={getImageUrl(product.image)} />
      </div>

      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-delivery-date">
          Arriving on:{" "}
          {dayjs(orderProduct.estimatedDeliveryTime).format("MMMM D")}
        </div>
        <div className="product-quantity">
          Quantity: {orderProduct.quantity}
        </div>
        {!showAddedMessage ? (
          <button className="buy-again-button button-primary">
            <img className="buy-again-icon" src={BuyAgainIcon} />
            <span className="buy-again-message" onClick={onAddToCard}>
              Add to Cart
            </span>
          </button>
        ) : (
          <button className="buy-again-button button-primary">
            <img className="buy-again-icon" src={BuyAgainIcon} />
            <span className="buy-again-message" onClick={onAddToCard}>
              Added
            </span>
          </button>
        )}
      </div>

      <div className="product-actions">
        <Link to={`/tracking/${order.id}/${product.id}`}>
          <button className="track-package-button button-secondary">
            Track package
          </button>
        </Link>
      </div>
    </>
  );
}

export { OrderProduct };
