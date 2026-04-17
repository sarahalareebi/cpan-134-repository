document.getElementById("loadDataFetch").addEventListener("click", fetchData);

function fetchData() {
    fetch("https://api.coinbase.com/v2/currencies")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error! Status: " + response.status);
            }
            return response.json();
        })
        .then(result => {
            displayData(result.data);
        })
        .catch(error => {
            console.error("Fetch Error:", error);
            alert("Failed to load data.");
        });
}

function displayData(data) {
    const tableBody = document.querySelector("#outputTable tbody");
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.min_size}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}