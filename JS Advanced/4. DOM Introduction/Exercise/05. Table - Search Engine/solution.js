function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchedTxt = document.getElementById("searchField");
      const rows = Array.from(document.querySelectorAll("tbody tr"));
      rows.forEach(row => {
         const tds = Array.from(row.children);
         tds.forEach(td => {
            if (td.textContent.includes(searchedTxt.value)) {
               row.classList.add("select");
               return;
            }
         });
      });
      searchedTxt.value = "";
   }
}