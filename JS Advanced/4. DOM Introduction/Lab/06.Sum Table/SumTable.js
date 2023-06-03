function sumTable() {
    const totalPrice = document.getElementById("sum");
    const prices = Array.from(document.querySelectorAll("tr td:last-child")).map(item => item = item.textContent);
    let sum = 0;
    prices.forEach(price => {
        if (price !== "") sum += Number(price);
    });
    totalPrice.textContent = sum;
}