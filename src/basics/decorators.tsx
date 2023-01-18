function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("Createing Person object...");
  }
}

const pers = new Person();

//-------
const Decorators = () => {
  return <></>;
};

export default Decorators;
