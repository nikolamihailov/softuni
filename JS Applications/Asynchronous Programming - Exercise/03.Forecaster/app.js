function attachEvents() {
    const locationInput = document.getElementById("location");
    const getWeatherBtn = document.getElementById("submit");
    const forecastContainer = document.getElementById("forecast");
    const curentConditions = document.getElementById("current");
    const threeDayForecast = document.getElementById("upcoming");
    const [labelOne, labelTwo] = Array.from(document.querySelectorAll(".label"));

    const LOCATIONS_URL = "http://localhost:3030/jsonstore/forecaster/locations";
    const TODAYS_F_URL = "http://localhost:3030/jsonstore/forecaster/today";
    const UPCOMING_F_URL = "http://localhost:3030/jsonstore/forecaster/upcoming";

    const weatherConditions = {
        Sunny: "&#x2600",
        "Partly sunny": "&#x26C5",
        Overcast: "&#x2601",
        Rain: "&#x2614",
        degrees: "°",

    };

    getWeatherBtn.addEventListener("click", getWeatherData);

    async function getWeatherData() {
        try {
            const res = await fetch(LOCATIONS_URL);
            const data = await res.json();

            const location = data.find(d => d.name === locationInput.value);
            let codeValue = location.code;

            fetch(`${TODAYS_F_URL}/${codeValue}`)
                .then(res => res.json())
                .then(data => {
                    curentConditions.innerHTML = `<div class="label">Current conditions</div>`;
                    const divForecast = document.createElement("div");
                    divForecast.classList.add("forecasts");
                    const spanSymbol = document.createElement("span");
                    spanSymbol.classList.add("condition", "symbol");
                    const spanParent = document.createElement("span");
                    spanParent.classList.add("condition");
                    const spanName = document.createElement("span");
                    spanName.classList.add("forecast-data");
                    const spanTemp = document.createElement("span");
                    spanTemp.classList.add("forecast-data");
                    const spanCondition = document.createElement("span");
                    spanCondition.classList.add("forecast-data");

                    spanSymbol.innerHTML = weatherConditions[data.forecast.condition];
                    spanName.textContent = data.name;
                    spanTemp.innerHTML = data.forecast.low + weatherConditions.degrees + "/" + data.forecast.high + weatherConditions.degrees;
                    spanCondition.textContent = data.forecast.condition;

                    divForecast.appendChild(spanSymbol);
                    spanParent.appendChild(spanName);
                    spanParent.appendChild(spanTemp);
                    spanParent.appendChild(spanCondition);
                    divForecast.appendChild(spanParent);
                    curentConditions.appendChild(divForecast);
                });

            fetch(`${UPCOMING_F_URL}/${codeValue}`)
                .then(res => res.json())
                .then(data => {
                    threeDayForecast.innerHTML = `<div class="label">Three-day forecast</div>`;
                    const divForecastInfo = document.createElement("div");
                    divForecastInfo.classList.add("forecast-info");
                    for (const day of data.forecast) {
                        const spanParent = document.createElement("span");
                        spanParent.classList.add("upcoming");
                        const spanSymbol = document.createElement("span");
                        spanSymbol.classList.add("symbol");
                        const spanTemp = document.createElement("span");
                        spanTemp.classList.add("forecast-data");
                        const spanCondition = document.createElement("span");
                        spanCondition.classList.add("forecast-data");

                        spanSymbol.innerHTML = weatherConditions[day.condition];
                        spanTemp.innerHTML = day.low + weatherConditions.degrees + "/" + day.high + weatherConditions.degrees;
                        spanCondition.textContent = day.condition;

                        spanParent.appendChild(spanSymbol);
                        spanParent.appendChild(spanTemp);
                        spanParent.appendChild(spanCondition);
                        divForecastInfo.appendChild(spanParent);
                    }
                    threeDayForecast.appendChild(divForecastInfo);
                });

            forecastContainer.style.display = "block";
        }
        catch (error) {
            forecastContainer.style.display = "block";
            labelOne.textContent = "Error";
            labelTwo.textContent = "Error";
        }
    }
}

attachEvents();