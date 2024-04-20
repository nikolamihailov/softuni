type EmployeeInfo = {
  name: string;
  salary: number;
  position: string;
  department: string;
  email?: string;
  age: number;
};

class Employee implements EmployeeInfo {
  private _name: string;
  private _salary: number;
  private _position: string;
  private _department: string;
  private _email?: string = "n/a";
  private _age: number = -1;

  constructor(
    name: string,
    salary: number,
    position: string,
    department: string,
    email?: string,
    age?: number
  ) {
    this._name = name;
    this._salary = salary;
    this._position = position;
    this._department = department;
    this._email = email;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  get salary(): number {
    return this._salary;
  }

  get position(): string {
    return this._position;
  }

  get department(): string {
    return this._department;
  }

  get email(): string {
    return this._email;
  }

  get age(): number {
    return this._age;
  }
}

interface DepartmentInfo {
  name: string;
  employees: EmployeeInfo[];
  avgSalary: number;
  addEmployee: (employee: EmployeeInfo) => void;
  printEmployeesInfo: () => string;
}

class Department implements DepartmentInfo {
  private _name: string;
  private _avgSalary: number = 0;
  private _employees: EmployeeInfo[] = [];

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get employees(): EmployeeInfo[] {
    return this._employees;
  }

  get avgSalary(): number {
    this._avgSalary =
      this.employees.reduce((acc, empl) => acc + empl.salary, 0) / this.employees.length;
    return this._avgSalary;
  }

  addEmployee(employee: EmployeeInfo): void {
    this._employees.push(employee);
  }

  printEmployeesInfo(): string {
    const sortedEmployees = this._employees.sort((a, b) => b.salary - a.salary);
    const result = sortedEmployees
      .map((emp) => `${emp.name} ${emp.salary.toFixed(2)} ${emp.email} ${emp.age}`)
      .join("\n");
    return result;
  }
}

function highestPaidDepartment(employeeCount: number, employeesInfo: string[]): string {
  const departments: Department[] = [];

  employeesInfo.forEach((employeeInfo) => {
    const [name, salary, position, departmentName, ...emailAndAge] = employeeInfo.split(" ");
    const [email, age] = emailAndAge;

    const employee = new Employee(
      name,
      +salary,
      position,
      departmentName,
      email ? email : "n/a",
      age ? +age : 0
    );

    const depIdx: number = departments.findIndex((d) => d.name === departmentName);
    if (depIdx !== -1) departments[depIdx].addEmployee(employee);
    if (depIdx === -1) {
      const department = new Department(departmentName);
      department.addEmployee(employee);
      departments.push(department);
    }
  });

  const highestPaidDepartment = departments.sort((a, b) => a.avgSalary - b.avgSalary).pop();

  const finalStr = `Highest Average Salary: ${
    highestPaidDepartment.name
  }\n${highestPaidDepartment.printEmployeesInfo()}`;
  return finalStr;
}

/* const res = highestPaidDepartment(4, [
  "Peter 120.00 Dev Development peter@abv.bg 28",
  "Tina 333.33 Manager Marketing 33",
  "Sam 840.20 ProjectLeader Development sam@sam.com",
  "George 0.20 Freeloader Nowhere 18",
]);

console.log(res); */

const res = highestPaidDepartment(6, [
  "Silver 496.37 Temp Coding silver@yahoo.com",
  "Sam 610.13 Manager Sales",
  "John 609.99 Manager Sales john@abv.bg 44",
  "Venci 0.02 Director BeerDrinking beer@beer.br 23",
  "Andre 700.00 Director Coding",
  "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey",
]);

console.log(res);
