const plugin = require('tailwindcss/plugin');

function textDecorationStyle({ addUtilities, theme, e }) {
  const values = theme('textDecorationStyle');

  const utility = Object.keys(values).map(key => {
    return {
      [`.${e(`text-decoration-style-${key}`)}`]: {
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
