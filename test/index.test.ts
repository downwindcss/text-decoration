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

xdescribe('Happy Path tests', () => {
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
      }

      @media (min-width: 640px) {
        .sm\\\\:text-decoration {
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

        .sm\\\\:text-decoration-underline {
          --dw-td-underline: underline
        }

        .sm\\\\:text-decoration-overline {
          --dw-td-overline: overline
        }

        .sm\\\\:text-decoration-line-through {
          --dw-td-line-through: line-through
        }

        .sm\\\\:text-decoration-none {
          --dw-td-none: none
        }

        .sm\\\\:text-decoration-solid {
          --dw-td-style: solid
        }

        .sm\\\\:text-decoration-double {
          --dw-td-style: double
        }

        .sm\\\\:text-decoration-dotted {
          --dw-td-style: dotted
        }

        .sm\\\\:text-decoration-dashed {
          --dw-td-style: dashed
        }

        .sm\\\\:text-decoration-wavy {
          --dw-td-style: wavy
        }

        .sm\\\\:text-decoration-initial {
          --dw-td-style: initial
        }

        .sm\\\\:text-decoration-inherit {
          --dw-td-style: inherit
        }

        .sm\\\\:text-decoration-transparent {
          --dw-td-color: transparent
        }

        .sm\\\\:text-decoration-current {
          --dw-td-color: currentColor
        }

        .sm\\\\:text-decoration-black {
          --dw-td-color: #000
        }

        .sm\\\\:text-decoration-white {
          --dw-td-color: #fff
        }

        .sm\\\\:text-decoration-gray-50 {
          --dw-td-color: #f9fafb
        }

        .sm\\\\:text-decoration-gray-100 {
          --dw-td-color: #f3f4f6
        }

        .sm\\\\:text-decoration-gray-200 {
          --dw-td-color: #e5e7eb
        }

        .sm\\\\:text-decoration-gray-300 {
          --dw-td-color: #d1d5db
        }

        .sm\\\\:text-decoration-gray-400 {
          --dw-td-color: #9ca3af
        }

        .sm\\\\:text-decoration-gray-500 {
          --dw-td-color: #6b7280
        }

        .sm\\\\:text-decoration-gray-600 {
          --dw-td-color: #4b5563
        }

        .sm\\\\:text-decoration-gray-700 {
          --dw-td-color: #374151
        }

        .sm\\\\:text-decoration-gray-800 {
          --dw-td-color: #1f2937
        }

        .sm\\\\:text-decoration-gray-900 {
          --dw-td-color: #111827
        }

        .sm\\\\:text-decoration-red-50 {
          --dw-td-color: #fef2f2
        }

        .sm\\\\:text-decoration-red-100 {
          --dw-td-color: #fee2e2
        }

        .sm\\\\:text-decoration-red-200 {
          --dw-td-color: #fecaca
        }

        .sm\\\\:text-decoration-red-300 {
          --dw-td-color: #fca5a5
        }

        .sm\\\\:text-decoration-red-400 {
          --dw-td-color: #f87171
        }

        .sm\\\\:text-decoration-red-500 {
          --dw-td-color: #ef4444
        }

        .sm\\\\:text-decoration-red-600 {
          --dw-td-color: #dc2626
        }

        .sm\\\\:text-decoration-red-700 {
          --dw-td-color: #b91c1c
        }

        .sm\\\\:text-decoration-red-800 {
          --dw-td-color: #991b1b
        }

        .sm\\\\:text-decoration-red-900 {
          --dw-td-color: #7f1d1d
        }

        .sm\\\\:text-decoration-yellow-50 {
          --dw-td-color: #fffbeb
        }

        .sm\\\\:text-decoration-yellow-100 {
          --dw-td-color: #fef3c7
        }

        .sm\\\\:text-decoration-yellow-200 {
          --dw-td-color: #fde68a
        }

        .sm\\\\:text-decoration-yellow-300 {
          --dw-td-color: #fcd34d
        }

        .sm\\\\:text-decoration-yellow-400 {
          --dw-td-color: #fbbf24
        }

        .sm\\\\:text-decoration-yellow-500 {
          --dw-td-color: #f59e0b
        }

        .sm\\\\:text-decoration-yellow-600 {
          --dw-td-color: #d97706
        }

        .sm\\\\:text-decoration-yellow-700 {
          --dw-td-color: #b45309
        }

        .sm\\\\:text-decoration-yellow-800 {
          --dw-td-color: #92400e
        }

        .sm\\\\:text-decoration-yellow-900 {
          --dw-td-color: #78350f
        }

        .sm\\\\:text-decoration-green-50 {
          --dw-td-color: #ecfdf5
        }

        .sm\\\\:text-decoration-green-100 {
          --dw-td-color: #d1fae5
        }

        .sm\\\\:text-decoration-green-200 {
          --dw-td-color: #a7f3d0
        }

        .sm\\\\:text-decoration-green-300 {
          --dw-td-color: #6ee7b7
        }

        .sm\\\\:text-decoration-green-400 {
          --dw-td-color: #34d399
        }

        .sm\\\\:text-decoration-green-500 {
          --dw-td-color: #10b981
        }

        .sm\\\\:text-decoration-green-600 {
          --dw-td-color: #059669
        }

        .sm\\\\:text-decoration-green-700 {
          --dw-td-color: #047857
        }

        .sm\\\\:text-decoration-green-800 {
          --dw-td-color: #065f46
        }

        .sm\\\\:text-decoration-green-900 {
          --dw-td-color: #064e3b
        }

        .sm\\\\:text-decoration-blue-50 {
          --dw-td-color: #eff6ff
        }

        .sm\\\\:text-decoration-blue-100 {
          --dw-td-color: #dbeafe
        }

        .sm\\\\:text-decoration-blue-200 {
          --dw-td-color: #bfdbfe
        }

        .sm\\\\:text-decoration-blue-300 {
          --dw-td-color: #93c5fd
        }

        .sm\\\\:text-decoration-blue-400 {
          --dw-td-color: #60a5fa
        }

        .sm\\\\:text-decoration-blue-500 {
          --dw-td-color: #3b82f6
        }

        .sm\\\\:text-decoration-blue-600 {
          --dw-td-color: #2563eb
        }

        .sm\\\\:text-decoration-blue-700 {
          --dw-td-color: #1d4ed8
        }

        .sm\\\\:text-decoration-blue-800 {
          --dw-td-color: #1e40af
        }

        .sm\\\\:text-decoration-blue-900 {
          --dw-td-color: #1e3a8a
        }

        .sm\\\\:text-decoration-indigo-50 {
          --dw-td-color: #eef2ff
        }

        .sm\\\\:text-decoration-indigo-100 {
          --dw-td-color: #e0e7ff
        }

        .sm\\\\:text-decoration-indigo-200 {
          --dw-td-color: #c7d2fe
        }

        .sm\\\\:text-decoration-indigo-300 {
          --dw-td-color: #a5b4fc
        }

        .sm\\\\:text-decoration-indigo-400 {
          --dw-td-color: #818cf8
        }

        .sm\\\\:text-decoration-indigo-500 {
          --dw-td-color: #6366f1
        }

        .sm\\\\:text-decoration-indigo-600 {
          --dw-td-color: #4f46e5
        }

        .sm\\\\:text-decoration-indigo-700 {
          --dw-td-color: #4338ca
        }

        .sm\\\\:text-decoration-indigo-800 {
          --dw-td-color: #3730a3
        }

        .sm\\\\:text-decoration-indigo-900 {
          --dw-td-color: #312e81
        }

        .sm\\\\:text-decoration-purple-50 {
          --dw-td-color: #f5f3ff
        }

        .sm\\\\:text-decoration-purple-100 {
          --dw-td-color: #ede9fe
        }

        .sm\\\\:text-decoration-purple-200 {
          --dw-td-color: #ddd6fe
        }

        .sm\\\\:text-decoration-purple-300 {
          --dw-td-color: #c4b5fd
        }

        .sm\\\\:text-decoration-purple-400 {
          --dw-td-color: #a78bfa
        }

        .sm\\\\:text-decoration-purple-500 {
          --dw-td-color: #8b5cf6
        }

        .sm\\\\:text-decoration-purple-600 {
          --dw-td-color: #7c3aed
        }

        .sm\\\\:text-decoration-purple-700 {
          --dw-td-color: #6d28d9
        }

        .sm\\\\:text-decoration-purple-800 {
          --dw-td-color: #5b21b6
        }

        .sm\\\\:text-decoration-purple-900 {
          --dw-td-color: #4c1d95
        }

        .sm\\\\:text-decoration-pink-50 {
          --dw-td-color: #fdf2f8
        }

        .sm\\\\:text-decoration-pink-100 {
          --dw-td-color: #fce7f3
        }

        .sm\\\\:text-decoration-pink-200 {
          --dw-td-color: #fbcfe8
        }

        .sm\\\\:text-decoration-pink-300 {
          --dw-td-color: #f9a8d4
        }

        .sm\\\\:text-decoration-pink-400 {
          --dw-td-color: #f472b6
        }

        .sm\\\\:text-decoration-pink-500 {
          --dw-td-color: #ec4899
        }

        .sm\\\\:text-decoration-pink-600 {
          --dw-td-color: #db2777
        }

        .sm\\\\:text-decoration-pink-700 {
          --dw-td-color: #be185d
        }

        .sm\\\\:text-decoration-pink-800 {
          --dw-td-color: #9d174d
        }

        .sm\\\\:text-decoration-pink-900 {
          --dw-td-color: #831843
        }

        .sm\\\\:text-decoration-1 {
          --dw-td-thickness: 1px
        }

        .sm\\\\:text-decoration-2 {
          --dw-td-thickness: 2px
        }

        .sm\\\\:text-decoration-4 {
          --dw-td-thickness: 4px
        }

        .sm\\\\:text-decoration-8 {
          --dw-td-thickness: 8px
        }
      }

      @media (min-width: 768px) {
        .md\\\\:text-decoration {
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

        .md\\\\:text-decoration-underline {
          --dw-td-underline: underline
        }

        .md\\\\:text-decoration-overline {
          --dw-td-overline: overline
        }

        .md\\\\:text-decoration-line-through {
          --dw-td-line-through: line-through
        }

        .md\\\\:text-decoration-none {
          --dw-td-none: none
        }

        .md\\\\:text-decoration-solid {
          --dw-td-style: solid
        }

        .md\\\\:text-decoration-double {
          --dw-td-style: double
        }

        .md\\\\:text-decoration-dotted {
          --dw-td-style: dotted
        }

        .md\\\\:text-decoration-dashed {
          --dw-td-style: dashed
        }

        .md\\\\:text-decoration-wavy {
          --dw-td-style: wavy
        }

        .md\\\\:text-decoration-initial {
          --dw-td-style: initial
        }

        .md\\\\:text-decoration-inherit {
          --dw-td-style: inherit
        }

        .md\\\\:text-decoration-transparent {
          --dw-td-color: transparent
        }

        .md\\\\:text-decoration-current {
          --dw-td-color: currentColor
        }

        .md\\\\:text-decoration-black {
          --dw-td-color: #000
        }

        .md\\\\:text-decoration-white {
          --dw-td-color: #fff
        }

        .md\\\\:text-decoration-gray-50 {
          --dw-td-color: #f9fafb
        }

        .md\\\\:text-decoration-gray-100 {
          --dw-td-color: #f3f4f6
        }

        .md\\\\:text-decoration-gray-200 {
          --dw-td-color: #e5e7eb
        }

        .md\\\\:text-decoration-gray-300 {
          --dw-td-color: #d1d5db
        }

        .md\\\\:text-decoration-gray-400 {
          --dw-td-color: #9ca3af
        }

        .md\\\\:text-decoration-gray-500 {
          --dw-td-color: #6b7280
        }

        .md\\\\:text-decoration-gray-600 {
          --dw-td-color: #4b5563
        }

        .md\\\\:text-decoration-gray-700 {
          --dw-td-color: #374151
        }

        .md\\\\:text-decoration-gray-800 {
          --dw-td-color: #1f2937
        }

        .md\\\\:text-decoration-gray-900 {
          --dw-td-color: #111827
        }

        .md\\\\:text-decoration-red-50 {
          --dw-td-color: #fef2f2
        }

        .md\\\\:text-decoration-red-100 {
          --dw-td-color: #fee2e2
        }

        .md\\\\:text-decoration-red-200 {
          --dw-td-color: #fecaca
        }

        .md\\\\:text-decoration-red-300 {
          --dw-td-color: #fca5a5
        }

        .md\\\\:text-decoration-red-400 {
          --dw-td-color: #f87171
        }

        .md\\\\:text-decoration-red-500 {
          --dw-td-color: #ef4444
        }

        .md\\\\:text-decoration-red-600 {
          --dw-td-color: #dc2626
        }

        .md\\\\:text-decoration-red-700 {
          --dw-td-color: #b91c1c
        }

        .md\\\\:text-decoration-red-800 {
          --dw-td-color: #991b1b
        }

        .md\\\\:text-decoration-red-900 {
          --dw-td-color: #7f1d1d
        }

        .md\\\\:text-decoration-yellow-50 {
          --dw-td-color: #fffbeb
        }

        .md\\\\:text-decoration-yellow-100 {
          --dw-td-color: #fef3c7
        }

        .md\\\\:text-decoration-yellow-200 {
          --dw-td-color: #fde68a
        }

        .md\\\\:text-decoration-yellow-300 {
          --dw-td-color: #fcd34d
        }

        .md\\\\:text-decoration-yellow-400 {
          --dw-td-color: #fbbf24
        }

        .md\\\\:text-decoration-yellow-500 {
          --dw-td-color: #f59e0b
        }

        .md\\\\:text-decoration-yellow-600 {
          --dw-td-color: #d97706
        }

        .md\\\\:text-decoration-yellow-700 {
          --dw-td-color: #b45309
        }

        .md\\\\:text-decoration-yellow-800 {
          --dw-td-color: #92400e
        }

        .md\\\\:text-decoration-yellow-900 {
          --dw-td-color: #78350f
        }

        .md\\\\:text-decoration-green-50 {
          --dw-td-color: #ecfdf5
        }

        .md\\\\:text-decoration-green-100 {
          --dw-td-color: #d1fae5
        }

        .md\\\\:text-decoration-green-200 {
          --dw-td-color: #a7f3d0
        }

        .md\\\\:text-decoration-green-300 {
          --dw-td-color: #6ee7b7
        }

        .md\\\\:text-decoration-green-400 {
          --dw-td-color: #34d399
        }

        .md\\\\:text-decoration-green-500 {
          --dw-td-color: #10b981
        }

        .md\\\\:text-decoration-green-600 {
          --dw-td-color: #059669
        }

        .md\\\\:text-decoration-green-700 {
          --dw-td-color: #047857
        }

        .md\\\\:text-decoration-green-800 {
          --dw-td-color: #065f46
        }

        .md\\\\:text-decoration-green-900 {
          --dw-td-color: #064e3b
        }

        .md\\\\:text-decoration-blue-50 {
          --dw-td-color: #eff6ff
        }

        .md\\\\:text-decoration-blue-100 {
          --dw-td-color: #dbeafe
        }

        .md\\\\:text-decoration-blue-200 {
          --dw-td-color: #bfdbfe
        }

        .md\\\\:text-decoration-blue-300 {
          --dw-td-color: #93c5fd
        }

        .md\\\\:text-decoration-blue-400 {
          --dw-td-color: #60a5fa
        }

        .md\\\\:text-decoration-blue-500 {
          --dw-td-color: #3b82f6
        }

        .md\\\\:text-decoration-blue-600 {
          --dw-td-color: #2563eb
        }

        .md\\\\:text-decoration-blue-700 {
          --dw-td-color: #1d4ed8
        }

        .md\\\\:text-decoration-blue-800 {
          --dw-td-color: #1e40af
        }

        .md\\\\:text-decoration-blue-900 {
          --dw-td-color: #1e3a8a
        }

        .md\\\\:text-decoration-indigo-50 {
          --dw-td-color: #eef2ff
        }

        .md\\\\:text-decoration-indigo-100 {
          --dw-td-color: #e0e7ff
        }

        .md\\\\:text-decoration-indigo-200 {
          --dw-td-color: #c7d2fe
        }

        .md\\\\:text-decoration-indigo-300 {
          --dw-td-color: #a5b4fc
        }

        .md\\\\:text-decoration-indigo-400 {
          --dw-td-color: #818cf8
        }

        .md\\\\:text-decoration-indigo-500 {
          --dw-td-color: #6366f1
        }

        .md\\\\:text-decoration-indigo-600 {
          --dw-td-color: #4f46e5
        }

        .md\\\\:text-decoration-indigo-700 {
          --dw-td-color: #4338ca
        }

        .md\\\\:text-decoration-indigo-800 {
          --dw-td-color: #3730a3
        }

        .md\\\\:text-decoration-indigo-900 {
          --dw-td-color: #312e81
        }

        .md\\\\:text-decoration-purple-50 {
          --dw-td-color: #f5f3ff
        }

        .md\\\\:text-decoration-purple-100 {
          --dw-td-color: #ede9fe
        }

        .md\\\\:text-decoration-purple-200 {
          --dw-td-color: #ddd6fe
        }

        .md\\\\:text-decoration-purple-300 {
          --dw-td-color: #c4b5fd
        }

        .md\\\\:text-decoration-purple-400 {
          --dw-td-color: #a78bfa
        }

        .md\\\\:text-decoration-purple-500 {
          --dw-td-color: #8b5cf6
        }

        .md\\\\:text-decoration-purple-600 {
          --dw-td-color: #7c3aed
        }

        .md\\\\:text-decoration-purple-700 {
          --dw-td-color: #6d28d9
        }

        .md\\\\:text-decoration-purple-800 {
          --dw-td-color: #5b21b6
        }

        .md\\\\:text-decoration-purple-900 {
          --dw-td-color: #4c1d95
        }

        .md\\\\:text-decoration-pink-50 {
          --dw-td-color: #fdf2f8
        }

        .md\\\\:text-decoration-pink-100 {
          --dw-td-color: #fce7f3
        }

        .md\\\\:text-decoration-pink-200 {
          --dw-td-color: #fbcfe8
        }

        .md\\\\:text-decoration-pink-300 {
          --dw-td-color: #f9a8d4
        }

        .md\\\\:text-decoration-pink-400 {
          --dw-td-color: #f472b6
        }

        .md\\\\:text-decoration-pink-500 {
          --dw-td-color: #ec4899
        }

        .md\\\\:text-decoration-pink-600 {
          --dw-td-color: #db2777
        }

        .md\\\\:text-decoration-pink-700 {
          --dw-td-color: #be185d
        }

        .md\\\\:text-decoration-pink-800 {
          --dw-td-color: #9d174d
        }

        .md\\\\:text-decoration-pink-900 {
          --dw-td-color: #831843
        }

        .md\\\\:text-decoration-1 {
          --dw-td-thickness: 1px
        }

        .md\\\\:text-decoration-2 {
          --dw-td-thickness: 2px
        }

        .md\\\\:text-decoration-4 {
          --dw-td-thickness: 4px
        }

        .md\\\\:text-decoration-8 {
          --dw-td-thickness: 8px
        }
      }

      @media (min-width: 1024px) {
        .lg\\\\:text-decoration {
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

        .lg\\\\:text-decoration-underline {
          --dw-td-underline: underline
        }

        .lg\\\\:text-decoration-overline {
          --dw-td-overline: overline
        }

        .lg\\\\:text-decoration-line-through {
          --dw-td-line-through: line-through
        }

        .lg\\\\:text-decoration-none {
          --dw-td-none: none
        }

        .lg\\\\:text-decoration-solid {
          --dw-td-style: solid
        }

        .lg\\\\:text-decoration-double {
          --dw-td-style: double
        }

        .lg\\\\:text-decoration-dotted {
          --dw-td-style: dotted
        }

        .lg\\\\:text-decoration-dashed {
          --dw-td-style: dashed
        }

        .lg\\\\:text-decoration-wavy {
          --dw-td-style: wavy
        }

        .lg\\\\:text-decoration-initial {
          --dw-td-style: initial
        }

        .lg\\\\:text-decoration-inherit {
          --dw-td-style: inherit
        }

        .lg\\\\:text-decoration-transparent {
          --dw-td-color: transparent
        }

        .lg\\\\:text-decoration-current {
          --dw-td-color: currentColor
        }

        .lg\\\\:text-decoration-black {
          --dw-td-color: #000
        }

        .lg\\\\:text-decoration-white {
          --dw-td-color: #fff
        }

        .lg\\\\:text-decoration-gray-50 {
          --dw-td-color: #f9fafb
        }

        .lg\\\\:text-decoration-gray-100 {
          --dw-td-color: #f3f4f6
        }

        .lg\\\\:text-decoration-gray-200 {
          --dw-td-color: #e5e7eb
        }

        .lg\\\\:text-decoration-gray-300 {
          --dw-td-color: #d1d5db
        }

        .lg\\\\:text-decoration-gray-400 {
          --dw-td-color: #9ca3af
        }

        .lg\\\\:text-decoration-gray-500 {
          --dw-td-color: #6b7280
        }

        .lg\\\\:text-decoration-gray-600 {
          --dw-td-color: #4b5563
        }

        .lg\\\\:text-decoration-gray-700 {
          --dw-td-color: #374151
        }

        .lg\\\\:text-decoration-gray-800 {
          --dw-td-color: #1f2937
        }

        .lg\\\\:text-decoration-gray-900 {
          --dw-td-color: #111827
        }

        .lg\\\\:text-decoration-red-50 {
          --dw-td-color: #fef2f2
        }

        .lg\\\\:text-decoration-red-100 {
          --dw-td-color: #fee2e2
        }

        .lg\\\\:text-decoration-red-200 {
          --dw-td-color: #fecaca
        }

        .lg\\\\:text-decoration-red-300 {
          --dw-td-color: #fca5a5
        }

        .lg\\\\:text-decoration-red-400 {
          --dw-td-color: #f87171
        }

        .lg\\\\:text-decoration-red-500 {
          --dw-td-color: #ef4444
        }

        .lg\\\\:text-decoration-red-600 {
          --dw-td-color: #dc2626
        }

        .lg\\\\:text-decoration-red-700 {
          --dw-td-color: #b91c1c
        }

        .lg\\\\:text-decoration-red-800 {
          --dw-td-color: #991b1b
        }

        .lg\\\\:text-decoration-red-900 {
          --dw-td-color: #7f1d1d
        }

        .lg\\\\:text-decoration-yellow-50 {
          --dw-td-color: #fffbeb
        }

        .lg\\\\:text-decoration-yellow-100 {
          --dw-td-color: #fef3c7
        }

        .lg\\\\:text-decoration-yellow-200 {
          --dw-td-color: #fde68a
        }

        .lg\\\\:text-decoration-yellow-300 {
          --dw-td-color: #fcd34d
        }

        .lg\\\\:text-decoration-yellow-400 {
          --dw-td-color: #fbbf24
        }

        .lg\\\\:text-decoration-yellow-500 {
          --dw-td-color: #f59e0b
        }

        .lg\\\\:text-decoration-yellow-600 {
          --dw-td-color: #d97706
        }

        .lg\\\\:text-decoration-yellow-700 {
          --dw-td-color: #b45309
        }

        .lg\\\\:text-decoration-yellow-800 {
          --dw-td-color: #92400e
        }

        .lg\\\\:text-decoration-yellow-900 {
          --dw-td-color: #78350f
        }

        .lg\\\\:text-decoration-green-50 {
          --dw-td-color: #ecfdf5
        }

        .lg\\\\:text-decoration-green-100 {
          --dw-td-color: #d1fae5
        }

        .lg\\\\:text-decoration-green-200 {
          --dw-td-color: #a7f3d0
        }

        .lg\\\\:text-decoration-green-300 {
          --dw-td-color: #6ee7b7
        }

        .lg\\\\:text-decoration-green-400 {
          --dw-td-color: #34d399
        }

        .lg\\\\:text-decoration-green-500 {
          --dw-td-color: #10b981
        }

        .lg\\\\:text-decoration-green-600 {
          --dw-td-color: #059669
        }

        .lg\\\\:text-decoration-green-700 {
          --dw-td-color: #047857
        }

        .lg\\\\:text-decoration-green-800 {
          --dw-td-color: #065f46
        }

        .lg\\\\:text-decoration-green-900 {
          --dw-td-color: #064e3b
        }

        .lg\\\\:text-decoration-blue-50 {
          --dw-td-color: #eff6ff
        }

        .lg\\\\:text-decoration-blue-100 {
          --dw-td-color: #dbeafe
        }

        .lg\\\\:text-decoration-blue-200 {
          --dw-td-color: #bfdbfe
        }

        .lg\\\\:text-decoration-blue-300 {
          --dw-td-color: #93c5fd
        }

        .lg\\\\:text-decoration-blue-400 {
          --dw-td-color: #60a5fa
        }

        .lg\\\\:text-decoration-blue-500 {
          --dw-td-color: #3b82f6
        }

        .lg\\\\:text-decoration-blue-600 {
          --dw-td-color: #2563eb
        }

        .lg\\\\:text-decoration-blue-700 {
          --dw-td-color: #1d4ed8
        }

        .lg\\\\:text-decoration-blue-800 {
          --dw-td-color: #1e40af
        }

        .lg\\\\:text-decoration-blue-900 {
          --dw-td-color: #1e3a8a
        }

        .lg\\\\:text-decoration-indigo-50 {
          --dw-td-color: #eef2ff
        }

        .lg\\\\:text-decoration-indigo-100 {
          --dw-td-color: #e0e7ff
        }

        .lg\\\\:text-decoration-indigo-200 {
          --dw-td-color: #c7d2fe
        }

        .lg\\\\:text-decoration-indigo-300 {
          --dw-td-color: #a5b4fc
        }

        .lg\\\\:text-decoration-indigo-400 {
          --dw-td-color: #818cf8
        }

        .lg\\\\:text-decoration-indigo-500 {
          --dw-td-color: #6366f1
        }

        .lg\\\\:text-decoration-indigo-600 {
          --dw-td-color: #4f46e5
        }

        .lg\\\\:text-decoration-indigo-700 {
          --dw-td-color: #4338ca
        }

        .lg\\\\:text-decoration-indigo-800 {
          --dw-td-color: #3730a3
        }

        .lg\\\\:text-decoration-indigo-900 {
          --dw-td-color: #312e81
        }

        .lg\\\\:text-decoration-purple-50 {
          --dw-td-color: #f5f3ff
        }

        .lg\\\\:text-decoration-purple-100 {
          --dw-td-color: #ede9fe
        }

        .lg\\\\:text-decoration-purple-200 {
          --dw-td-color: #ddd6fe
        }

        .lg\\\\:text-decoration-purple-300 {
          --dw-td-color: #c4b5fd
        }

        .lg\\\\:text-decoration-purple-400 {
          --dw-td-color: #a78bfa
        }

        .lg\\\\:text-decoration-purple-500 {
          --dw-td-color: #8b5cf6
        }

        .lg\\\\:text-decoration-purple-600 {
          --dw-td-color: #7c3aed
        }

        .lg\\\\:text-decoration-purple-700 {
          --dw-td-color: #6d28d9
        }

        .lg\\\\:text-decoration-purple-800 {
          --dw-td-color: #5b21b6
        }

        .lg\\\\:text-decoration-purple-900 {
          --dw-td-color: #4c1d95
        }

        .lg\\\\:text-decoration-pink-50 {
          --dw-td-color: #fdf2f8
        }

        .lg\\\\:text-decoration-pink-100 {
          --dw-td-color: #fce7f3
        }

        .lg\\\\:text-decoration-pink-200 {
          --dw-td-color: #fbcfe8
        }

        .lg\\\\:text-decoration-pink-300 {
          --dw-td-color: #f9a8d4
        }

        .lg\\\\:text-decoration-pink-400 {
          --dw-td-color: #f472b6
        }

        .lg\\\\:text-decoration-pink-500 {
          --dw-td-color: #ec4899
        }

        .lg\\\\:text-decoration-pink-600 {
          --dw-td-color: #db2777
        }

        .lg\\\\:text-decoration-pink-700 {
          --dw-td-color: #be185d
        }

        .lg\\\\:text-decoration-pink-800 {
          --dw-td-color: #9d174d
        }

        .lg\\\\:text-decoration-pink-900 {
          --dw-td-color: #831843
        }

        .lg\\\\:text-decoration-1 {
          --dw-td-thickness: 1px
        }

        .lg\\\\:text-decoration-2 {
          --dw-td-thickness: 2px
        }

        .lg\\\\:text-decoration-4 {
          --dw-td-thickness: 4px
        }

        .lg\\\\:text-decoration-8 {
          --dw-td-thickness: 8px
        }
      }

      @media (min-width: 1280px) {
        .xl\\\\:text-decoration {
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

        .xl\\\\:text-decoration-underline {
          --dw-td-underline: underline
        }

        .xl\\\\:text-decoration-overline {
          --dw-td-overline: overline
        }

        .xl\\\\:text-decoration-line-through {
          --dw-td-line-through: line-through
        }

        .xl\\\\:text-decoration-none {
          --dw-td-none: none
        }

        .xl\\\\:text-decoration-solid {
          --dw-td-style: solid
        }

        .xl\\\\:text-decoration-double {
          --dw-td-style: double
        }

        .xl\\\\:text-decoration-dotted {
          --dw-td-style: dotted
        }

        .xl\\\\:text-decoration-dashed {
          --dw-td-style: dashed
        }

        .xl\\\\:text-decoration-wavy {
          --dw-td-style: wavy
        }

        .xl\\\\:text-decoration-initial {
          --dw-td-style: initial
        }

        .xl\\\\:text-decoration-inherit {
          --dw-td-style: inherit
        }

        .xl\\\\:text-decoration-transparent {
          --dw-td-color: transparent
        }

        .xl\\\\:text-decoration-current {
          --dw-td-color: currentColor
        }

        .xl\\\\:text-decoration-black {
          --dw-td-color: #000
        }

        .xl\\\\:text-decoration-white {
          --dw-td-color: #fff
        }

        .xl\\\\:text-decoration-gray-50 {
          --dw-td-color: #f9fafb
        }

        .xl\\\\:text-decoration-gray-100 {
          --dw-td-color: #f3f4f6
        }

        .xl\\\\:text-decoration-gray-200 {
          --dw-td-color: #e5e7eb
        }

        .xl\\\\:text-decoration-gray-300 {
          --dw-td-color: #d1d5db
        }

        .xl\\\\:text-decoration-gray-400 {
          --dw-td-color: #9ca3af
        }

        .xl\\\\:text-decoration-gray-500 {
          --dw-td-color: #6b7280
        }

        .xl\\\\:text-decoration-gray-600 {
          --dw-td-color: #4b5563
        }

        .xl\\\\:text-decoration-gray-700 {
          --dw-td-color: #374151
        }

        .xl\\\\:text-decoration-gray-800 {
          --dw-td-color: #1f2937
        }

        .xl\\\\:text-decoration-gray-900 {
          --dw-td-color: #111827
        }

        .xl\\\\:text-decoration-red-50 {
          --dw-td-color: #fef2f2
        }

        .xl\\\\:text-decoration-red-100 {
          --dw-td-color: #fee2e2
        }

        .xl\\\\:text-decoration-red-200 {
          --dw-td-color: #fecaca
        }

        .xl\\\\:text-decoration-red-300 {
          --dw-td-color: #fca5a5
        }

        .xl\\\\:text-decoration-red-400 {
          --dw-td-color: #f87171
        }

        .xl\\\\:text-decoration-red-500 {
          --dw-td-color: #ef4444
        }

        .xl\\\\:text-decoration-red-600 {
          --dw-td-color: #dc2626
        }

        .xl\\\\:text-decoration-red-700 {
          --dw-td-color: #b91c1c
        }

        .xl\\\\:text-decoration-red-800 {
          --dw-td-color: #991b1b
        }

        .xl\\\\:text-decoration-red-900 {
          --dw-td-color: #7f1d1d
        }

        .xl\\\\:text-decoration-yellow-50 {
          --dw-td-color: #fffbeb
        }

        .xl\\\\:text-decoration-yellow-100 {
          --dw-td-color: #fef3c7
        }

        .xl\\\\:text-decoration-yellow-200 {
          --dw-td-color: #fde68a
        }

        .xl\\\\:text-decoration-yellow-300 {
          --dw-td-color: #fcd34d
        }

        .xl\\\\:text-decoration-yellow-400 {
          --dw-td-color: #fbbf24
        }

        .xl\\\\:text-decoration-yellow-500 {
          --dw-td-color: #f59e0b
        }

        .xl\\\\:text-decoration-yellow-600 {
          --dw-td-color: #d97706
        }

        .xl\\\\:text-decoration-yellow-700 {
          --dw-td-color: #b45309
        }

        .xl\\\\:text-decoration-yellow-800 {
          --dw-td-color: #92400e
        }

        .xl\\\\:text-decoration-yellow-900 {
          --dw-td-color: #78350f
        }

        .xl\\\\:text-decoration-green-50 {
          --dw-td-color: #ecfdf5
        }

        .xl\\\\:text-decoration-green-100 {
          --dw-td-color: #d1fae5
        }

        .xl\\\\:text-decoration-green-200 {
          --dw-td-color: #a7f3d0
        }

        .xl\\\\:text-decoration-green-300 {
          --dw-td-color: #6ee7b7
        }

        .xl\\\\:text-decoration-green-400 {
          --dw-td-color: #34d399
        }

        .xl\\\\:text-decoration-green-500 {
          --dw-td-color: #10b981
        }

        .xl\\\\:text-decoration-green-600 {
          --dw-td-color: #059669
        }

        .xl\\\\:text-decoration-green-700 {
          --dw-td-color: #047857
        }

        .xl\\\\:text-decoration-green-800 {
          --dw-td-color: #065f46
        }

        .xl\\\\:text-decoration-green-900 {
          --dw-td-color: #064e3b
        }

        .xl\\\\:text-decoration-blue-50 {
          --dw-td-color: #eff6ff
        }

        .xl\\\\:text-decoration-blue-100 {
          --dw-td-color: #dbeafe
        }

        .xl\\\\:text-decoration-blue-200 {
          --dw-td-color: #bfdbfe
        }

        .xl\\\\:text-decoration-blue-300 {
          --dw-td-color: #93c5fd
        }

        .xl\\\\:text-decoration-blue-400 {
          --dw-td-color: #60a5fa
        }

        .xl\\\\:text-decoration-blue-500 {
          --dw-td-color: #3b82f6
        }

        .xl\\\\:text-decoration-blue-600 {
          --dw-td-color: #2563eb
        }

        .xl\\\\:text-decoration-blue-700 {
          --dw-td-color: #1d4ed8
        }

        .xl\\\\:text-decoration-blue-800 {
          --dw-td-color: #1e40af
        }

        .xl\\\\:text-decoration-blue-900 {
          --dw-td-color: #1e3a8a
        }

        .xl\\\\:text-decoration-indigo-50 {
          --dw-td-color: #eef2ff
        }

        .xl\\\\:text-decoration-indigo-100 {
          --dw-td-color: #e0e7ff
        }

        .xl\\\\:text-decoration-indigo-200 {
          --dw-td-color: #c7d2fe
        }

        .xl\\\\:text-decoration-indigo-300 {
          --dw-td-color: #a5b4fc
        }

        .xl\\\\:text-decoration-indigo-400 {
          --dw-td-color: #818cf8
        }

        .xl\\\\:text-decoration-indigo-500 {
          --dw-td-color: #6366f1
        }

        .xl\\\\:text-decoration-indigo-600 {
          --dw-td-color: #4f46e5
        }

        .xl\\\\:text-decoration-indigo-700 {
          --dw-td-color: #4338ca
        }

        .xl\\\\:text-decoration-indigo-800 {
          --dw-td-color: #3730a3
        }

        .xl\\\\:text-decoration-indigo-900 {
          --dw-td-color: #312e81
        }

        .xl\\\\:text-decoration-purple-50 {
          --dw-td-color: #f5f3ff
        }

        .xl\\\\:text-decoration-purple-100 {
          --dw-td-color: #ede9fe
        }

        .xl\\\\:text-decoration-purple-200 {
          --dw-td-color: #ddd6fe
        }

        .xl\\\\:text-decoration-purple-300 {
          --dw-td-color: #c4b5fd
        }

        .xl\\\\:text-decoration-purple-400 {
          --dw-td-color: #a78bfa
        }

        .xl\\\\:text-decoration-purple-500 {
          --dw-td-color: #8b5cf6
        }

        .xl\\\\:text-decoration-purple-600 {
          --dw-td-color: #7c3aed
        }

        .xl\\\\:text-decoration-purple-700 {
          --dw-td-color: #6d28d9
        }

        .xl\\\\:text-decoration-purple-800 {
          --dw-td-color: #5b21b6
        }

        .xl\\\\:text-decoration-purple-900 {
          --dw-td-color: #4c1d95
        }

        .xl\\\\:text-decoration-pink-50 {
          --dw-td-color: #fdf2f8
        }

        .xl\\\\:text-decoration-pink-100 {
          --dw-td-color: #fce7f3
        }

        .xl\\\\:text-decoration-pink-200 {
          --dw-td-color: #fbcfe8
        }

        .xl\\\\:text-decoration-pink-300 {
          --dw-td-color: #f9a8d4
        }

        .xl\\\\:text-decoration-pink-400 {
          --dw-td-color: #f472b6
        }

        .xl\\\\:text-decoration-pink-500 {
          --dw-td-color: #ec4899
        }

        .xl\\\\:text-decoration-pink-600 {
          --dw-td-color: #db2777
        }

        .xl\\\\:text-decoration-pink-700 {
          --dw-td-color: #be185d
        }

        .xl\\\\:text-decoration-pink-800 {
          --dw-td-color: #9d174d
        }

        .xl\\\\:text-decoration-pink-900 {
          --dw-td-color: #831843
        }

        .xl\\\\:text-decoration-1 {
          --dw-td-thickness: 1px
        }

        .xl\\\\:text-decoration-2 {
          --dw-td-thickness: 2px
        }

        .xl\\\\:text-decoration-4 {
          --dw-td-thickness: 4px
        }

        .xl\\\\:text-decoration-8 {
          --dw-td-thickness: 8px
        }
      }

      @media (min-width: 1536px) {
        .\\\\32xl\\\\:text-decoration {
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

        .\\\\32xl\\\\:text-decoration-underline {
          --dw-td-underline: underline
        }

        .\\\\32xl\\\\:text-decoration-overline {
          --dw-td-overline: overline
        }

        .\\\\32xl\\\\:text-decoration-line-through {
          --dw-td-line-through: line-through
        }

        .\\\\32xl\\\\:text-decoration-none {
          --dw-td-none: none
        }

        .\\\\32xl\\\\:text-decoration-solid {
          --dw-td-style: solid
        }

        .\\\\32xl\\\\:text-decoration-double {
          --dw-td-style: double
        }

        .\\\\32xl\\\\:text-decoration-dotted {
          --dw-td-style: dotted
        }

        .\\\\32xl\\\\:text-decoration-dashed {
          --dw-td-style: dashed
        }

        .\\\\32xl\\\\:text-decoration-wavy {
          --dw-td-style: wavy
        }

        .\\\\32xl\\\\:text-decoration-initial {
          --dw-td-style: initial
        }

        .\\\\32xl\\\\:text-decoration-inherit {
          --dw-td-style: inherit
        }

        .\\\\32xl\\\\:text-decoration-transparent {
          --dw-td-color: transparent
        }

        .\\\\32xl\\\\:text-decoration-current {
          --dw-td-color: currentColor
        }

        .\\\\32xl\\\\:text-decoration-black {
          --dw-td-color: #000
        }

        .\\\\32xl\\\\:text-decoration-white {
          --dw-td-color: #fff
        }

        .\\\\32xl\\\\:text-decoration-gray-50 {
          --dw-td-color: #f9fafb
        }

        .\\\\32xl\\\\:text-decoration-gray-100 {
          --dw-td-color: #f3f4f6
        }

        .\\\\32xl\\\\:text-decoration-gray-200 {
          --dw-td-color: #e5e7eb
        }

        .\\\\32xl\\\\:text-decoration-gray-300 {
          --dw-td-color: #d1d5db
        }

        .\\\\32xl\\\\:text-decoration-gray-400 {
          --dw-td-color: #9ca3af
        }

        .\\\\32xl\\\\:text-decoration-gray-500 {
          --dw-td-color: #6b7280
        }

        .\\\\32xl\\\\:text-decoration-gray-600 {
          --dw-td-color: #4b5563
        }

        .\\\\32xl\\\\:text-decoration-gray-700 {
          --dw-td-color: #374151
        }

        .\\\\32xl\\\\:text-decoration-gray-800 {
          --dw-td-color: #1f2937
        }

        .\\\\32xl\\\\:text-decoration-gray-900 {
          --dw-td-color: #111827
        }

        .\\\\32xl\\\\:text-decoration-red-50 {
          --dw-td-color: #fef2f2
        }

        .\\\\32xl\\\\:text-decoration-red-100 {
          --dw-td-color: #fee2e2
        }

        .\\\\32xl\\\\:text-decoration-red-200 {
          --dw-td-color: #fecaca
        }

        .\\\\32xl\\\\:text-decoration-red-300 {
          --dw-td-color: #fca5a5
        }

        .\\\\32xl\\\\:text-decoration-red-400 {
          --dw-td-color: #f87171
        }

        .\\\\32xl\\\\:text-decoration-red-500 {
          --dw-td-color: #ef4444
        }

        .\\\\32xl\\\\:text-decoration-red-600 {
          --dw-td-color: #dc2626
        }

        .\\\\32xl\\\\:text-decoration-red-700 {
          --dw-td-color: #b91c1c
        }

        .\\\\32xl\\\\:text-decoration-red-800 {
          --dw-td-color: #991b1b
        }

        .\\\\32xl\\\\:text-decoration-red-900 {
          --dw-td-color: #7f1d1d
        }

        .\\\\32xl\\\\:text-decoration-yellow-50 {
          --dw-td-color: #fffbeb
        }

        .\\\\32xl\\\\:text-decoration-yellow-100 {
          --dw-td-color: #fef3c7
        }

        .\\\\32xl\\\\:text-decoration-yellow-200 {
          --dw-td-color: #fde68a
        }

        .\\\\32xl\\\\:text-decoration-yellow-300 {
          --dw-td-color: #fcd34d
        }

        .\\\\32xl\\\\:text-decoration-yellow-400 {
          --dw-td-color: #fbbf24
        }

        .\\\\32xl\\\\:text-decoration-yellow-500 {
          --dw-td-color: #f59e0b
        }

        .\\\\32xl\\\\:text-decoration-yellow-600 {
          --dw-td-color: #d97706
        }

        .\\\\32xl\\\\:text-decoration-yellow-700 {
          --dw-td-color: #b45309
        }

        .\\\\32xl\\\\:text-decoration-yellow-800 {
          --dw-td-color: #92400e
        }

        .\\\\32xl\\\\:text-decoration-yellow-900 {
          --dw-td-color: #78350f
        }

        .\\\\32xl\\\\:text-decoration-green-50 {
          --dw-td-color: #ecfdf5
        }

        .\\\\32xl\\\\:text-decoration-green-100 {
          --dw-td-color: #d1fae5
        }

        .\\\\32xl\\\\:text-decoration-green-200 {
          --dw-td-color: #a7f3d0
        }

        .\\\\32xl\\\\:text-decoration-green-300 {
          --dw-td-color: #6ee7b7
        }

        .\\\\32xl\\\\:text-decoration-green-400 {
          --dw-td-color: #34d399
        }

        .\\\\32xl\\\\:text-decoration-green-500 {
          --dw-td-color: #10b981
        }

        .\\\\32xl\\\\:text-decoration-green-600 {
          --dw-td-color: #059669
        }

        .\\\\32xl\\\\:text-decoration-green-700 {
          --dw-td-color: #047857
        }

        .\\\\32xl\\\\:text-decoration-green-800 {
          --dw-td-color: #065f46
        }

        .\\\\32xl\\\\:text-decoration-green-900 {
          --dw-td-color: #064e3b
        }

        .\\\\32xl\\\\:text-decoration-blue-50 {
          --dw-td-color: #eff6ff
        }

        .\\\\32xl\\\\:text-decoration-blue-100 {
          --dw-td-color: #dbeafe
        }

        .\\\\32xl\\\\:text-decoration-blue-200 {
          --dw-td-color: #bfdbfe
        }

        .\\\\32xl\\\\:text-decoration-blue-300 {
          --dw-td-color: #93c5fd
        }

        .\\\\32xl\\\\:text-decoration-blue-400 {
          --dw-td-color: #60a5fa
        }

        .\\\\32xl\\\\:text-decoration-blue-500 {
          --dw-td-color: #3b82f6
        }

        .\\\\32xl\\\\:text-decoration-blue-600 {
          --dw-td-color: #2563eb
        }

        .\\\\32xl\\\\:text-decoration-blue-700 {
          --dw-td-color: #1d4ed8
        }

        .\\\\32xl\\\\:text-decoration-blue-800 {
          --dw-td-color: #1e40af
        }

        .\\\\32xl\\\\:text-decoration-blue-900 {
          --dw-td-color: #1e3a8a
        }

        .\\\\32xl\\\\:text-decoration-indigo-50 {
          --dw-td-color: #eef2ff
        }

        .\\\\32xl\\\\:text-decoration-indigo-100 {
          --dw-td-color: #e0e7ff
        }

        .\\\\32xl\\\\:text-decoration-indigo-200 {
          --dw-td-color: #c7d2fe
        }

        .\\\\32xl\\\\:text-decoration-indigo-300 {
          --dw-td-color: #a5b4fc
        }

        .\\\\32xl\\\\:text-decoration-indigo-400 {
          --dw-td-color: #818cf8
        }

        .\\\\32xl\\\\:text-decoration-indigo-500 {
          --dw-td-color: #6366f1
        }

        .\\\\32xl\\\\:text-decoration-indigo-600 {
          --dw-td-color: #4f46e5
        }

        .\\\\32xl\\\\:text-decoration-indigo-700 {
          --dw-td-color: #4338ca
        }

        .\\\\32xl\\\\:text-decoration-indigo-800 {
          --dw-td-color: #3730a3
        }

        .\\\\32xl\\\\:text-decoration-indigo-900 {
          --dw-td-color: #312e81
        }

        .\\\\32xl\\\\:text-decoration-purple-50 {
          --dw-td-color: #f5f3ff
        }

        .\\\\32xl\\\\:text-decoration-purple-100 {
          --dw-td-color: #ede9fe
        }

        .\\\\32xl\\\\:text-decoration-purple-200 {
          --dw-td-color: #ddd6fe
        }

        .\\\\32xl\\\\:text-decoration-purple-300 {
          --dw-td-color: #c4b5fd
        }

        .\\\\32xl\\\\:text-decoration-purple-400 {
          --dw-td-color: #a78bfa
        }

        .\\\\32xl\\\\:text-decoration-purple-500 {
          --dw-td-color: #8b5cf6
        }

        .\\\\32xl\\\\:text-decoration-purple-600 {
          --dw-td-color: #7c3aed
        }

        .\\\\32xl\\\\:text-decoration-purple-700 {
          --dw-td-color: #6d28d9
        }

        .\\\\32xl\\\\:text-decoration-purple-800 {
          --dw-td-color: #5b21b6
        }

        .\\\\32xl\\\\:text-decoration-purple-900 {
          --dw-td-color: #4c1d95
        }

        .\\\\32xl\\\\:text-decoration-pink-50 {
          --dw-td-color: #fdf2f8
        }

        .\\\\32xl\\\\:text-decoration-pink-100 {
          --dw-td-color: #fce7f3
        }

        .\\\\32xl\\\\:text-decoration-pink-200 {
          --dw-td-color: #fbcfe8
        }

        .\\\\32xl\\\\:text-decoration-pink-300 {
          --dw-td-color: #f9a8d4
        }

        .\\\\32xl\\\\:text-decoration-pink-400 {
          --dw-td-color: #f472b6
        }

        .\\\\32xl\\\\:text-decoration-pink-500 {
          --dw-td-color: #ec4899
        }

        .\\\\32xl\\\\:text-decoration-pink-600 {
          --dw-td-color: #db2777
        }

        .\\\\32xl\\\\:text-decoration-pink-700 {
          --dw-td-color: #be185d
        }

        .\\\\32xl\\\\:text-decoration-pink-800 {
          --dw-td-color: #9d174d
        }

        .\\\\32xl\\\\:text-decoration-pink-900 {
          --dw-td-color: #831843
        }

        .\\\\32xl\\\\:text-decoration-1 {
          --dw-td-thickness: 1px
        }

        .\\\\32xl\\\\:text-decoration-2 {
          --dw-td-thickness: 2px
        }

        .\\\\32xl\\\\:text-decoration-4 {
          --dw-td-thickness: 4px
        }

        .\\\\32xl\\\\:text-decoration-8 {
          --dw-td-thickness: 8px
        }
      }"
    `);
  });
});

xdescribe('Theme configuration tests', () => {
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
});

describe('Variant configuration test', () => {
  test('textDecorationPlugin variant utilities are generated', async () => {
    const screens = {
      'sm': '100px',
      'md': '200px',
      'lg': '300px',
      'xl': '400px',
      '2xl': '500px'
    };
    const utilities = await generateTailwindCss({
      theme: {
        extend: {
          screens
        }
      },
      variants: {
        extend: {
          textDecorationPlugin: ['dark', 'hover', 'responsive'],
        },
      },
      darkMode: 'class',
    } as any);

    // function onlyUnique(value:any, index:any, self:any) {
    //   return self.indexOf(value) === index;
    // }

    // console.log({nodes: utilities.root.nodes.map((r:any) => r.type).filter(onlyUnique)})
    console.log({nodes: utilities.root.nodes.filter((r:any) => r.type === 'atrule')})

    let atRules = utilities.root.nodes
      .filter((node:any) => node.type === 'atrule')
      .map((node: any) => node.params)

    expect(atRules).toMatchObject(Object.values(screens).map(width => `(min-width: ${width})`))

    // console.log({ selectors: utilities.root.nodes
    //   .filter((r: any) => r?.selector?.includes('hover'))
    //   .map((r:any) => r.selector)})

    
  }
)});
