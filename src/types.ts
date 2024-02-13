//General types

type BasicTypes<T> =
  | string
  | number
  | Array<T>
  | null
  | undefined
  | never
  | unknown;

type Tuple = [number, string];

const tupleExample: Tuple = [10, "string"];

type DiscriminatedUnion = "email" | "password";

const email: DiscriminatedUnion = "email";

const routes = ["home", "about", "profile", "settings"] as const;

type Routes = (typeof routes)[number];

type TemplateLiteral = `/${Routes}`;

const path: TemplateLiteral = "/home";

//type vs interface

interface Button {
  value: DiscriminatedUnion;
  path: TemplateLiteral;
}

interface ButtonInterface extends Omit<Button, "value"> {
  value: "name";
}

// doesn't throw an error but transforms the type into never
type ButtonType = Button & {
  value: "name";
};

const myButton: ButtonInterface = {
  value: "name",
  path: "/home",
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
  return num.toString();
};

type ReturnTypeExample = ReturnType<typeof numToString>;
