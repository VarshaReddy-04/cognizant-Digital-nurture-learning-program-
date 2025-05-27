fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

// Async/Await
async function fetchEvents() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

fetchEvents();
