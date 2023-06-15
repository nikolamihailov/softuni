window.addEventListener("load", solve);

function solve() {
  const [firstName, lastName, age, storyTitle, publishBtn] = Array.from(document.querySelectorAll("input"));
  const genre = document.getElementById("genre");
  const storyText = document.getElementById("story");
  const previewList = document.getElementById("preview-list");

  publishBtn.addEventListener("click", publishFunc);

  function publishFunc(e) {
    e.preventDefault();
    if (firstName.value.trim() === "" || lastName.value.trim() === ""
      || age.value.trim() === "" || storyTitle.value.trim() === ""
      || storyText.value.trim() === "" || genre.value.trim() === "") return;

    const li = document.createElement("li");
    li.classList.add("story-info");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    const pAge = document.createElement("p");
    pAge.textContent = `Age: ${age.value}`;
    const pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${storyTitle.value}`;
    const pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${genre.value}`;
    const pStoryText = document.createElement("p");
    pStoryText.textContent = storyText.value;
    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStoryText);
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit Story";
    editBtn.addEventListener("click", editFunc);
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.textContent = "Save Story";
    saveBtn.addEventListener("click", saveFunc);
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete Story";
    deleteBtn.addEventListener("click", deleteFunc);
    li.appendChild(article);
    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    previewList.appendChild(li);
    let fN = firstName.value;
    let lN = lastName.value;
    let genreF = genre.value;
    let ageF = age.value;
    let storyTextF = storyText.value;
    let titleF = storyTitle.value;
    firstName.value = "";
    lastName.value = "";
    genre.value = "";
    age.value = "";
    storyTitle.value = "";
    storyText.value = "";
    publishBtn.disabled = true;

    function editFunc() {
      firstName.value = fN;
      lastName.value = lN;
      age.value = ageF;
      genre.value = genreF;
      storyTitle.value = titleF;
      storyText.value = storyTextF;
      publishBtn.disabled = false;
      li.remove();
    }

    function saveFunc() {
      const main = document.getElementById("main");
      main.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.textContent = "Your scary story is saved!";
      main.appendChild(h1);
    }

    function deleteFunc() {
      li.remove();
      publishBtn.disabled = false;
    }
  }
}
