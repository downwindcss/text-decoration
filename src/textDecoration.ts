import textDecorationRule from './rules/textDecorationRule';
import lineRules from './rules/lineRules';
import styleRules from './rules/styleRules';
import buildColorRules from './rules/buildColorRules';
import buildThicknessRules from './rules/buildThicknessRules';

import { PluginType } from './types';

const plugin = require('tailwindcss/plugin');

function textDecoration({ addUtilities, variants, theme, e }: PluginType) {
  const themeColors = theme('textDecorationPlugin.colors');
  const themeThicknesses = theme('textDecorationPlugin.thicknesses');
  const customVariants = variants('textDecorationPlugin');

  const colorRules = buildColorRules(themeColors, e);
  const thicknessRules = buildThicknessRules(themeThicknesses, e);

  addUtilities(
    [textDecorationRule, lineRules, styleRules, colorRules, thicknessRules],
    { variants: customVariants }
  );
}

const defaultTextDecoration = {
  theme: {
    textDecorationPlugin: (theme: any) => ({
      colors: theme('colors'),
      thicknesses: {
        1: '1px',
        2: '2px',
        4: '4px',
        8: '8px',
      },
    }),
  },
  variants: {
    textDecorationPlugin: ['responsive']
  }
};

export default plugin(textDecoration, defaultTextDecoration);
