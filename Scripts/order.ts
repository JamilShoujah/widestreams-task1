import { getFlights } from './data.js';
import { NewOrderCard } from './order-components/newOrderCard.js';
import { OrderCard } from './order-components/orderCard.js';

export interface Order {
  id: number;
  item: string;
  quantity: number;
  orderDate: string;
  flightId: number;
  deliveryDate: string;
  orderedBy: string;
}

// 1. Define the User interface based on JSONPlaceholder's structure
interface User {
  id: number;
  name: string;
}

export const orders: Order[] = [
  {
    id: 1,
    item: 'Pizza',
    quantity: 10,
    orderDate: '2026-01-08',
    flightId: 1,
    deliveryDate: '2026-01-10',
    orderedBy: 'Leanne Graham', // Example from API
  },
];

const ordersContainer = document.getElementById('orders-container');
const addOrderBtn = document.getElementById('add-order-btn');

const renderOrders = (): void => {
  if (!ordersContainer) return;

  const flights = getFlights();
  ordersContainer.innerHTML = '';

  orders.forEach((order) => {
    ordersContainer.appendChild(OrderCard(order, flights));
  });
};

// 2. Function to fetch users from the API
const fetchUserNames = async (): Promise<string[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');

    const users: User[] = await response.json();
    // Return only the strings (names)
    return users.map((user) => user.name);
  } catch (error) {
    console.error('Error loading users:', error);
    return ['Default User']; // Fallback in case of API failure
  }
};

// Initial render
if (ordersContainer) {
  renderOrders();
}

// 3. Attach add-order logic with Async/Await
if (addOrderBtn && ordersContainer) {
  addOrderBtn.addEventListener('click', async () => {
    // Show a "loading" state on the button if you want
    addOrderBtn.innerText = 'Loading Users...';
    addOrderBtn.setAttribute('disabled', 'true');

    const currentFlights = getFlights();

    // FETCH: Wait for the API names
    const names = await fetchUserNames();

    // RESET: Reset button state
    addOrderBtn.innerText = 'Add New Order';
    addOrderBtn.removeAttribute('disabled');

    const form = NewOrderCard(
      (order) => {
        orders.push(order);
        renderOrders();
      },
      currentFlights,
      names, // Now passing the real names from the API
    );

    ordersContainer.appendChild(form);
  });
}
