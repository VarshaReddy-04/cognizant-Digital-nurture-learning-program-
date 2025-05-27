let events = ["Music", "Art", "Workshop"];
events.push("Seminar");

let musicEvents = events.filter(e => e === "Music");
console.log(musicEvents);

let formatted = events.map(e => `Event: ${e}`);
console.log(formatted);
