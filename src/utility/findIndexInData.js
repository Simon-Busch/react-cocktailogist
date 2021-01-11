  //find index
export const findIndexInData = (data, property, value) => {
  let result = -1;
  data.some((item, i) => {
      if (item[property] === value) {
          result = i;
          return true;
      }
  });
  return result;
}