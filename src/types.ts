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
