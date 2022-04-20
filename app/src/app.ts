class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['UserX']);

it.addEmployee('user1');
it.addEmployee('user2');

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);

const accounting = new AccountDepartment('d2', []);
accounting.addReport('Something went wrong...');

accounting.printReports();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
