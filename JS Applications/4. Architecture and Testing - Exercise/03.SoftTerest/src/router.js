import { getUserData } from "./utils.js";
export function initiliazeRouter(routes) {
    const nav = document.querySelector("nav");
    nav.addEventListener("click", navigate);

    const context = {
        showSection,
        goTo,
        updateNav
    };

    function showSection(section) {
        document.getElementById("root").replaceChildren(section);
    }

    function navigate(e) {
        const target = e.target;
        if (target.tagName === "A") {
            e.preventDefault();
            const url = new URL(target.href);
            goTo(url.pathname);
        }
    }

    function goTo(location, ...params) {
        const page = routes[location];
        if (typeof page === "function") {
            page(context, ...params);
        }
    }

    function updateNav() {
        const user = JSON.parse(getUserData());

        if (user) {
            nav.querySelectorAll(".guest").forEach(el => el.style.display = "none");
            nav.querySelectorAll(".user").forEach(el => el.style.display = "block");

        } else {
            nav.querySelectorAll(".user").forEach(el => el.style.display = "none");
            nav.querySelectorAll(".guest").forEach(el => el.style.display = "block");
        }
    }
    return context;
}