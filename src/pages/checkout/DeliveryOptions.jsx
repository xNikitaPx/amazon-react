import dayjs from "dayjs";
import { formatMoney } from "../../utils//money";

function DeliveryOptions({ deliveryOptions, setCart, cartItem }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        let priceString = "FREE Shipping";

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        const updateDeliveryOptions = () => {
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.productId === cartItem.productId
                ? { ...item, deliveryOptionId: deliveryOption.id }
                : item
            )
          );
        };

        function calculateDeliveryDate(deliveryOption) {
          const today = dayjs();
          let deliveryDate = today.add(deliveryOption.deliveryDays, "days");
          const dateString = deliveryDate.format("dddd, MMMM D");
          return dateString;
        }

        return (
          <label key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={updateDeliveryOptions}
              className="delivery-option-input"
              name={`delivery-option-${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {calculateDeliveryDate(deliveryOption)}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </label>
        );
      })}
    </div>
  );
}

export { DeliveryOptions };
