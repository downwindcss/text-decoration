const textDecorationRule = {
  '.text-decoration': {
    '--dw-td-overline': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-underline': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-line-through': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-none': 'var(--tw-empty,/*!*/ /*!*/)',

    // Default values from MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration#formal_definition
    '--dw-td-color': 'currentcolor',
    '--dw-td-style': 'initial',
    '--dw-td-thickness': '1px',

    'text-decoration-line': [
      'var(--dw-td-overline)',
      'var(--dw-td-underline)',
      'var(--dw-td-line-through)',
      'var(--dw-td-none)'
    ].join(' '),

    'text-decoration-color': 'var(--dw-td-color)',
    'text-decoration-style': 'var(--dw-td-style)',
    'text-decoration-thickness': 'var(--dw-td-thickness)',
  },
};

export default textDecorationRule;
