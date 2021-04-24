# @downwindcss/text-decoration

A [Tailwind CSS](https://tailwindcss.com/) Plugin for [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) utility.

This plugin is composable ([Composing the Uncompsable with CSS Variables](https://adamwathan.me/composing-the-uncomposable-with-css-variables/)) thus can add multiple [text-decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line) utitlies (to add under/overline and line-through together. Refer to the "Usage" sectrion below)

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

### text-decoration-line

#### underline.

#### overline.

#### line-through.

#### underline + overline + line-through

### text-decoration-color

All Tailwind CSS colors and custom colors are available.

// Show tw color usage  
// add a custom color and show the usage

### text-decoration-style

### text-decoration-thickness

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
