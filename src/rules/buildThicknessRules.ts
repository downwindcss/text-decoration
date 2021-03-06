import { Escape } from '../types';
import { internalPrefix } from '../constants';

const buildThicknessRules = (
  thicknesses: Record<string, string>,
  e: Escape
) => {
  return Object.keys(thicknesses).reduce((result: any, thickness) => {
    const key = `.${e(`${internalPrefix}${thickness}`)}`;
    result[key] = { '--dw-td-thickness': thicknesses[thickness] };
    return result;
  }, {});
};

export default buildThicknessRules;
