const events = [
    { name: "Music Fest", date: "2025-08-01", seats: 0 },
    { name: "Art Expo", date: "2025-09-10", seats: 5 }
];

events.forEach(event => {
    if (event.seats > 0) {
        console.log(`Upcoming Event: ${event.name}`);
    } else {
        console.log(`Event ${event.name} is full or past`);
    }
});

try {
    let registered = false;
    if (!registered) throw new Error("Registration failed.");
    console.log("User registered.");
} catch (err) {
    console.error(err.message);
}
