document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#events");
    const eventCard = document.createElement("div");
    eventCard.textContent = "New Event: Music Fest";
    container.appendChild(eventCard);
});
