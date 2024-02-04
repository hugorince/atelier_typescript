type DiscriminatedUnion = "email" | "password";

const email: DiscriminatedUnion = "email";

const routes = ["home", "about", "profile", "settings"] as const;

type Routes = (typeof routes)[number];

type TemplateLiteral = `/${Routes}`;

const path: TemplateLiteral = "/home";
