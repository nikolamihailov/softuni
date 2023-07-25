function lockedProfile() {
    const main = document.getElementById("main");
    main.innerHTML = "";
    let userNum = 1;

    const URL = "http://localhost:3030/jsonstore/advanced/profiles";
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            Object.values(data).forEach(profile => {
                const profileDiv = document.createElement("div");
                profileDiv.classList.add("profile");
                profileDiv.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user${userNum}Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user${userNum}Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user${userNum}Username" value="${profile.username}" disabled readonly />
				<div class="user${userNum}Username hiddenInfo">
					<hr>
					<label>Email:</label>
					<input type="email" name="user${userNum}Email" value="${profile.email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user${userNum}Age" value="${profile.age}" disabled readonly />
				</div>
				<button>Show more</button>`;
                const btn = profileDiv.querySelector("button");
                btn.addEventListener("click", () => {
                    const parent = btn.parentElement;
                    const unlock = parent.querySelectorAll("input[type=radio]")[1];
                    if (unlock.checked) {
                        const infoDiv = parent.querySelector("div");
                        if (btn.textContent === "Show more") {
                            infoDiv.classList.remove("hiddenInfo");
                            btn.textContent = "Hide it";
                        } else {
                            infoDiv.classList.add("hiddenInfo");
                            btn.textContent = "Show more";
                        }

                    }
                });
                userNum++;
                main.appendChild(profileDiv);
            });
        });
}