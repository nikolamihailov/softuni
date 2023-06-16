window.addEventListener("load", solve);

function solve() {
  const [firstName, lastName, age, submitBtn] = Array.from(document.querySelectorAll("input"));
  const dishDescription = document.getElementById("task");
  const gender = document.getElementById("genderSelect");
  const progress = document.getElementById("progress-count");
  const [inProgress, finished] = Array.from(document.querySelectorAll("ul"));
  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", () => { finished.innerHTML = ""; });
  submitBtn.addEventListener("click", submitFunc);

  function submitFunc(e) {
    e.preventDefault();
    if (firstName.value.trim() === "" || lastName.value.trim() === ""
      || age.value.trim() === "" || dishDescription.value.trim() === "") return;

    const li = document.createElement("li");
    li.classList.add("each-line");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = `${firstName.value} ${lastName.value}`;
    const pGenreAge = document.createElement("p");
    pGenreAge.textContent = `${gender.value}, ${age.value}`;
    const pDesc = document.createElement("p");
    pDesc.textContent = `Dish description: ${dishDescription.value}`;
    article.appendChild(h4);
    article.appendChild(pGenreAge);
    article.appendChild(pDesc);
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editFunc);
    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "Mark as complete";
    completeBtn.addEventListener("click", completeFunc);
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    inProgress.appendChild(li);
    progress.textContent = Number(progress.textContent) + 1;
    let fN = firstName.value;
    let lN = lastName.value;
    let grF = gender.value;
    let ageG = age.value;
    let dishD = dishDescription.value;
    firstName.value = "";
    lastName.value = "";
    gender.value = "";
    age.value = "";
    dishDescription.value = "";

    function editFunc() {
      firstName.value = fN;
      lastName.value = lN;
      gender.value = grF;
      age.value = ageG;
      dishDescription.value = dishD;
      li.remove();
      progress.textContent = Number(progress.textContent) - 1;
    }

    function completeFunc() {
      li.removeChild(editBtn);
      li.removeChild(completeBtn);
      finished.appendChild(li);
      progress.textContent = Number(progress.textContent) - 1;
    }
  }
}
