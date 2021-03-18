/**
 * This plugin will extend `text-decoration-style`
 * providing complete options in https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style
 *
 * The implementation is based off of Tailwind CSS discussion
 * https://github.com/tailwindlabs/tailwindcss/discussions/3749
 */

const plugin = require('tailwindcss/plugin');

export interface textDecorationStyleProp {
  addUtilities: (utility: any) => void;
  theme: (prop: string) => any;
  // Escape non"standard CSS string such as `1/4`
  // Refer to https://tailwindcss.com/docs/plugins#escaping-class-names
  e: (prop: string) => string;
}

const getProperty = (key: string) => `text-decoration-style-${key}`;

function textDecorationStyle({
  addUtilities,
  theme,
  e,
}: textDecorationStyleProp) {
  const values = theme('textDecorationStyle');

  const utility = Object.keys(values).map(key => {
    return {
      [`.${e(getProperty(key))}`]: {
        'text-decoration-style': values[key],
      },
    };
  });

  addUtilities(utility);
}

const textDecorationStylePlugin = plugin(textDecorationStyle, {
  theme: {
    textDecorationStyle: {
      solid: 'solid',
      double: 'double',
      dotted: 'dotted',
      dashed: 'dashed',
      wavy: 'wavy',
    },
  },
});

export default textDecorationStylePlugin;
