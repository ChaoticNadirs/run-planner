import * as yup from "yup";

const schema = yup.object().shape({
  minutes: yup
    .number()
    .required()
    .positive()
    .integer()
    .max(99),
  seconds: yup
    .number()
    .required()
    .positive()
    .integer()
    .max(59),
  day: yup
    .number()
    .required()
    .positive()
    .integer(),
  month: yup
    .number()
    .required()
    .positive()
    .integer(),
  year: yup
    .number()
    .required()
    .positive()
    .integer(),
  units: yup.string().required()
});

const validate = async item => {
  const errors = [];
  const toValidate = item;
  const date = Date.parse(`${item.year}-${item.month}-${item.day}`);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date)) {
    errors.push("Enter a valid date.");
  }

  try {
    await schema.validate(toValidate, { abortEarly: false });
  } catch (err) {
    return errors.concat(err.errors);
  }

  return errors;
};

export default validate;
