type BasicTypes<T> =
  | string
  | number
  | Array<T>
  | null
  | undefined
  | never
  | unknown;

const string = "string";

type Tuple = [number, string];

const tupleExample: Tuple = [10, "string"];

type NotrePremierType = string;

const notreVariable: NotrePremierType = "12";

type Enum = "email" | "password" | 12;

const email: Enum = 12;

const routes = ["home", "about", "profile", "settings"] as const;

type Routes = (typeof routes)[number];

type TemplateLiteral = `/${Routes}`;

const path: TemplateLiteral = "/home";

type Person = { name: string; age: number };

type PersonType = keyof Person; // name | age

type PersonTypes = Person[keyof Person];

interface Button {
  value: Enum;
  path?: TemplateLiteral;
}

interface ButtonInterface extends Omit<Button, "value"> {
  value: "name";
  toto: "toto";
}

type ButtonType = Button & {
  value: "name";
};

const myButton: ButtonInterface = {
  value: "name",
  path: "/home",
  toto: "toto",
};

type CorrectButtonType = Omit<Button, "value"> & {
  value: "name";
};

const myButtonFromType: CorrectButtonType = {
  value: "name",
  path: "/home",
};

type MyButtonFromPathType = (typeof myButtonFromType)["value"];

const numToString = (num: number) => {
  return {
    num: num,
    str: num.toString(),
  };
};

type ReturnTypeExample = ReturnType<typeof numToString>;

type MappedWithNewProperties<T> = {
  [Properties in keyof T]: T[Properties] | undefined;
};

type Test = MappedWithNewProperties<Person>;
