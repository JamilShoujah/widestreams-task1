import { Flight } from '../data.js';
import { Order } from '../order.js';

export function OrderCard(order: Order, flights: Flight[]): HTMLElement {
  const card = document.createElement('div');
  card.className = 'order-card';
  const flight = flights.find((f) => f.id === order.flightId);

  card.innerHTML = `
    <p><strong>Item:</strong> ${order.item}</p>
    <p><strong>Quantity:</strong> ${order.quantity}</p>
    <p><strong>Order Date:</strong> ${order.orderDate}</p>
    <p><strong>Flight:</strong> ${flight?.flightNumber ?? 'Unknown'}</p>
    <p><strong>Delivery Date:</strong> ${order.deliveryDate}</p>
  `;

  return card;
}
