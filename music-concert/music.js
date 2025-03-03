// Simple function to show an alert when the search button is clicked
document.getElementById("searchBtn").addEventListener("click", function() {
    var searchTerm = document.getElementById("searchInput").value;
    if (searchTerm) {
        alert("You searched for: " + searchTerm);
    } else {
        alert("Please enter a search term!");
    }
});
