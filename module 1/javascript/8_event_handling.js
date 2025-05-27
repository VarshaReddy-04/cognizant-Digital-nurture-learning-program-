document.getElementById("registerBtn").onclick = () => alert("Registered!");

document.getElementById("categoryFilter").onchange = function() {
    console.log("Filter by:", this.value);
};

document.getElementById("searchBox").onkeydown = function(event) {
    console.log("Key pressed:", event.key);
};
