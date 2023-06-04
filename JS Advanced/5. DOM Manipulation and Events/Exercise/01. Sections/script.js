function create(...sections) {
   const content = document.getElementById("content");
   for (const section of sections[0]) {
      const div = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = section;
      p.style.display = "none";
      div.addEventListener("click", () => {
         p.style.display = "block";
      });
      div.appendChild(p);
      content.appendChild(div);
   }
}