function solve() {

    const info = document.querySelector("#info span");
    const deprtBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const URL = "http://localhost:3030/jsonstore/bus/schedule";

    let currentStop = "depot";
    let currentStopName = "";
    let nextStop = "";

    function depart() {
        fetch(`${URL}/${currentStop}`)
            .then(res => res.json())
            .then((data) => {
                currentStopName = data.name;
                info.textContent = `Next stop ${currentStopName}`;
                deprtBtn.disabled = true;
                arriveBtn.disabled = false;
                nextStop = data.next;
            })
            .catch(() => {
                info.textContent = `Error`;
                deprtBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStopName}`;
        deprtBtn.disabled = false;
        arriveBtn.disabled = true;
        currentStop = nextStop;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();