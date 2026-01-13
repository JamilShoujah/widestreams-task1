import { Flight } from '../data';

export const FlightCard = (flight: Flight): HTMLDivElement => {
  const card = document.createElement('div');
  card.className = 'flight-card'; // styling applied via CSS

  card.innerHTML = `
    <div class="flight-header">
      <span class="flight-number">${flight.flightNumber}</span>
      <span class="flight-destination">→ ${flight.destination}</span>
    </div>

    <div class="flight-info">
      <div>
        <strong>Start:</strong> ${flight.startDate} ${flight.startTime}
      </div>
      <div>
        <strong>Available Until:</strong> ${flight.endDate} ${flight.endTime}
      </div>
      <div>
        <strong>Aircraft:</strong> ${flight.aircraft}
      </div>
      <div>
        <strong>Capacity:</strong> ${flight.capacity}
      </div>
    </div>
  `;

  return card;
};
