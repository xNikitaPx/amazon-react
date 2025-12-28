const orders = JSON.parse(localStorage.getItem("orders-react")) || [];

function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("orders-react", JSON.stringify(orders));
}

function getOrder(orderId) {
  let matchingOrder;

  orders.forEach((order) => {
    if (order.id === orderId) {
      matchingOrder = order;
    }
  });

  return matchingOrder;
}

export { orders, addOrder, getOrder };
