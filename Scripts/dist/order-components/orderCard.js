export function OrderCard(order, flights) {
    var _a;
    const card = document.createElement('div');
    card.className = 'order-card';
    const flight = flights.find((f) => f.id === order.flightId);
    card.innerHTML = `
    <p><strong>Item:</strong> ${order.item}</p>
    <p><strong>Quantity:</strong> ${order.quantity}</p>
    <p><strong>Order Date:</strong> ${order.orderDate}</p>
    <p><strong>Flight:</strong> ${(_a = flight === null || flight === void 0 ? void 0 : flight.flightNumber) !== null && _a !== void 0 ? _a : 'Unknown'}</p>
    <p><strong>Delivery Date:</strong> ${order.deliveryDate}</p>
  `;
    return card;
}
