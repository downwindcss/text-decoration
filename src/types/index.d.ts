export type Escape = (className: string) => string;
interface PluginType {
  // // https://github.com/tailwindlabs/tailwindcss/blob/d39ecc56f1/__tests__/util/invokePlugin.js#L11
  // theme: (path: string, defaultValue?: string) => any;
  addUtilities: (utilities: any[], variants?: any) => void;
  variants: any;
  theme: any;
  e: Escape;
}
