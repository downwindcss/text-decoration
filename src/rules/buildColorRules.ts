import { Escape } from '../types';
import { internalPrefix } from '../constants';

// Returns an array of
const buildColorRules = (themeColors: any, e: Escape) =>
  Object.keys(themeColors).reduce((result, themeColorName) => {
    // if color is an object(containing, 50, 100, etc) then,
    //    create an array of objects
    // if color contains a string, then just add it to the result
    const themeColorValue = themeColors[themeColorName];
    const colorContainsMultipleValues = !(typeof themeColorValue === 'string');

    if (colorContainsMultipleValues) {
      Object.keys(themeColorValue).forEach(colorValueName => {
        const key = `.${e(
          `${internalPrefix}${themeColorName}-${colorValueName}`
        )}`;
        const value = { '--dw-td-color': themeColorValue[colorValueName] };
        result[key] = value;
      });
    } else {
      const key = `.${e(`${internalPrefix}${themeColorName}`)}`;
      const value = { '--dw-td-color': themeColorValue };
      result[key] = value;
    }
    return result;
  }, {} as Record<string, { '--dw-td-color': string }>);

export default buildColorRules;
