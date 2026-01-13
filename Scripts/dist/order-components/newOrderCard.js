export const NewOrderCard = (onSubmit, flights, orderedByOptions) => {
    const card = document.createElement('div');
    card.className = 'order-card';
    const flightOptions = flights
        .map((f) => `<option value="${f.id}">${f.flightNumber} (${f.startDate})</option>`)
        .join('');
    const orderedByOptionsHtml = orderedByOptions
        .map((name) => `<option value="${name}">${name}</option>`)
        .join('');
    card.innerHTML = `
    <div class="order-header">
      <input type="text" placeholder="Item" class="input-item" />
      <input type="number" placeholder="Quantity" class="input-quantity" min="1" />
      <input type="date" class="input-order-date" />
    </div>

    <div class="order-info">
      <strong>Flight:</strong>
      <select class="select-flight">
        <option value="" disabled selected>Select a Flight</option>
        ${flightOptions}
      </select>
    </div>

    <div class="order-info">
      <strong>Ordered By:</strong>
      <select class="select-ordered-by">
        <option value="" disabled selected>Select a person</option>
        ${orderedByOptionsHtml}
      </select>
    </div>

    <button class="save-order-btn">Save</button>
    <button class="cancel-order-btn">Cancel</button>
  `;
    card.querySelector('.save-order-btn').addEventListener('click', () => {
        const item = card.querySelector('.input-item').value;
        const quantity = Number(card.querySelector('.input-quantity').value);
        const orderDate = card.querySelector('.input-order-date').value;
        const flightId = Number(card.querySelector('.select-flight').value);
        const orderedBy = card.querySelector('.select-ordered-by').value;
        if (!orderedBy)
            return alert('Please select who ordered this');
        const selectedFlight = flights.find((f) => f.id === flightId);
        if (!selectedFlight)
            return alert('Please select a valid flight');
        if (quantity > selectedFlight.capacity)
            return alert(`Quantity cannot exceed flight capacity (${selectedFlight.capacity})`);
        if (new Date(orderDate) >= new Date(selectedFlight.startDate))
            return alert('Order date must be before flight date');
        const newOrder = {
            id: Date.now(),
            item,
            quantity,
            orderDate,
            flightId: selectedFlight.id,
            deliveryDate: selectedFlight.startDate,
            orderedBy, // ✅
        };
        onSubmit(newOrder);
        card.remove();
    });
    card.querySelector('.cancel-order-btn').addEventListener('click', () => {
        card.remove();
    });
    return card;
};
