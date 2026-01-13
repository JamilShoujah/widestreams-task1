const STORAGE_KEY = 'airline_flights_data';
const initialFlights = [
    {
        id: 1,
        flightNumber: 'AA101',
        startDate: '2026-01-10',
        startTime: '08:00',
        endDate: '2026-01-10',
        endTime: '12:00',
        destination: 'New York',
        aircraft: 'Boeing 737',
        capacity: 180,
    },
    {
        id: 2,
        flightNumber: 'BA202',
        startDate: '2026-01-11',
        startTime: '09:00',
        endDate: '2026-01-11',
        endTime: '14:00',
        destination: 'London',
        aircraft: 'Airbus A320',
        capacity: 160,
    },
    {
        id: 3,
        flightNumber: 'DL303',
        startDate: '2026-01-12',
        startTime: '07:30',
        endDate: '2026-01-12',
        endTime: '11:45',
        destination: 'Los Angeles',
        aircraft: 'Boeing 777',
        capacity: 300,
    },
    {
        id: 4,
        flightNumber: 'AF404',
        startDate: '2026-01-13',
        startTime: '13:15',
        endDate: '2026-01-13',
        endTime: '18:00',
        destination: 'Paris',
        aircraft: 'Airbus A330',
        capacity: 250,
    },
    {
        id: 5,
        flightNumber: 'LH505',
        startDate: '2026-01-14',
        startTime: '06:00',
        endDate: '2026-01-14',
        endTime: '10:30',
        destination: 'Frankfurt',
        aircraft: 'Boeing 747',
        capacity: 350,
    },
    {
        id: 6,
        flightNumber: 'EK606',
        startDate: '2026-01-15',
        startTime: '22:00',
        endDate: '2026-01-16',
        endTime: '06:00',
        destination: 'Dubai',
        aircraft: 'Airbus A380',
        capacity: 500,
    },
    {
        id: 7,
        flightNumber: 'SQ707',
        startDate: '2026-01-16',
        startTime: '11:00',
        endDate: '2026-01-16',
        endTime: '19:00',
        destination: 'Singapore',
        aircraft: 'Boeing 787',
        capacity: 280,
    },
    {
        id: 8,
        flightNumber: 'QF808',
        startDate: '2026-01-17',
        startTime: '15:45',
        endDate: '2026-01-17',
        endTime: '23:30',
        destination: 'Sydney',
        aircraft: 'Airbus A380',
        capacity: 480,
    },
];
// Helper to get flights (from storage or initial)
export const getFlights = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialFlights;
};
// Helper to save flights
export const saveFlights = (flights) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(flights));
};
