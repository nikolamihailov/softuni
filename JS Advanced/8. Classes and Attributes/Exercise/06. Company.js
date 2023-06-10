class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }
        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].push({ name, salary, position });
        } else {
            this.departments[department] = [];
            this.departments[department].push({ name, salary, position });
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        for (const [department, allInfo] of Object.entries(this.departments)) {
            const avgSalary = allInfo.reduce((a, b) => a + b.salary, 0) / allInfo.length;
            this.departments[department].avgSalary = avgSalary;
        }
        const bestDepartment = Object.entries(this.departments).sort((a, b) => b.avgSalary - a.avgSalary)[0];
        const resultDepartment = bestDepartment[1].sort((a, b) => b.salary - a.salary || (a.name).localeCompare(b.name));
        const result = [];
        result.push(`Best Department is: ${bestDepartment[0]}`);
        result.push(`Average salary: ${bestDepartment[1].avgSalary.toFixed(2)}`);
        delete bestDepartment[1].avgSalary;
        result.push(`${resultDepartment.map(e => `${e.name} ${e.salary} ${e.position}`).join("\n")}`);
        return result.join("\n");
    }
}
const c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());