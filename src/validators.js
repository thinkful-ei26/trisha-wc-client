/* Contains a value */
export const required = value => (value ? undefined : 'Required');

/* The value is non-empty */
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';

// eslint-disable-next-line
export const validInput = value => ( /[a-z0-9~@#^$&*()-_+=\[\]{\}|,.?'"!`%\s]*]*/i.test(value) ? undefined : 'Must contain valid input. Ok special characters: ~`!@#$%^&*()-_=+{}[];:"/,.?');

export const validURL = value => (/^(http|https):\/\/[^ "]+$/.test(value) ? undefined : 'Must contain a valid url');

//values is returning undefined at this point
// goal is to loop through values.ing and require/non-empty for each ingredient
// export const validIngredient = values => ( values ? undefined : console.log('validating ingredients in progress', values));
