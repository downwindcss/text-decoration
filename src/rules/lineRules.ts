import { internalPrefix } from '../constants';

const lineRules = {
  [`.${internalPrefix}line-underline`]: { '--dw-td-underline': 'underline' },
  [`.${internalPrefix}line-overline`]: { '--dw-td-overline': 'overline' },
  [`.${internalPrefix}line-through`]: {
    '--dw-td-line-through': 'line-through',
  },
};

export default lineRules;
