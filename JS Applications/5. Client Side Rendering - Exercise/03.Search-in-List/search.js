import { html, render } from "../../../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const townsContainer = document.getElementById("towns");
const results = document.getElementById("result");
const searchedtext = document.getElementById("searchText");
const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", search);

function search() {
   let matches = 0;
   const lis = Array.from(document.querySelectorAll("ul li"));
   lis.forEach(l => {
      l.classList.remove("active");
      if (l.textContent.includes(searchedtext.value)) {
         l.classList.add("active");
         matches++;
      }
   });
   results.textContent = `${matches} matches found`;
   searchedtext.value = "";
}

const ulTempl = (towns) => html`
<ul>
   ${towns.map(t => html`<li>${t}</li>`)}
</ul>
`;

render(ulTempl(towns), townsContainer)







