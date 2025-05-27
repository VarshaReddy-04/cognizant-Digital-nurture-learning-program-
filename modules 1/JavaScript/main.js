console.log("Welcome to the Community Portal");

function pageLoaded() {
    alert("Page fully loaded!");
}

const events = [
    { name: "Music Night", date: "2024-06-10", category: "music", seats: 30 },
    { name: "Art Fest", date: "2024-07-01", category: "art", seats: 0 },
    { name: "Tech Meetup", date: "2024-08-15", category: "tech", seats: 25 }
];

function loadEvents() {
    const container = document.getElementById("eventList");
    container.innerHTML = "";
    events.forEach(event => {
        if (new Date(event.date) > new Date() && event.seats > 0) {
            const card = document.createElement("div");
            card.className = "event-card";
            card.innerHTML = `<strong>${event.name}</strong><br>Date: ${event.date}<br>Seats: ${event.seats}`;
            container.appendChild(card);
        }
    });
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.elements["name"].value;
    const email = this.elements["email"].value;
    const event = this.elements["event"].value;

    if (!name || !email || !event) {
        document.getElementById("message").innerText = "All fields are required!";
        return;
    }

    document.getElementById("message").innerText = `✅ ${name}, you are registered for the ${event} event!`;
});
