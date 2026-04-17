document.getElementById("loadDataXHR").addEventListener("click", loadDataXHR);

function loadDataXHR() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.coinbase.com/v2/currencies", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const result = JSON.parse(xhr.responseText);
            displayData(result.data);
        } else {
            console.error("Error: " + xhr.status);
            alert("Failed to load data.");
        }
    };

    xhr.onerror = function () {
        console.error("Request failed");
        alert("Request failed.");
    };

    xhr.send();
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