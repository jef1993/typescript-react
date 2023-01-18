interface printStr {
  (str: string): string;
}

interface Named {
  readonly name: string;
  alias?: string;
  nameFunc?: () => {};
}

interface Creature extends Named {
  age: number;
  greet(): void;
}

class Person implements Creature {
  race: "human";
  name: string;
  age: number;
  info?: string;

  constructor(name: string, age: number, info?: string) {
    this.race = "human";
    this.name = name;
    this.age = age;
    if (info) this.info = info;
  }
  greet() {
    return `Hello, I am ${this.name}`;
  }
}

//-------
const Interface = () => {
  let user1: Creature;
  user1 = new Person("Jeffrey", 30);
  // console.log(user1);

  return <></>;
};

export default Interface;
