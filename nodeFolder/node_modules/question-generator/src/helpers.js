const sanitize = input => {
  let result = input;
  result = toLowerCase(result);
  result = trimString(result);

  return result;
};

export const toLowerCase = input => input.toLowerCase();
export const trimString = input => input.trim();

export default sanitize;
