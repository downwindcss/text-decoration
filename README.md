# @downwindcss/text-decoration

Based on idea post in Tailwind CSS dicussion, https://github.com/tailwindlabs/tailwindcss/discussions/3749

This plugin provides missing Tailwind CSS `text-decoration*` properties as a plugin.

## text-decoration-style

MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style

TW playground demo - https://play.tailwindcss.com/Wjwo66GH3G?file=config

1. text-decoration-style-solid: `text-decoration-style: solid;`
1. text-decoration-style-double: `text-decoration-style: double;`
1. text-decoration-style-dotted: `text-decoration-style: dotted;`
1. text-decoration-style-dashed: `text-decoration-style: dashed;`
1. text-decoration-style-wavy: `text-decoration-style: wavy;`

## text-decoration-color

MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color

`text-decoration-color` will use all avaialble Tailwind CSS colors.  
Possibly a huge CSS but with TW/jit, it can work better.

## Missing text-decoration-line

TW provides following three `text-decoration` options.  
https://tailwindcss.com/docs/text-decoration

| Class        | Properties                    |
| ------------ | ----------------------------- |
| underline    | text-decoration: underline    |
| line-through | text-decoration: line-through |
| no-underline | text-decoration: none         |

And `@downwindcss/text-decoration` provides additional options.

| Class                              | Properties                          |
| ---------------------------------- | ----------------------------------- |
| text-decoration-line-overline      | text-decoration: overline           |
| text-decoration-line-blink         | text-decoration: blink              |
| text-decoration-line-underoverline | text-decoration: underline overline |
| text-decoration-line-              | text-decoration: unset              |

You can do all combinations of `[ underline || overline || line-through || blink ]` in the [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line#formal_syntax), but decided not to as the usage would be low and not to pollute the class names (not to mention blowing up the CSS size).

## text-decoration-thickness

Default options provide `text-decoration-thickness-[n]` where `n` is from 1~5px.  
This can be overriden via TW configuration file as show below.

```js
module.exports = {
  theme: {
    extend: {
      textDecorationThickness: {
        '1rem': '1rem',
        primary: '2px',
      },
    },
  },
};
```
