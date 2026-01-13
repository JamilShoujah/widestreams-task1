# Exercise 1 – Flights and Orders

This repository contains a **static web application** built with **TypeScript, HTML, and CSS** for managing and visualizing flights and orders.

The project runs entirely in the browser and does **not** use a backend or server-side Node.js logic.  
It is served locally using a static file server.

---

## 📌 Project Overview

The purpose of this exercise is to model flights and orders and present them through a simple UI using reusable TypeScript components.

Key features:

- Modular TypeScript architecture
- Client-side data handling
- Reusable UI components for flights and orders
- Multiple HTML pages with dedicated styles
- Compiled JavaScript served statically

---

## 🛠 Tech Stack

- **TypeScript** – application logic and components
- **HTML** – page structure
- **CSS** – styling
- **serve** – static file server for local development

---

## 📂 Folder Structure

.
├── index.html
├── pages
│ ├── flights.html
│ ├── flights.css
│ ├── orders.html
│ └── orders.css
├── Scripts
│ ├── data.ts
│ ├── flights.ts
│ ├── order.ts
│ ├── flight-components
│ │ ├── flightCard.ts
│ │ └── newFlightCard.ts
│ ├── order-components
│ │ ├── orderCard.ts
│ │ └── newOrderCard.ts
│ ├── dist
│ │ ├── data.js
│ │ ├── flights.js
│ │ ├── order.js
│ │ ├── flight-components
│ │ │ ├── flightCard.js
│ │ │ └── newFlightCard.js
│ │ └── order-components
│ │ ├── orderCard.js
│ │ └── newOrderCard.js
├── tsconfig.json
└── README.md

## ▶️ How to Run the Project

### 1️⃣ Compile TypeScript

Make sure TypeScript is installed globally:

```bash
tsc

npx serve

From the project root directory:

npx serve


Open the provided URL in your browser (usually):

http://localhost:3000

📄 Available Pages

/index.html – Main entry point

/pages/flights.html – Flights view

/pages/orders.html – Orders view
```
