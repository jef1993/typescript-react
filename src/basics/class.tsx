export abstract class Department {
  // public name: string;
  // private employees: string[] = [];
  constructor(
    readonly id: number,
    public name: string,
    protected employees: string[] = []
  ) {
    // this.name = name;
  }

  abstract desc(text: string): void;

  static createEmployee(name: string) {
    return { name: name };
  }
  printName(this: Department) {
    console.log(this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

// const finance = new Department(1, "finance");
// const newName = { name: "asdsd", printName: finance.printName };
// finance.addEmployee("person 1");
// finance.addEmployee("person 2");
// finance.printName();

class MyDepartment extends Department {
  get firstEmployee() {
    return this.employees[0];
  }
  private static instance: MyDepartment;
  private constructor(id: number, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  static getInstance() {
    if (!MyDepartment.instance) {
      this.instance = new MyDepartment(2, ["Me"]);
    }
    return this.instance;
  }

  desc() {
    console.log("this is IT department");
  }
  addEmployee(employee: string): void {
    if (this.employees.includes(employee)) return;
    this.employees.push(employee);
  }
  printAdmins() {
    console.log(this.admins);
  }
  printEmployees() {
    console.log(this.employees);
  }
  set changeFirstEmployee(name: string) {
    this.employees[0] = name;
  }
}

// const departmentIT = new MyDepartment(2, ["Me"]);
// departmentIT.addEmployee("Aaron");
// departmentIT.addEmployee("Aaron");
// departmentIT.addEmployee("Me");
// departmentIT.addEmployee("Me");
// departmentIT.changeFirstEmployee = "Mary";
// departmentIT.printAdmins();
// departmentIT.printEmployees();
// console.log(departmentIT.firstEmployee);
const employee1 = Department.createEmployee("Ian");
console.log(MyDepartment.getInstance());

//-------
const Class = () => {
  return <></>;
};

export default Class;
