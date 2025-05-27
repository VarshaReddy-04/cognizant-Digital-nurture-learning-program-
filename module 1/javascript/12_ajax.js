const user = { name: "John", email: "john@example.com" };

setTimeout(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json" }
    })
    .then(res => res.json())
    .then(data => console.log("Success:", data))
    .catch(err => console.error("Error:", err));
}, 2000);
