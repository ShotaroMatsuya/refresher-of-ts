class Department {
  private name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('user1');
accounting.addEmployee('user2');

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
