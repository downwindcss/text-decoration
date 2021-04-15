import { Escape } from '../textDecoration';

const buildThicknessRules = (
  thicknesses: Record<string, string>,
  e: Escape
) => {
  return Object.keys(thicknesses).reduce((result: any, thickness) => {
    const suffix = thickness == 'DEFAULT' ? '' : `-${thickness}`;
    const key = `.${e(`td-thickness${suffix}`)}`;

    result[key] = { '--dw-td-thickness': thicknesses[thickness] };
    return result;
  }, {});
};

export default buildThicknessRules;
