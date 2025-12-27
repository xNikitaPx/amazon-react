import { Link } from "react-router";
import dayjs from "dayjs";
import { Header } from "../components/Header";
import { useParams } from "react-router";
import "./TrackingPage.css";
import { orders } from "../utils/order";

function TrackingPage({ cart, products }) {
  const { orderId, productId } = useParams();
  const order = orders.find((order) => order.id === orderId);

  const product = products.find((product) => product.id === productId);

  if (!product) return null;

  const orderProduct = order.products.find(
    (details) => details.productId === product.id
  );

  const totalDeliveryTimeMs =
    dayjs(orderProduct.estimatedDeliveryTime) - dayjs(order.orderTime);
  const timePassedMs = dayjs().valueOf() - dayjs(order.orderTime);

  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }

  console.log(deliveryPercent);

  const isPreparing = deliveryPercent < 33;
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
  const isDelivered = deliveryPercent === 100;

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            {deliveryPercent >= 100 ? "Delivered on " : "Arriving on "}
            {dayjs(orderProduct.estimatedDeliveryTime).format("dddd, MMMM D")}
          </div>

          <div className="product-info">{product.name}</div>

          <div className="product-info">Quantity: {orderProduct.quantity}</div>

          <img className="product-image" src={product.image} />

          <div className="progress-labels-container">
            <div
              className={`progress-label ${isPreparing && "current-status"}`}
            >
              Preparing
            </div>
            <div className={`progress-label ${isShipped && "current-status"}`}>
              Shipped
            </div>
            <div
              className={`progress-label ${isDelivered && "current-status"}`}
            >
              Delivered
            </div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export { TrackingPage };
