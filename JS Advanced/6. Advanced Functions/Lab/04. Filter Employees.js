function filterEmployees(data, criteria) {
    const parsedData = JSON.parse(data);
    let index = 0;
    if (criteria === "all") {
        for (const employee of parsedData) {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
            index++;
        }
    } else {
        const [key, value] = criteria.split("-");
        for (const employee of parsedData) {
            if (employee[key] === value) {
                console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
                index++;
            }
        }
    }
}
filterEmployees(`[{
"id": "1",
"first_name": "Ardine",
"last_name": "Bassam",
"email": "abassam0@cnn.com",
"gender": "Female"
}, {
"id": "2",
"first_name": "Kizzee",
"last_name": "Jost",
"email": "kjost1@forbes.com",
"gender": "Female"
},
{
"id": "3",
"first_name": "Evanne",
"last_name": "Maldin",
"email": "emaldin2@hostgator.com",
"gender": "Male"
}]`,
    'gender-Female');