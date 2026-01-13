var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getFlights } from './data.js';
import { NewOrderCard } from './order-components/newOrderCard.js';
import { OrderCard } from './order-components/orderCard.js';
export const orders = [
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
const renderOrders = () => {
    if (!ordersContainer)
        return;
    const flights = getFlights();
    ordersContainer.innerHTML = '';
    orders.forEach((order) => {
        ordersContainer.appendChild(OrderCard(order, flights));
    });
};
// 2. Function to fetch users from the API
const fetchUserNames = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok)
            throw new Error('Failed to fetch users');
        const users = yield response.json();
        // Return only the strings (names)
        return users.map((user) => user.name);
    }
    catch (error) {
        console.error('Error loading users:', error);
        return ['Default User']; // Fallback in case of API failure
    }
});
// Initial render
if (ordersContainer) {
    renderOrders();
}
// 3. Attach add-order logic with Async/Await
if (addOrderBtn && ordersContainer) {
    addOrderBtn.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        // Show a "loading" state on the button if you want
        addOrderBtn.innerText = 'Loading Users...';
        addOrderBtn.setAttribute('disabled', 'true');
        const currentFlights = getFlights();
        // FETCH: Wait for the API names
        const names = yield fetchUserNames();
        // RESET: Reset button state
        addOrderBtn.innerText = 'Add New Order';
        addOrderBtn.removeAttribute('disabled');
        const form = NewOrderCard((order) => {
            orders.push(order);
            renderOrders();
        }, currentFlights, names);
        ordersContainer.appendChild(form);
    }));
}
