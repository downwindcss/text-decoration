import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
// import buildColorRules from '../../src/rules/buildColorRules'
import textDecorationPlugin from '../../src/textDecoration'


/**
 * Happy Path test
 */
test('all Tailwind CSS colors are used', async () => {
  const config = {
    plugins: [textDecorationPlugin],
    // disalble core plugins: https://tailwindcss.com/docs/configuration#core-plugins
    corePlugins: []
  } as unknown as TailwindConfig;

  const utilities = await postcss([tailwindcss(config)])
    .process('@tailwind utilities', { from: undefined })

  console.info({ css: utilities.css })
})

xtest('"textDecorationPlugin.colors" are available', () => { })
xtest('"tw.colors" are available', () => { })
