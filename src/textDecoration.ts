const plugin = require('tailwindcss/plugin');

type Escape = (className: string) => string;
interface PluginType {
  // // https://github.com/tailwindlabs/tailwindcss/blob/d39ecc56f1/__tests__/util/invokePlugin.js#L11
  // theme: (path: string, defaultValue?: string) => any;
  addUtilities: (utilities: any[], variants?: any) => void;
  variants: any;
  theme: any;
  e: Escape;
}

// Returns an array of
const buildColorRules = (themeColors: any, e: Escape) =>
  Object.keys(themeColors).reduce((result, themeColorName) => {
    // if color is an object(containing, 50, 100, etc) then,
    //    create an array of objects
    // if color contains a string, then just add it to the result
    const themeColorValue = themeColors[themeColorName];
    const colorContainsMultipleValues = !(typeof themeColorValue === 'string');

    if (colorContainsMultipleValues) {
      Object.keys(themeColorValue).forEach(colorValueName => {
        const key = `.${e(`td-${themeColorName}-${colorValueName}`)}`;
        const value = { '--dw-td-color': themeColorValue[colorValueName] };
        result[key] = value;
      });
    } else {
      const key = `.${e(`td-${themeColorName}`)}`;
      const value = { '--dw-td-color': themeColorValue };
      result[key] = value;
    }
    return result;
  }, {} as Record<string, { '--dw-td-color': string }>);

const buildThicknessRules = (
  thicknesses: Record<string, string>,
  e: Escape
) => {
  return Object.keys(thicknesses).reduce((result: any, thickness) => {
    const suffix = thickness == 'DEFAULT' ? '' : `-${thickness}`;
    const key = `.${e(`td-thickness${suffix}`)}`;

    result[key] = { '--dw-td-thickness': thicknesses[thickness] };
    return result;
  }, {});
};

const textDecorationRule = {
  '.text-decoration': {
    '--dw-td-overline': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-underline': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-line-through': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-color': 'currentcolor',
    '--dw-td-style': 'initial',
    '--dw-td-thickness': '1px',

    'text-decoration-line': [
      'var(--dw-td-overline)',
      'var(--dw-td-underline)',
      'var(--dw-td-line-through)',
    ].join(' '),

    'text-decoration-color': 'var(--dw-td-color)',
    'text-decoration-style': 'var(--dw-td-style)',
    'text-decoration-thickness': 'var(--dw-td-thickness)',
  },
};
const lineRules = {
  '.td-line-underline': { '--dw-td-underline': 'underline' },
  '.td-line-overline': { '--dw-td-overline': 'overline' },
  '.td-line-through': { '--dw-td-line-through': 'line-through' },
};
const styleRules = {
  '.td-style-solid': { '--dw-td-style': 'solid' },
  '.td-style-double': { '--dw-td-style': 'double' },
  '.td-style-dotted': { '--dw-td-style': 'dotted' },
  '.td-style-dashed': { '--dw-td-style': 'dashed' },
  '.td-style-wavy': { '--dw-td-style': 'wavy' },
  '.td-style-initial': { '--dw-td-style': 'initial' },
  '.td-style-inherit': { '--dw-td-style': 'inherit' },
};

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
