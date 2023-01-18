// intersection types 83.

type Person = {
  name: string;
  age: number;
};

type Employee = {
  name: string;
  title: string;
};

type Info = Person & Employee;

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee {
//   name: string;
//   title: string;
// }

// interface Info extends Person, Employee {}

type NumStr = string | number;
type Numeric = number | boolean;
type Universal = NumStr & Numeric;

const person1: Employee = {
  name: "Jeffrey",
  title: "job",
};

const myInfo: Info = {
  name: "Jeffrey",
  age: 22,
  title: "Developer",
};

function checkField(data: Person | Employee, key: string = ""): void {
  if (key in data) console.log(data[key as keyof typeof data]);
}

// checkField(person1, "title");

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving at: " + speed);
}

// moveAnimal({ type: "bird", flyingSpeed: 80 });

// Index Properties

interface ErrorCtn {
  [prop: string]: string;
}

const emailError: ErrorCtn = {
  email: "not a valid email!",
};

// function overload

type Combinable = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return `${a}${b}`;
  }
  return a + b;
}
const result = add("Max", "Schwarz").split("");

// Optional Chaining

const fetchData: { id: string; name: string; desc?: any } = {
  id: "1",
  name: "Jefrey",
};

// console.log(fetchData.desc?.title);

// Nullish Coalesing

// console.log(null ?? "default");

//-------
const Advanced = () => {
  return <p id="p">{fetchData?.desc}</p>;
};

export default Advanced;
