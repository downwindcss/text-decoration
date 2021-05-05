import { internalPrefix } from '../constants';

const lineRules = {
  [`.${internalPrefix}underline`]: { '--dw-td-underline': 'underline' },
  [`.${internalPrefix}overline`]: { '--dw-td-overline': 'overline' },
  [`.${internalPrefix}line-through`]: {
    '--dw-td-line-through': 'line-through',
  },
};

export default lineRules;
