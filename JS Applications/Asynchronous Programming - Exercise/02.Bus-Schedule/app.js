function solve() {

    const info = document.querySelector("#info span");
    const deprtBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const URL = "http://localhost:3030/jsonstore/bus/schedule";

    let nextStop = "depot";
    function depart() {
        fetch(`${URL}/${nextStop}`)
            .then(res => res.json())
            .then((data) => {
                info.textContent = `Next stop ${data.name}`;
                deprtBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(() => {
                info.textContent = `Error`;
                deprtBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    function arrive() {
        fetch(`${URL}/${nextStop}`)
            .then(res => res.json())
            .then((data) => {
                info.textContent = `Arriving at ${data.name}`;
                deprtBtn.disabled = false;
                arriveBtn.disabled = true;
                nextStop = data.next;
            })
            .catch(() => {
                info.textContent = `Error`;
                deprtBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();