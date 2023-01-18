enum Role {
  ADMIN = 0,
  USER = 1,
}

const person: {
  name: [string, string];
  age: number;
  tags: string[];
  role: Role;
  gender: "male" | "female";
} = {
  name: ["Jeff", "Leung"],
  age: 30,
  tags: ["A"],
  role: Role.ADMIN,
  gender: "male",
};

// tuple --> fixed length array

let arrString: string[];
arrString = ["2"];

// union types
type NumStr = number | string;
type uniontype = "value1" | "value2";

function combine(input1: NumStr, input2: number | string) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return `${input1}${input2}`;
  }
}

export default person;

let userInput: unknown;
let userName: string;
userInput = 5;
userName = "Name";
if (typeof userInput === "string") {
  userInput = userName;
}
