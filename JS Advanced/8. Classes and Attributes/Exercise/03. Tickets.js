function tickets(arr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const allTickets = [];
    for (const line of arr) {
        const [destination, price, status] = line.split("|");
        allTickets.push(new Ticket(destination, Number(price), status));
    }
    const sortingObj = {
        destination: () => allTickets.sort((a, b) => (a.destination).localeCompare(b.destination)),
        status: () => allTickets.sort((a, b) => (a.status).localeCompare(b.status)),
        price: () => allTickets.sort((a, b) => a.price - b.price),
    };
    return sortingObj[sortCriteria]();
}
const res = tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');
console.log(res);