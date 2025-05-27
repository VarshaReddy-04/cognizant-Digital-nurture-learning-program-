const greet = (name = "Guest") => console.log(`Hello, ${name}`);

const event = { name: "Webinar", date: "2025-10-01" };
const { name, date } = event;
console.log(name, date);

const moreEvents = [...["Music", "Art"], "Drama"];
console.log(moreEvents);
