function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const bestRestaurantP = document.querySelector("#bestRestaurant p");
   const workersP = document.querySelector("#workers p");

   function onClick() {
      const restaurants = {};
      const textarea = document.querySelector("textarea");
      const textareaTxt = JSON.parse(textarea.value);

      for (const restaurantInfo of textareaTxt) {
         const [name, ...workersInfo] = restaurantInfo.split(" - ");
         const workersData = workersInfo[0].split(", ");
         const workers = [];
         for (const line of workersData) {
            const [name, salary] = line.split(" ");
            workers.push({ name, salary: Number(salary) });
         }
         if (restaurants.hasOwnProperty(name)) {
            const oldStaff = restaurants[name];
            const newStaff = oldStaff.concat(workers);
            restaurants[name] = newStaff;
         } else {
            restaurants[name] = workers;
         }
      }

      for (const [name, workers] of Object.entries(restaurants)) {
         const avgSalary = workers.reduce((a, b) => a + b.salary, 0) / workers.length;
         restaurants[name].avgSalary = avgSalary;
         workers.sort((a, b) => b.salary - a.salary);
         restaurants[name].bestSalary = workers[0].salary;
      }

      const bestRestaurant = Object.entries(restaurants).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
      bestRestaurantP.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${bestRestaurant[1].avgSalary.toFixed(2)} Best Salary: ${bestRestaurant[1].bestSalary.toFixed(2)}`;
      for (const worker of bestRestaurant[1]) {
         workersP.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;

      }
   }
}

