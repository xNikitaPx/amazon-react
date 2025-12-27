import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import "./CheckoutPage.css";

function CheckoutPage({ cart, products, setCart }) {
  const deliveryOptions = [
    {
      id: "1",
      deliveryDays: 7,
      priceCents: 0,
    },
    {
      id: "2",
      deliveryDays: 3,
      priceCents: 499,
    },
    {
      id: "3",
      deliveryDays: 1,
      priceCents: 999,
    },
  ];

  let productCostCents = 0;
  let shippingCostCents = 0;

  cart.forEach((cartItem) => {
    const matchingProduct = products.find(
      (product) => product.id === cartItem.productId
    );

    const deliveryOption =
      deliveryOptions.find(
        (option) => option.id === cartItem.deliveryOptionId
      ) || deliveryOptions[0];

    if (!matchingProduct) return null;

    productCostCents += matchingProduct.priceCents * cartItem.quantity;
    shippingCostCents += deliveryOption.priceCents;
  });

  const totalCostBeforeTaxCents = productCostCents + shippingCostCents;
  const taxCents = (totalCostBeforeTaxCents * 10) / 100;
  const totalCostCents = totalCostBeforeTaxCents + taxCents;

  const paymentSummary = {
    productCostCents,
    shippingCostCents,
    totalCostBeforeTaxCents,
    taxCents,
    totalCostCents,
  };

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            products={products}
            setCart={setCart}
          />
          <PaymentSummary
            paymentSummary={paymentSummary}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </>
  );
}

export { CheckoutPage };
