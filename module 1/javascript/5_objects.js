function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function() {
    return this.seats > 0;
};

const event = new Event("Coding Bootcamp", "2025-07-15", 10);
console.log(event.checkAvailability());
console.log(Object.entries(event));
