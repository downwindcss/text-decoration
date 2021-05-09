import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import { TailwindConfig } from 'tailwindcss/tailwind-config';
import cssMatcher from 'jest-matcher-css';

import textDecorationPlugin from '../src/textDecoration';

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

    .decoration-underline {
      --dw-td-underline: underline
    }

    .decoration-overline {
      --dw-td-overline: overline
    }

    .decoration-line-through {
      --dw-td-line-through: line-through
    }

    .decoration-none {
      --dw-td-none: none
    }

    .decoration-solid {
      --dw-td-style: solid
    }

    .decoration-double {
      --dw-td-style: double
    }

    .decoration-dotted {
      --dw-td-style: dotted
    }

    .decoration-dashed {
      --dw-td-style: dashed
    }

    .decoration-wavy {
      --dw-td-style: wavy
    }

    .decoration-initial {
      --dw-td-style: initial
    }

    .decoration-inherit {
      --dw-td-style: inherit
    }

    .decoration-transparent {
      --dw-td-color: transparent
    }

    .decoration-current {
      --dw-td-color: currentColor
    }

    .decoration-black {
      --dw-td-color: #000
    }

    .decoration-white {
      --dw-td-color: #fff
    }

    .decoration-gray-50 {
      --dw-td-color: #f9fafb
    }

    .decoration-gray-100 {
      --dw-td-color: #f3f4f6
    }

    .decoration-gray-200 {
      --dw-td-color: #e5e7eb
    }

    .decoration-gray-300 {
      --dw-td-color: #d1d5db
    }

    .decoration-gray-400 {
      --dw-td-color: #9ca3af
    }

    .decoration-gray-500 {
      --dw-td-color: #6b7280
    }

    .decoration-gray-600 {
      --dw-td-color: #4b5563
    }

    .decoration-gray-700 {
      --dw-td-color: #374151
    }

    .decoration-gray-800 {
      --dw-td-color: #1f2937
    }

    .decoration-gray-900 {
      --dw-td-color: #111827
    }

    .decoration-red-50 {
      --dw-td-color: #fef2f2
    }

    .decoration-red-100 {
      --dw-td-color: #fee2e2
    }

    .decoration-red-200 {
      --dw-td-color: #fecaca
    }

    .decoration-red-300 {
      --dw-td-color: #fca5a5
    }

    .decoration-red-400 {
      --dw-td-color: #f87171
    }

    .decoration-red-500 {
      --dw-td-color: #ef4444
    }

    .decoration-red-600 {
      --dw-td-color: #dc2626
    }

    .decoration-red-700 {
      --dw-td-color: #b91c1c
    }

    .decoration-red-800 {
      --dw-td-color: #991b1b
    }

    .decoration-red-900 {
      --dw-td-color: #7f1d1d
    }

    .decoration-yellow-50 {
      --dw-td-color: #fffbeb
    }

    .decoration-yellow-100 {
      --dw-td-color: #fef3c7
    }

    .decoration-yellow-200 {
      --dw-td-color: #fde68a
    }

    .decoration-yellow-300 {
      --dw-td-color: #fcd34d
    }

    .decoration-yellow-400 {
      --dw-td-color: #fbbf24
    }

    .decoration-yellow-500 {
      --dw-td-color: #f59e0b
    }

    .decoration-yellow-600 {
      --dw-td-color: #d97706
    }

    .decoration-yellow-700 {
      --dw-td-color: #b45309
    }

    .decoration-yellow-800 {
      --dw-td-color: #92400e
    }

    .decoration-yellow-900 {
      --dw-td-color: #78350f
    }

    .decoration-green-50 {
      --dw-td-color: #ecfdf5
    }

    .decoration-green-100 {
      --dw-td-color: #d1fae5
    }

    .decoration-green-200 {
      --dw-td-color: #a7f3d0
    }

    .decoration-green-300 {
      --dw-td-color: #6ee7b7
    }

    .decoration-green-400 {
      --dw-td-color: #34d399
    }

    .decoration-green-500 {
      --dw-td-color: #10b981
    }

    .decoration-green-600 {
      --dw-td-color: #059669
    }

    .decoration-green-700 {
      --dw-td-color: #047857
    }

    .decoration-green-800 {
      --dw-td-color: #065f46
    }

    .decoration-green-900 {
      --dw-td-color: #064e3b
    }

    .decoration-blue-50 {
      --dw-td-color: #eff6ff
    }

    .decoration-blue-100 {
      --dw-td-color: #dbeafe
    }

    .decoration-blue-200 {
      --dw-td-color: #bfdbfe
    }

    .decoration-blue-300 {
      --dw-td-color: #93c5fd
    }

    .decoration-blue-400 {
      --dw-td-color: #60a5fa
    }

    .decoration-blue-500 {
      --dw-td-color: #3b82f6
    }

    .decoration-blue-600 {
      --dw-td-color: #2563eb
    }

    .decoration-blue-700 {
      --dw-td-color: #1d4ed8
    }

    .decoration-blue-800 {
      --dw-td-color: #1e40af
    }

    .decoration-blue-900 {
      --dw-td-color: #1e3a8a
    }

    .decoration-indigo-50 {
      --dw-td-color: #eef2ff
    }

    .decoration-indigo-100 {
      --dw-td-color: #e0e7ff
    }

    .decoration-indigo-200 {
      --dw-td-color: #c7d2fe
    }

    .decoration-indigo-300 {
      --dw-td-color: #a5b4fc
    }

    .decoration-indigo-400 {
      --dw-td-color: #818cf8
    }

    .decoration-indigo-500 {
      --dw-td-color: #6366f1
    }

    .decoration-indigo-600 {
      --dw-td-color: #4f46e5
    }

    .decoration-indigo-700 {
      --dw-td-color: #4338ca
    }

    .decoration-indigo-800 {
      --dw-td-color: #3730a3
    }

    .decoration-indigo-900 {
      --dw-td-color: #312e81
    }

    .decoration-purple-50 {
      --dw-td-color: #f5f3ff
    }

    .decoration-purple-100 {
      --dw-td-color: #ede9fe
    }

    .decoration-purple-200 {
      --dw-td-color: #ddd6fe
    }

    .decoration-purple-300 {
      --dw-td-color: #c4b5fd
    }

    .decoration-purple-400 {
      --dw-td-color: #a78bfa
    }

    .decoration-purple-500 {
      --dw-td-color: #8b5cf6
    }

    .decoration-purple-600 {
      --dw-td-color: #7c3aed
    }

    .decoration-purple-700 {
      --dw-td-color: #6d28d9
    }

    .decoration-purple-800 {
      --dw-td-color: #5b21b6
    }

    .decoration-purple-900 {
      --dw-td-color: #4c1d95
    }

    .decoration-pink-50 {
      --dw-td-color: #fdf2f8
    }

    .decoration-pink-100 {
      --dw-td-color: #fce7f3
    }

    .decoration-pink-200 {
      --dw-td-color: #fbcfe8
    }

    .decoration-pink-300 {
      --dw-td-color: #f9a8d4
    }

    .decoration-pink-400 {
      --dw-td-color: #f472b6
    }

    .decoration-pink-500 {
      --dw-td-color: #ec4899
    }

    .decoration-pink-600 {
      --dw-td-color: #db2777
    }

    .decoration-pink-700 {
      --dw-td-color: #be185d
    }

    .decoration-pink-800 {
      --dw-td-color: #9d174d
    }

    .decoration-pink-900 {
      --dw-td-color: #831843
    }

    .decoration-1 {
      --dw-td-thickness: 1px
    }

    .decoration-2 {
      --dw-td-thickness: 2px
    }

    .decoration-4 {
      --dw-td-thickness: 4px
    }

    .decoration-8 {
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
    '.decoration-0\\.2rem',
    '.decoration-header',
    '.decoration-paragraph',
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
      selector: '.decoration-0\\.2rem',
      property: '--dw-td-thickness',
      value: '0.2rem',
    },
    {
      selector: '.decoration-header',
      property: '--dw-td-thickness',
      value: '0.3rem',
    },
    {
      selector: '.decoration-paragraph',
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
        r.selector === '.decoration-primary' ||
        r.selector === '.decoration-secondary'
    )
    .map((n: any) => ({
      selector: n.selector,
      property: n.nodes[0].prop,
      value: n.nodes[0].value,
    }));

  expect(extendedRules).toMatchObject([
    {
      selector: '.decoration-primary',
      property: '--dw-td-color',
      value: 'tomato',
    },
    {
      selector: '.decoration-secondary',
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
        r.selector === '.decoration-primary' ||
        r.selector === '.decoration-secondary'
    )
    .map((n: any) => ({
      selector: n.selector,
      property: n.nodes[0].prop,
      value: n.nodes[0].value,
    }));

  expect(extendedRules).toMatchObject([
    {
      selector: '.decoration-primary',
      property: '--dw-td-color',
      value: 'tomato',
    },
    {
      selector: '.decoration-secondary',
      property: '--dw-td-color',
      value: 'gold',
    },
  ]);
});
