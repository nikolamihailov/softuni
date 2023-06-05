function lockedProfile() {
    const profiles = Array.from(document.querySelectorAll(".profile"));
    profiles.forEach(profile => {
        const [lock, unlock] = Array.from(profile.querySelectorAll('input[type="radio"]'));
        const hiddenDiv = profile.querySelector("div");
        const showMoreBtn = profile.querySelector("button");
        showMoreBtn.addEventListener("click", () => {
            if (showMoreBtn.textContent === "Show more") {
                if (unlock.checked) {
                    hiddenDiv.style.display = "block";
                    showMoreBtn.textContent = "Hide it";
                }
            } else {
                if (unlock.checked) {
                    hiddenDiv.style.display = "none";
                    showMoreBtn.textContent = "Show more";
                }
            }
        });
    });
}