function search() {
   const towns = Array.from(document.querySelectorAll("#towns li"));
   const searchedText = document.getElementById("searchText");
   const result = document.getElementById("result");
   let matches = 0;
   towns.forEach(town => {
      if (town.textContent.includes(searchedText.value)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         matches++;
      }
   });
   searchedText.value = "";
   result.textContent = `${matches} matches found`;
}
