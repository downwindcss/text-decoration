const plugin = require('tailwindcss/colors');
const textDecorationRule = require('./rules/textDecorationRule');
const lineRules = require('./rules/lineRules');
const styleRules = require('./rules/styleRules');
const buildColorRules = require('./rules/buildColorRules');
const buildThicknessRules = require('./rules/buildThicknessRules');

export type Escape = (className: string) => string;
interface PluginType {
  // // https://github.com/tailwindlabs/tailwindcss/blob/d39ecc56f1/__tests__/util/invokePlugin.js#L11
  // theme: (path: string, defaultValue?: string) => any;
  addUtilities: (utilities: any[], variants?: any) => void;
  variants: any;
  theme: any;
  e: Escape;
}

function textDecoration({ addUtilities, variants, theme, e }: PluginType) {
  const themeColors = theme('textDecorationPlugin.colors');
  const themeThicknesses = theme('textDecorationPlugin.thicknesses');

  const colorRules = buildColorRules(themeColors, e);
  const thicknessRules = buildThicknessRules(themeThicknesses, e);

  addUtilities(
    [textDecorationRule, lineRules, styleRules, colorRules, thicknessRules],
    variants('textDecorationPlugin')
  );
}

const defaultTextDecoration = {
  theme: {
    textDecorationPlugin: (theme: any) => ({
      colors: theme('colors'),
      thicknesses: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        4: '4px',
        8: '8px',
      },
    }),
  },
};

export default plugin(textDecoration, defaultTextDecoration);
