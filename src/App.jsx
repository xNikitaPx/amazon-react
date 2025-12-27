import { Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/orders/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get(
        "https://supersimplebackend.dev/products"
      );

      setProducts(response.data);
    };
    getHomeData();
  }, []);

  const [cart, setCart] = useState(
    loadFromStorage() ?? [
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionId: "1",
      },
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionId: "2",
      },
    ]
  );

  function saveToStorage(cartItem) {
    localStorage.setItem("cart-react", JSON.stringify(cartItem));
  }

  function loadFromStorage() {
    return JSON.parse(localStorage.getItem("cart-react"));
  }

  const addToCart = (productId, quantity) => {
    setCart((prevCart) => {
      const matchingItem = prevCart.find(
        (cartItem) => productId === cartItem.productId
      );
      if (matchingItem) {
        return prevCart.map((cartItem) =>
          cartItem.productId === productId
            ? { ...cartItem, quantity: cartItem.quantity + Number(quantity) }
            : cartItem
        );
      }

      return [
        ...prevCart,
        {
          productId,
          quantity: Number(quantity),
          deliveryOptionId: "1",
        },
      ];
    });
  };

  useEffect(() => {
    saveToStorage(cart);
  }, [cart]);

  return (
    <Routes>
      <Route
        index
        element={
          <HomePage cart={cart} addToCart={addToCart} products={products} />
        }
      />
      <Route
        path="checkout"
        element={
          <CheckoutPage cart={cart} products={products} setCart={setCart} />
        }
      />
      <Route
        path="orders"
        element={
          <OrdersPage cart={cart} products={products} addToCart={addToCart} />
        }
      />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} products={products} />}
      />
      <Route path="*" element={<NotFoundPage cart={cart} />} />
    </Routes>
  );
}

export { App };
