function generateReport() {
    const checkboxes = Array.from(document.querySelectorAll('thead tr th input'));
    const headings = Array.from(document.querySelectorAll('thead tr th')).map(el => el.textContent.toLowerCase().trim());
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    const output = document.getElementById("output");
    const checkedInputs = [];
    const report = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const index = Array.from(checkbox.parentElement.parentElement.children).indexOf(checkbox.parentElement);
            checkedInputs.push(index);
        }
    });

    rows.forEach(row => {
        const tds = Array.from(row.children);
        const obj = {};
        tds.forEach(td => {
            const index = Array.from(td.parentElement.children).indexOf(td);
            if (checkedInputs.includes(index)) {
                obj[headings[index]] = td.textContent;
            }
        });
        report.push(obj);
    });

    output.value = JSON.stringify(report, null, 2);
}