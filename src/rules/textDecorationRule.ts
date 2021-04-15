const textDecorationRule = {
  '.text-decoration': {
    '--dw-td-overline': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-underline': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-line-through': 'var(--tw-empty,/*!*/ /*!*/)',
    '--dw-td-color': 'currentcolor',
    '--dw-td-style': 'initial',
    '--dw-td-thickness': '1px',

    'text-decoration-line': [
      'var(--dw-td-overline)',
      'var(--dw-td-underline)',
      'var(--dw-td-line-through)',
    ].join(' '),

    'text-decoration-color': 'var(--dw-td-color)',
    'text-decoration-style': 'var(--dw-td-style)',
    'text-decoration-thickness': 'var(--dw-td-thickness)',
  },
};

export default textDecorationRule;
