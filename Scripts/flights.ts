import { FlightCard } from './flight-components/flightCard.js';
import { NewFlightCard } from './flight-components/newFlightCard.js';
// Adjust path to './data.js' if they are in the same folder
import { Flight, getFlights, saveFlights } from './data.js';

// 1. Load data from LocalStorage via our shared helper
let flights: Flight[] = getFlights();

const container = document.getElementById('flights-container');
const addBtn = document.getElementById('add-flight-btn');

const renderFlights = (): void => {
  // Guard clause: stop if the element isn't on the current page
  if (!container) return;

  container.innerHTML = '';

  flights.forEach((flight: Flight) => {
    const card = FlightCard(flight);
    container.appendChild(card);
  });
};

// 2. Initial render: only runs if we are on the flights page
if (container) {
  renderFlights();
}

// 3. Setup Add Flight Logic
if (addBtn && container) {
  addBtn.addEventListener('click', (): void => {
    const newFlightForm = NewFlightCard((newFlight: Flight) => {
      // Update the local array
      flights.push(newFlight);

      // Save to LocalStorage so 'orders.html' can see the new flights
      saveFlights(flights);

      // Re-render the list
      renderFlights();
    });

    container.appendChild(newFlightForm);
  });
}
