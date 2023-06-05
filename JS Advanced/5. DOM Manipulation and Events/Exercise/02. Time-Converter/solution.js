function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    buttons.forEach(btn => btn.addEventListener("click", convert));
    function convert(e) {
        let [days, hours, minutes, seconds] = [0, 0, 0, 0];
        switch (e.target.id) {
            case "daysBtn":
                days = Number(document.getElementById("days").value);
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                break;
            case "hoursBtn":
                hours = Number(document.getElementById("hours").value);
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
                break;
            case "minutesBtn":
                minutes = Number(document.getElementById("minutes").value);
                seconds = minutes * 60;
                hours = minutes / 60;
                days = hours / 24;
                break;
            case "secondsBtn":
                seconds = Number(document.getElementById("seconds").value);
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
                break;
        }
        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}