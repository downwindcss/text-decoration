import { internalPrefix } from '../constants';

const styleRules = {
  [`.${internalPrefix}solid`]: { '--dw-td-style': 'solid' },
  [`.${internalPrefix}double`]: { '--dw-td-style': 'double' },
  [`.${internalPrefix}dotted`]: { '--dw-td-style': 'dotted' },
  [`.${internalPrefix}dashed`]: { '--dw-td-style': 'dashed' },
  [`.${internalPrefix}wavy`]: { '--dw-td-style': 'wavy' },
  [`.${internalPrefix}initial`]: { '--dw-td-style': 'initial' },
  [`.${internalPrefix}inherit`]: { '--dw-td-style': 'inherit' },
};

export default styleRules;
