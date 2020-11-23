//Check for empty field
export const required = (value) => (value ? null : "Обязательное поле");

//Chech email
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Не верный email"
    : null;

//Check max lenght
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Строка более ${max} символов` : null;

//Check min lenght
export const minLength = (min) => (value) =>
  value && value.length < min ? `Строка меньше ${min} символов` : null;

//Check match password
export const matchPassword = (value, allValues) =>
  value !== allValues.password ? "Пароль не совпадает" : null;

export const onlyNums = (value) => value.replace(/[^\d]/g, "");
