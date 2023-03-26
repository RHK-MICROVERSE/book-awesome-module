import { DateTime } from '../node_modules/luxon/src/luxon.js';

//Sun Mar 26 2023 22:37:29 GMT+0600 (Bangladesh Standard Time)
let displayDateTime = () => {
  let dt = DateTime.local(new Date());
  let justhour = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
  let test = dt.toLocaleString(DateTime.DATETIME_FULL)
  let hour_zonetime = dt.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET);
  let result = `${justhour} ${test.slice(-5)} (${hour_zonetime.slice(-25)})`;
  return result;
}

export { displayDateTime };
