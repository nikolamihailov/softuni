function createEmployeeList(names: string[]): string {
  const employessInfo: string[] = [];
  names.forEach((name: string) => {
    const personalNumber: number = name.length;
    const employeeInfo: string = `Name: ${name} -- Personal Number: ${personalNumber}`;
    employessInfo.push(employeeInfo);
  });
  return employessInfo.join("\n");
}

console.log(
  createEmployeeList(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"])
);
