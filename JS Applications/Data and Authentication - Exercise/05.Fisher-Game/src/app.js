function app() {
    const logoutBtn = document.getElementById("logout");
    const LOGOUT_URL = "http://localhost:3030/users/logout";
    const accessToken = sessionStorage.getItem("accessToken");
    const guestNav = document.getElementById("guest");
    const welcomeMessage = document.querySelector(".email span");

    if (accessToken) {
        guestNav.style.display = "none";
        welcomeMessage.textContent = sessionStorage.getItem("email");
    } else {
        logoutBtn.style.display = "none";
    }

    logoutBtn.addEventListener("click", logoutUser);

    async function logoutUser(e) {
        await fetch(LOGOUT_URL, {
            method: "GET",
            headers: {
                "X-Authorization": accessToken
            }
        });
        sessionStorage.clear();
        window.location = "index.html";
    }

    const catchesDivElem = document.getElementById("catches");

    Array.from(catchesDivElem.children).forEach((child) => child.remove());

    const loadButtonElem = document.getElementsByClassName("load")[0];
    loadButtonElem.addEventListener("click", onLoad);

    async function onLoad() {
        Array.from(catchesDivElem.children).forEach((child) => child.remove());

        const response = await fetch("http://localhost:3030/data/catches");
        let catches = await response.json();

        // for each catch => create "catch HTML content" => add this HTML to the page
        for (const currentCatch of catches) {
            const catchDivElem = createElements("div", "", catchesDivElem, {
                class: "catch",
            });

            createElements("label", "Angler", catchDivElem, {});
            createElements("input", "", catchDivElem, {
                type: "text",
                class: "angler",
                value: currentCatch.angler,
            });
            createElements("label", "Weight", catchDivElem, {});
            createElements("input", "", catchDivElem, {
                type: "text",
                class: "weight",
                value: currentCatch.weight,
            });
            createElements("label", "Species", catchDivElem, {});
            createElements("input", "", catchDivElem, {
                type: "text",
                class: "species",
                value: currentCatch.species,
            });
            createElements("label", "Location", catchDivElem, {});
            createElements("input", "", catchDivElem, {
                type: "text",
                class: "location",
                value: currentCatch.location,
            });
            createElements("label", "Bait", catchDivElem, {});
            createElements("input", "", catchDivElem, {
                type: "text",
                class: "bait",
                value: currentCatch.bait,
            });
            createElements("label", "Capture Time", catchDivElem, {});
            createElements("input", "", catchDivElem, {
                type: "text",
                class: "captureTime",
                value: currentCatch.captureTime,
            });

            const updateBtnElem = createElements("button", "Update", catchDivElem, {
                class: "update",
                "data-id": currentCatch._id,
            });
            updateBtnElem.addEventListener("click", onUpdate);

            const deleteBtnElem = createElements("button", "Delete", catchDivElem, {
                class: "delete",
                "data-id": currentCatch._id,
            });
            deleteBtnElem.addEventListener("click", onDelete);

            const loggedUserId = sessionStorage.getItem("id");

            if (loggedUserId !== currentCatch._ownerId) {
                updateBtnElem.disabled = true;
                deleteBtnElem.disabled = true;
            }
        }
    }

    async function onUpdate(event) {
        const catchDivElem = event.target.parentElement;
        const angler = catchDivElem
            .getElementsByClassName("angler")[0]
            .value.trim();
        const weight = catchDivElem
            .getElementsByClassName("weight")[0]
            .value.trim();
        const species = catchDivElem
            .getElementsByClassName("species")[0]
            .value.trim();
        const location = catchDivElem
            .getElementsByClassName("location")[0]
            .value.trim();
        const bait = catchDivElem.getElementsByClassName("bait")[0].value.trim();
        const captureTime = catchDivElem
            .getElementsByClassName("captureTime")[0]
            .value.trim();

        if (!angler) {
            alert("angler is required!");
        } else if (!weight) {
            alert("weight is required!");
        } else if (!species) {
            alert("species is required!");
        } else if (!location) {
            alert("location is required!");
        } else if (!bait) {
            alert("bait is required!");
        } else if (!captureTime) {
            alert("captureTime is required!");
        }

        if (angler && weight && species && location && bait && captureTime) {
            try {
                const response = await fetch(
                    `http://localhost:3030/data/catches/${event.target.dataset.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Authorization": accessToken,
                        },
                        body: JSON.stringify({
                            angler,
                            weight,
                            species,
                            location,
                            bait,
                            captureTime,
                        }),
                    }
                );

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                await onLoad();
            } catch (err) {
                alert(err.message);
            }
        }
    }

    async function onDelete(event) {
        const response = await fetch(
            `http://localhost:3030/data/catches/${event.target.dataset.id}`,
            {
                method: "DELETE",
                headers: {
                    "X-Authorization": accessToken,
                },
            }
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        } else {
            await onLoad();
        }
    }

    async function onAdd(event) {
        event.preventDefault();

        const formData = new FormData(addFormElem);
        const angler = formData.get("angler");
        const weight = formData.get("weight");
        const species = formData.get("species");
        const location = formData.get("location");
        const bait = formData.get("bait");
        const captureTime = formData.get("captureTime");

        if (!angler) {
            alert("angler is required!");
        } else if (!weight) {
            alert("weight is required!");
        } else if (!species) {
            alert("species is required!");
        } else if (!location) {
            alert("location is required!");
        } else if (!bait) {
            alert("bait is required!");
        } else if (!captureTime) {
            alert("captureTime is required!");
        }

        if (angler && weight && species && location && bait && captureTime) {
            try {
                const response = await fetch("http://localhost:3030/data/catches", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Authorization": accessToken,
                    },
                    body: JSON.stringify({
                        angler,
                        weight,
                        species,
                        location,
                        bait,
                        captureTime,
                    }),
                });

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                Array.from(addFormElem.querySelectorAll("input")).forEach(
                    (input) => (input.value = "")
                );

                await onLoad();
            } catch (err) {
                alert(err.message);
            }
        }
    }

    function createElements(type, content, parent, attributes) {
        const elem = document.createElement(type);
        elem.textContent = content;

        if (parent) {
            parent.appendChild(elem);
        }

        for (const [attribute, value] of Object.entries(attributes)) {
            elem.setAttribute(attribute, value);
        }

        return elem;
    }

}

app();