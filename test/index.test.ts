import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import { TailwindConfig } from 'tailwindcss/tailwind-config';
import cssMatcher from 'jest-matcher-css';

import textDecorationPlugin from '../src/textDecoration';
import { internalPrefix } from '../src/constants';

// https://github.com/innocenzi/tailwindcss-theming/blob/eb802f66f716a3df9f66df4c0b4a428729fd7eef/test/tailwind/themingThemes.test.ts#L13
expect.extend({ toMatchCss: cssMatcher });

declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchCss(css: string): R;
    }
  }
}

const defaultConfig = ({
  plugins: [textDecorationPlugin],
  // disalble core plugins: https://tailwindcss.com/docs/configuration#core-plugins
  corePlugins: [],
} as unknown) as TailwindConfig;

function generateTailwindCss(customConfig?: TailwindConfig) {
  const config = Object.assign(defaultConfig, customConfig);

  return postcss([tailwindcss(config)]).process('@tailwind utilities', {
    from: undefined,
  });
}

/**
 * Happy Path test
 */
test('all Tailwind CSS colors are used', async () => {
  const utilities = await generateTailwindCss();

  expect(utilities.css).toMatchInlineSnapshot(`
    ".text-decoration {
      --dw-td-overline: var(--tw-empty,/*!*/ /*!*/);
      --dw-td-underline: var(--tw-empty,/*!*/ /*!*/);
      --dw-td-line-through: var(--tw-empty,/*!*/ /*!*/);
      --dw-td-none: var(--tw-empty,/*!*/ /*!*/);
      --dw-td-color: currentcolor;
      --dw-td-style: initial;
      --dw-td-thickness: 1px;
      text-decoration-line: var(--dw-td-overline) var(--dw-td-underline) var(--dw-td-line-through) var(--dw-td-none);
      text-decoration-color: var(--dw-td-color);
      text-decoration-style: var(--dw-td-style);
      text-decoration-thickness: var(--dw-td-thickness)
    }

    .text-decoration-underline {
      --dw-td-underline: underline
    }

    .text-decoration-overline {
      --dw-td-overline: overline
    }

    .text-decoration-line-through {
      --dw-td-line-through: line-through
    }

    .text-decoration-none {
      --dw-td-none: none
    }

    .text-decoration-solid {
      --dw-td-style: solid
    }

    .text-decoration-double {
      --dw-td-style: double
    }

    .text-decoration-dotted {
      --dw-td-style: dotted
    }

    .text-decoration-dashed {
      --dw-td-style: dashed
    }

    .text-decoration-wavy {
      --dw-td-style: wavy
    }

    .text-decoration-initial {
      --dw-td-style: initial
    }

    .text-decoration-inherit {
      --dw-td-style: inherit
    }

    .text-decoration-transparent {
      --dw-td-color: transparent
    }

    .text-decoration-current {
      --dw-td-color: currentColor
    }

    .text-decoration-black {
      --dw-td-color: #000
    }

    .text-decoration-white {
      --dw-td-color: #fff
    }

    .text-decoration-gray-50 {
      --dw-td-color: #f9fafb
    }

    .text-decoration-gray-100 {
      --dw-td-color: #f3f4f6
    }

    .text-decoration-gray-200 {
      --dw-td-color: #e5e7eb
    }

    .text-decoration-gray-300 {
      --dw-td-color: #d1d5db
    }

    .text-decoration-gray-400 {
      --dw-td-color: #9ca3af
    }

    .text-decoration-gray-500 {
      --dw-td-color: #6b7280
    }

    .text-decoration-gray-600 {
      --dw-td-color: #4b5563
    }

    .text-decoration-gray-700 {
      --dw-td-color: #374151
    }

    .text-decoration-gray-800 {
      --dw-td-color: #1f2937
    }

    .text-decoration-gray-900 {
      --dw-td-color: #111827
    }

    .text-decoration-red-50 {
      --dw-td-color: #fef2f2
    }

    .text-decoration-red-100 {
      --dw-td-color: #fee2e2
    }

    .text-decoration-red-200 {
      --dw-td-color: #fecaca
    }

    .text-decoration-red-300 {
      --dw-td-color: #fca5a5
    }

    .text-decoration-red-400 {
      --dw-td-color: #f87171
    }

    .text-decoration-red-500 {
      --dw-td-color: #ef4444
    }

    .text-decoration-red-600 {
      --dw-td-color: #dc2626
    }

    .text-decoration-red-700 {
      --dw-td-color: #b91c1c
    }

    .text-decoration-red-800 {
      --dw-td-color: #991b1b
    }

    .text-decoration-red-900 {
      --dw-td-color: #7f1d1d
    }

    .text-decoration-yellow-50 {
      --dw-td-color: #fffbeb
    }

    .text-decoration-yellow-100 {
      --dw-td-color: #fef3c7
    }

    .text-decoration-yellow-200 {
      --dw-td-color: #fde68a
    }

    .text-decoration-yellow-300 {
      --dw-td-color: #fcd34d
    }

    .text-decoration-yellow-400 {
      --dw-td-color: #fbbf24
    }

    .text-decoration-yellow-500 {
      --dw-td-color: #f59e0b
    }

    .text-decoration-yellow-600 {
      --dw-td-color: #d97706
    }

    .text-decoration-yellow-700 {
      --dw-td-color: #b45309
    }

    .text-decoration-yellow-800 {
      --dw-td-color: #92400e
    }

    .text-decoration-yellow-900 {
      --dw-td-color: #78350f
    }

    .text-decoration-green-50 {
      --dw-td-color: #ecfdf5
    }

    .text-decoration-green-100 {
      --dw-td-color: #d1fae5
    }

    .text-decoration-green-200 {
      --dw-td-color: #a7f3d0
    }

    .text-decoration-green-300 {
      --dw-td-color: #6ee7b7
    }

    .text-decoration-green-400 {
      --dw-td-color: #34d399
    }

    .text-decoration-green-500 {
      --dw-td-color: #10b981
    }

    .text-decoration-green-600 {
      --dw-td-color: #059669
    }

    .text-decoration-green-700 {
      --dw-td-color: #047857
    }

    .text-decoration-green-800 {
      --dw-td-color: #065f46
    }

    .text-decoration-green-900 {
      --dw-td-color: #064e3b
    }

    .text-decoration-blue-50 {
      --dw-td-color: #eff6ff
    }

    .text-decoration-blue-100 {
      --dw-td-color: #dbeafe
    }

    .text-decoration-blue-200 {
      --dw-td-color: #bfdbfe
    }

    .text-decoration-blue-300 {
      --dw-td-color: #93c5fd
    }

    .text-decoration-blue-400 {
      --dw-td-color: #60a5fa
    }

    .text-decoration-blue-500 {
      --dw-td-color: #3b82f6
    }

    .text-decoration-blue-600 {
      --dw-td-color: #2563eb
    }

    .text-decoration-blue-700 {
      --dw-td-color: #1d4ed8
    }

    .text-decoration-blue-800 {
      --dw-td-color: #1e40af
    }

    .text-decoration-blue-900 {
      --dw-td-color: #1e3a8a
    }

    .text-decoration-indigo-50 {
      --dw-td-color: #eef2ff
    }

    .text-decoration-indigo-100 {
      --dw-td-color: #e0e7ff
    }

    .text-decoration-indigo-200 {
      --dw-td-color: #c7d2fe
    }

    .text-decoration-indigo-300 {
      --dw-td-color: #a5b4fc
    }

    .text-decoration-indigo-400 {
      --dw-td-color: #818cf8
    }

    .text-decoration-indigo-500 {
      --dw-td-color: #6366f1
    }

    .text-decoration-indigo-600 {
      --dw-td-color: #4f46e5
    }

    .text-decoration-indigo-700 {
      --dw-td-color: #4338ca
    }

    .text-decoration-indigo-800 {
      --dw-td-color: #3730a3
    }

    .text-decoration-indigo-900 {
      --dw-td-color: #312e81
    }

    .text-decoration-purple-50 {
      --dw-td-color: #f5f3ff
    }

    .text-decoration-purple-100 {
      --dw-td-color: #ede9fe
    }

    .text-decoration-purple-200 {
      --dw-td-color: #ddd6fe
    }

    .text-decoration-purple-300 {
      --dw-td-color: #c4b5fd
    }

    .text-decoration-purple-400 {
      --dw-td-color: #a78bfa
    }

    .text-decoration-purple-500 {
      --dw-td-color: #8b5cf6
    }

    .text-decoration-purple-600 {
      --dw-td-color: #7c3aed
    }

    .text-decoration-purple-700 {
      --dw-td-color: #6d28d9
    }

    .text-decoration-purple-800 {
      --dw-td-color: #5b21b6
    }

    .text-decoration-purple-900 {
      --dw-td-color: #4c1d95
    }

    .text-decoration-pink-50 {
      --dw-td-color: #fdf2f8
    }

    .text-decoration-pink-100 {
      --dw-td-color: #fce7f3
    }

    .text-decoration-pink-200 {
      --dw-td-color: #fbcfe8
    }

    .text-decoration-pink-300 {
      --dw-td-color: #f9a8d4
    }

    .text-decoration-pink-400 {
      --dw-td-color: #f472b6
    }

    .text-decoration-pink-500 {
      --dw-td-color: #ec4899
    }

    .text-decoration-pink-600 {
      --dw-td-color: #db2777
    }

    .text-decoration-pink-700 {
      --dw-td-color: #be185d
    }

    .text-decoration-pink-800 {
      --dw-td-color: #9d174d
    }

    .text-decoration-pink-900 {
      --dw-td-color: #831843
    }

    .text-decoration-1 {
      --dw-td-thickness: 1px
    }

    .text-decoration-2 {
      --dw-td-thickness: 2px
    }

    .text-decoration-4 {
      --dw-td-thickness: 4px
    }

    .text-decoration-8 {
      --dw-td-thickness: 8px
    }"
  `);
});

