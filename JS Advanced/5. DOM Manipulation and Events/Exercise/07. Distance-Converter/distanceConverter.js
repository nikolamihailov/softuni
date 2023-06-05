function attachEventsListeners() {
    const convertBtn = document.getElementById("convert");

    const unitsToMeter = {
        m: 1,
        km: 1000,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtn.addEventListener("click", () => {
        const from = document.getElementById("inputDistance");
        const to = document.getElementById("outputDistance");
        const fromUnits = document.getElementById("inputUnits");
        const toUnits = document.getElementById("outputUnits");
        const toMeters = unitsToMeter[fromUnits.value] * from.value;
        to.value = toMeters / unitsToMeter[toUnits.value];
    });
}