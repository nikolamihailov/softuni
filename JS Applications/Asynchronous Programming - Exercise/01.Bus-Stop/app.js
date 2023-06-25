function getInfo() {

    async function fetchData() {
        const stopId = document.getElementById("stopId");
        const stopName = document.getElementById("stopName");
        const buses = document.getElementById("buses");

        try {
            const response = await fetch('http://localhost:3030/jsonstore/bus/businfo/' + stopId.value);
            if (!response.ok) {
                throw new Error("Error");
            }
            const data = await response.json();
            stopName.textContent = "";
            buses.innerHTML = "";
            stopName.textContent = data.name;
            const stops = Object.entries(data.buses);
            stops.forEach(([bus, minutes]) => {
                const li = document.createElement("li");
                li.textContent = `Bus ${bus} arrives in ${minutes} minutes`;
                buses.appendChild(li);
            });
        } catch (error) {
            stopName.textContent = "Error";
            buses.innerHTML = "";
            return;
        }
    }
    fetchData();
}