# @downwindcss/text-decoration

A [Tailwind CSS](https://tailwindcss.com/) Plugin for [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) utility.

This plugin is composable ([Composing the Uncompsable with CSS Variables](https://adamwathan.me/composing-the-uncomposable-with-css-variables/)) thus can add multiple [decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/decoration-line) utitlies (to add under/overline and line-through together. Refer to the "Usage" sectrion below)

## Installation

```bash
npm install @downwindcss/text-decoration
# for Yarn users
yarn add @downwindcss/text-decoration
```

## Configuration

Add the plugin in `tailwind.config.js` in [Plugins section](https://tailwindcss.com/docs/configuration#plugins).

```js
// tailwind.config.js
module.exports = {
  plugins: [require('@downwindcss/text-decoration')],
};
```

## Utilities

## Usage

To enable `text-decoration` utilities, you need to add `.text-decoration` class.

By itself it doesn't apply any style similar to how built-in [Transform](https://tailwindcss.com/docs/transform) utility doesn't apply any transformations.

```html
<h2 class="text-decoration">Header</h2>
```

### decoration-line

Utilities for applying lines.  
MDN: [decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/decoration-line)

Use Tailwind CSS's [no-underline](https://tailwindcss.com/docs/text-decoration#no-underline) to remove text decoration.

**ATTRIBUTION:** Screenshots on [decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/decoration-line) by [Mozilla Contributrors](https://developer.mozilla.org/en-US/docs/MDN/About/contributors.txt) is licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)

#### underline.

```html
<p>
  I'd far rather be
  <span class="text-decoration decoration-line-underline">
    happy than right
  </span>
  any day.
</p>
```

![rendered](.images/underline.png)

#### overline.

```html
<p>
  I'd far rather be
  <span class="text-decoration decoration-line-overline">
    happy than right
  </span>
  any day.
</p>
```

![rendered](.images/overline.png)

#### line-through.

```html
<p>
  I'd far rather be
  <span class="text-decoration decoration-line-through">
    happy than right
  </span>
  any day.
</p>
```

![rendered](.images/line-through.png)

**NOTE**: It's not `decoration-line-line-through` even though CSS applied is `decoration-line: line-through;`

#### underline + overline + line-through

```html
<p>
  I'd far rather be
  <span
    class="text-decoration 
      decoration-overline 
      decoration-underline 
      decoration-line-through"
  >
    happy than right
  </span>
  any day.
</p>
```

![rendered](.images/underline+overline+line-through.png)

### text-decoration-color

All Tailwind CSS colors AND your extended colors are available.

You can extend decoration colors and by extending `textDecorationPlugin.colors`.

Extend colors in <code>tailwind.config.js</code>

```js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      textDecorationPlugin: {
        colors: {
          primary: 'tomato',
          secondary: 'gold',
        },
      },    },
  },
  variants: {},
  plugins: [textDecorationPlugin],
}
```

And use them in your HTML markup.

```html
<h1 class="text-decoration 
    decoration-underline decoration-overline decoration-line-through 
    decoration-wavy
    decoration-primary
    decoration-2">
    Header
</h1>
```

If you extend `colors`, extended colors will be available for the plugin.

```js
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
      },
      textDecorationPlugin: {
        colors: {
          primary: 'tomato',
        },
      },
    },
  },
  variants: {},
  plugins: [textDecorationPlugin],
}
```

And use them in your HTML markup.

```html
<h1 class="text-decoration 
    decoration-underline decoration-overline decoration-line-through 
    decoration-wavy
    decoration-light-blue-300
    decoration-2">
    Header
</h1>
```


### text-decoration-style

You can use following [text-decoration-style](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style)s.


| CSS               | Applied Style           |
|-------------------|-------------------------|
| decoration-solid  | text-decoration: solid  |
| decoration-double | text-decoration: double |
| decoration-dotted | text-decoration: dotted |
| decoration-dashed | text-decoration: dashed |
| decoration-wavy   | text-decoration: wavy   |


### text-decoration-thickness

When you type `decoration-{thickness: number}`, [text-decoration-thickness](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness) will be applied.

As an example, `decoration-2` will apply `2px` thickness

```html
<h1 class="text-decoration 
    decoration-underline decoration-overline decoration-line-through 
    decoration-wavy
    decoration-primary
    decoration-2">
    Header
</h1>
```

Available values are,


| CSS          | Applied Style                   |
|--------------|---------------------------------|
| decoration-1 | text-decoration-thickness: 1px; |
| decoration-2 | text-decoration-thickness: 2px; |
| decoration-4 | text-decoration-thickness: 4px; |
| decoration-8 | text-decoration-thickness: 8px; |

You can extend the thickness by updating configuration, `textDecorationPlugin.thicknesses` property.

```js
module.exports = {
  theme: {
    extend: {
      textDecorationPlugin: {
        thicknesses: {
          '0.2rem': '0.2rem',
        },
      },
    },
  },
  variants: {},
  plugins: [textDecorationPlugin],
}
```

And use it as `decoration-0.2rem`.


### Clearing Deocration

Use `decoration-none`.

### Duplicate Utilities

Following `text-decoration` can be done with native [Tailwind CSS utilities](https://tailwindcss.com/docs/text-decoration) but also added in this plugin to enable composability.

1. underline: `text-decoration: underline;`
2. line-through: `text-decoration: line-through;`
3. no-underline: `text-decoration: none;`

## Resource

- Source: [downwindcss/text-decoration](https://github.com/downwindcss/text-decoration)
- NPM: https://www.npmjs.com/package/@downwindcss/text-decoration

## Context

Based on idea post in Tailwind CSS dicussion, https://github.com/tailwindlabs/tailwindcss/discussions/3749

This plugin provides missing Tailwind CSS `text-decoration*` properties as a plugin.

## Build

This project uses [PNPM](https://pnpm.io/)