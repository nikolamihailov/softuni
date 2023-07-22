const STUDENTS_URL = "http://localhost:3030/jsonstore/collections/students";
const tbody = document.querySelector("#results tbody");
const [fName, lName, fN, grade] = Array.from(document.querySelectorAll(".inputs input"));
const submitBtn = document.getElementById("submit");

window.addEventListener("load", async () => {
    try {
        const res = await fetch(STUDENTS_URL);
        const data = await res.json();
        Object.values(data).forEach(r => {
            const tr = document.createElement("tr");
            const fNameTd = document.createElement("td");
            const lNameTd = document.createElement("td");
            const fNTd = document.createElement("td");
            const gradeTd = document.createElement("td");
            fNameTd.textContent = r.firstName;
            lNameTd.textContent = r.lastName;
            fNTd.textContent = r.facultyNumber;
            gradeTd.textContent = r.grade;
            tr.appendChild(fNameTd);
            tr.appendChild(lNameTd);
            tr.appendChild(fNTd);
            tr.appendChild(gradeTd);
            tbody.appendChild(tr);
        });
    } catch (error) {
        console.log(error);
    }
});

submitBtn.addEventListener("click", addRecord);

async function addRecord(e) {
    e.preventDefault();
    try {
        if (fName.value.trim() === "" || lName.value.trim() === "" || fN.value.trim() === "" || grade.value.trim() === "" || isNaN(grade.value)) return alert("Wrong data!");
        const res = await fetch(STUDENTS_URL, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                firstName: fName.value,
                lastName: lName.value,
                facultyNumber: fN.value,
                grade: grade.value
            })
        });
        const data = await res.json();
        console.log(data);
        alert("Student added!");
    } catch (error) {
        console.log(error);
    }
}