test('Custom thicknesses', async () => {
  const utilities = await generateTailwindCss({
    theme: {
      extend: {
        textDecorationPlugin: {
          thicknesses: {
            '0.2rem': '0.2rem',
            header: '0.3rem',
            paragraph: '3px',
          },
        },
      },
    },
  } as any);

  const extendedSelectors = [
    `.${internalPrefix}0\\.2rem`,
    `.${internalPrefix}header`,
    `.${internalPrefix}paragraph`,
  ];

  const extendedRules = utilities.root.nodes
    .filter((r: any) => extendedSelectors.includes(r.selector))
    .map((n: any) => ({
      selector: n.selector,
      property: n.nodes[0].prop,
      value: n.nodes[0].value,
    }));

  expect(extendedRules).toMatchObject([
    {
      selector: `.${internalPrefix}0\\.2rem`,
      property: '--dw-td-thickness',
      value: '0.2rem',
    },
    {
      selector: `.${internalPrefix}header`,
      property: '--dw-td-thickness',
      value: '0.3rem',
    },
    {
      selector: `.${internalPrefix}paragraph`,
      property: '--dw-td-thickness',
      value: '3px',
    },
  ]);
});

test('"tw.colors" are available', async () => {
  const utilities = await generateTailwindCss({
    theme: {
      extend: {
        colors: {
          primary: 'tomato',
          secondary: 'gold',
        },
      },
    },
  } as any);

  let extendedRules = utilities.root.nodes
    .filter(
      (r: any) =>
        r.selector === `.${internalPrefix}primary` ||
        r.selector === `.${internalPrefix}secondary`
    )
    .map((n: any) => ({
      selector: n.selector,
      property: n.nodes[0].prop,
      value: n.nodes[0].value,
    }));

  expect(extendedRules).toMatchObject([
    {
      selector: `.${internalPrefix}primary`,
      property: '--dw-td-color',
      value: 'tomato',
    },
    {
      selector: `.${internalPrefix}secondary`,
      property: '--dw-td-color',
      value: 'gold',
    },
  ]);
});

test('"textDecorationPlugin.colors" are available', async () => {
  const utilities = await generateTailwindCss({
    textDecorationPlugin: {
      colors: {
        primary: 'tomato',
        secondary: 'gold',
      },
    },
  } as any);

  let extendedRules = utilities.root.nodes
    .filter(
      (r: any) =>
        r.selector === `.${internalPrefix}primary` ||
        r.selector === `.${internalPrefix}secondary`
    )
    .map((n: any) => ({
      selector: n.selector,
      property: n.nodes[0].prop,
      value: n.nodes[0].value,
    }));

  expect(extendedRules).toMatchObject([
    {
      selector: `.${internalPrefix}primary`,
      property: '--dw-td-color',
      value: 'tomato',
    },
    {
      selector: `.${internalPrefix}secondary`,
      property: '--dw-td-color',
      value: 'gold',
    },
  ]);
});
