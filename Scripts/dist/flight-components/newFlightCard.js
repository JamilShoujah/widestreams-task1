export const NewFlightCard = (onSave) => {
    const card = document.createElement('div');
    card.className = 'flight-card'; // reuse same styling
    card.innerHTML = `
    <div class="flight-header">
      <input type="text" placeholder="Flight Number" class="input-flight-number" />
      <input type="text" placeholder="Destination" class="input-destination" />
    </div>

    <div class="flight-info">
      <div>
        <strong>Start:</strong>
        <input type="date" class="input-start-date" />
        <input type="time" class="input-start-time" />
      </div>
      <div>
        <strong>End:</strong>
        <input type="date" class="input-end-date" />
        <input type="time" class="input-end-time" />
      </div>
      <div>
        <strong>Aircraft:</strong>
        <input type="text" class="input-aircraft" />
      </div>
      <div>
        <strong>Capacity:</strong>
        <input type="number" class="input-capacity" />
      </div>
    </div>

    <button class="save-flight-btn">Save</button>
    <button class="cancel-flight-btn">Cancel</button>
  `;
    // Save button
    card.querySelector('.save-flight-btn').addEventListener('click', () => {
        const newFlight = {
            id: Date.now(), // unique id
            flightNumber: card.querySelector('.input-flight-number').value,
            destination: card.querySelector('.input-destination').value,
            startDate: card.querySelector('.input-start-date').value,
            startTime: card.querySelector('.input-start-time').value,
            endDate: card.querySelector('.input-end-date').value,
            endTime: card.querySelector('.input-end-time').value,
            aircraft: card.querySelector('.input-aircraft').value,
            capacity: parseInt(card.querySelector('.input-capacity').value),
        };
        onSave(newFlight);
        card.remove(); // remove form after saving
    });
    // Cancel button
    card.querySelector('.cancel-flight-btn').addEventListener('click', () => {
        card.remove();
    });
    return card;
};
