// a library having functions for typical input fields validation. Each
// function may require a minimum and a maximum number of input characters
// allowed in the field.

const Validate = {
  // E.g. John Wick, Batman, Ricardo Izecson Dos Santos Leite, V etc.
  asName: (value, minRange, maxRange) =>
    RegExp(`(^[A-Z][a-z]*( [A-Z][a-z]*)*)$`).test(value),

  // e.g anyusernamewithoutspace
  asUsername: (value, minRange, maxRange) =>
    RegExp(`(^[a-z]*){${minRange - 1},${maxRange}}$`).test(value),

  // (not self-coded): RFC2822 email validation pattern (excluding backticks).
  asEmail: (value) =>
    RegExp(
      `[a-z0-9!#$%&'*+/=?^_{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?`
    ).test(value),

  // Pattern having at least a special char, a digit along with
  // an uppercase letter and lower case letter.
  asStrictPassword: (value, minRange, maxRange) =>
    RegExp(
      `((?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&]).{${minRange},${maxRange}})`
    ).test(value),
};

export default Validate;
