function solve() {
   const addBtns = Array.from(document.querySelectorAll(".add-product"));
   const textarea = document.querySelector("textarea");
   const checkoutBtn = document.querySelector(".checkout");
   const products = new Set();
   let totalPrice = 0;

   addBtns.forEach(btn => {
      btn.addEventListener("click", () => {
         const productDiv = btn.parentElement.parentElement;
         const price = Number(productDiv.querySelector(".product-line-price").textContent);
         const productTitle = productDiv.querySelector(".product-title").textContent;
         totalPrice += price;
         products.add(productTitle);
         textarea.value += `Added ${productTitle} for ${price.toFixed(2)} to the cart.\n`;
      });
   });

   checkoutBtn.addEventListener("click", () => {
      addBtns.map(btn => btn.disabled = true);
      const finalProducts = [];
      products.forEach(product => {
         finalProducts.push(product);
      });
      textarea.value += `You bought ${finalProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
      checkoutBtn.disabled = true;
   });
}