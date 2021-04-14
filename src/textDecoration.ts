const plugin = require('tailwindcss/plugin');

// const themeWalker = ({ theme, config }: { theme: Theme; config: Config }) => {
//   console.log({ colors: theme('colors'), config });
// };

// const themePlugin = plugin(themeWalker);

type BuildKey = (postFix: string) => string;
type BuildValue = (colorValue: string) => { '--dw-td-color': string };

const buildKey: BuildKey = postFix => `.td-${postFix}`;
const buildValue: BuildValue = colorValue => ({ '--dw-td-color': colorValue });

// Returns an array of
const buildTextDecorationColors = (themeColors: any) => {
  return Object.keys(themeColors).reduce((result: any, themeColorName) => {
    // if color is an object(containing, 50, 100, etc) then,
    //    create an array of objects
    // if color contains a string, then just add it to the result
    const themeColorValue = themeColors[themeColorName];
    const colorContainsMultipleValues = !(typeof themeColorValue === 'string');

    if (colorContainsMultipleValues) {
      Object.keys(themeColorValue).forEach(colorValueName => {
        const key = buildKey(`${themeColorName}-${colorValueName}`);
        const value = buildValue(themeColorValue[colorValueName]);
        result[key] = value;
      });
    } else {
      const key = buildKey(themeColorName);
      const value = buildValue(themeColorValue);
      result[key] = value;
    }
    return result;
  }, {});
};

const buildTextDecorationStyles = () => ({
  '.td-style-solid': { '--dw-td-style': 'solid' },
  '.td-style-double': { '--dw-td-style': 'double' },
  '.td-style-dotted': { '--dw-td-style': 'dotted' },
  '.td-style-dashed': { '--dw-td-style': 'dashed' },
  '.td-style-wavy': { '--dw-td-style': 'wavy' },
  '.td-style-initial': { '--dw-td-style': 'initial' },
  '.td-style-inherit': { '--dw-td-style': 'inherit' },
});

// just copied from https://tailwindcss.com/docs/border-width
const buildTextDecorationThickness = () => ({
  '.td-thickness': { '--dw-td-thickness': '1px' },
  '.td-thickness-0': { '--dw-td-thickness': '0' },
  '.td-thickness-2': { '--dw-td-thickness': '2px' },
  '.td-thickness-4': { '--dw-td-thickness': '4px' },
  '.td-thickness-8': { '--dw-td-thickness': '8px' },
});

interface PluginType {
  // https://github.com/tailwindlabs/tailwindcss/blob/d39ecc56f1/__tests__/util/invokePlugin.js#L11
  theme: (path: string, defaultValue?: string) => any;
  addUtilities: (utilities: any[], variants?: any) => void;
  variants: any;
}

function textDecoration({ addUtilities, variants, theme }: PluginType) {
  const themeColors = theme('colors');
  const textDecorationColors = buildTextDecorationColors(themeColors);
  const textDecorationStyles = buildTextDecorationStyles();
  const textDecorationThickness = buildTextDecorationThickness();

  console.log({ textDecorationThickness });

  addUtilities(
    [
      {
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
      },
      {
        '.td-line-underline': { '--dw-td-underline': 'underline' },
        '.td-line-overline': { '--dw-td-overline': 'overline' },
        '.td-line-through': { '--dw-td-line-through': 'line-through' },
      },
      { ...textDecorationColors },
      { ...textDecorationStyles },
      { ...textDecorationThickness },
    ],
    variants('textDecoration')
  );
}

export default plugin(textDecoration);
