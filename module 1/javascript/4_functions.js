function addEvent(name, category) {
    return { name, category };
}

function registerUser(eventName) {
    console.log(`User registered for ${eventName}`);
}

function filterEventsByCategory(events, category) {
    return events.filter(e => e.category === category);
}

// Closure to count registrations
function registrationCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const musicCounter = registrationCounter();
console.log(musicCounter()); // 1
console.log(musicCounter()); // 2
