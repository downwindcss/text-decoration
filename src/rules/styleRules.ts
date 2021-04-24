import { internalPrefix } from '../constants';

const styleRules = {
  [`.${internalPrefix}style-solid`]: { '--dw-td-style': 'solid' },
  [`.${internalPrefix}style-double`]: { '--dw-td-style': 'double' },
  [`.${internalPrefix}style-dotted`]: { '--dw-td-style': 'dotted' },
  [`.${internalPrefix}style-dashed`]: { '--dw-td-style': 'dashed' },
  [`.${internalPrefix}style-wavy`]: { '--dw-td-style': 'wavy' },
  [`.${internalPrefix}style-initial`]: { '--dw-td-style': 'initial' },
  [`.${internalPrefix}style-inherit`]: { '--dw-td-style': 'inherit' },
};

export default styleRules;
