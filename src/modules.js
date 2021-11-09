export const switchcase = (value, cases, defaultCase) => {
    const valueString = String(value);
    const result = Object.keys(cases).includes(valueString)
      ? cases[valueString]
      : defaultCase;
    return typeof result === 'function' ? result() : result;
  };
  