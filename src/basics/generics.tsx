// What is generics

const names: Array<string> = ["Max", "Manuel"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done!");
  }, 2000);
});

// Generic and constraints

function mergeObj<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const newMerge = mergeObj<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
console.log(newMerge.age);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let text = "no value";
  if (element.length > 0)
    text = `Got ${element.length} element${element.length > 1 ? "s" : null}`;
  return [element, text];
}

// key of

function extractKey<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

// generic classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const numberStorage = new DataStorage<number>();

numberStorage.addItem(3);
numberStorage.addItem(5);
numberStorage.addItem(7);

// utility types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly

const myNames: Readonly<string[]> = ["Amy", "John"];

//-------
const Generics = () => {
  return <></>;
};

export default Generics;
