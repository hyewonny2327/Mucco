// declarations.d.ts

declare module "*.svg" {
  const content: string;
  export default content;
}
// declarations.d.ts 또는 styles.d.ts

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
