/* Contains a value */
export const required = value => (value ? undefined : 'Required');

/* The value is non-empty */
export const nonEmpty = value => value.trim() !== '' ? undefined : 'Cannot be empty';

/* The value any letter or number with some special characters */
// export const validInput = value => ( /[a-z0-9~@#\^\$&\*\(\)-_\+=\[\]\{\}\|\\,.?'"!`%\s]*/i.test(value) ? undefined : 'Must contain valid input. Ok special characters: ~`!@#$%^&*()-_=+{}[];:"/,.?');

// 1234 !@#$%^&*()_+-={}|[]\:",./<>?:" iahds ALIHDB DSFKJH dlihfe 20389lkdflkj `~
// eslint-disable-next-line
export const validInput = value => ( /[a-z0-9~@#^$&*()-_+=\[\]{\}|,.?'"!`%\s]*]*/i.test(value) ? undefined : 'Must contain valid input. Ok special characters: ~`!@#$%^&*()-_=+{}[];:"/,.?');

export const validURL = value => (/^(http|https):\/\/[^ "]+$/.test(value) ? undefined : 'Must contain a valid url');

//values is returning undefined at this point
// goal is to loop through values.ing and require/non-empty for each ingredient
export const validIngredient = values => ( values ? undefined : console.log('something in ingredients', values));
