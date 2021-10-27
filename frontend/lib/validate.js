export function validate(field, value) {
  if (typeof value === 'string') value = value.trim();
  switch (field) {
    case 'firstname':
      if (value.length < 3) {
        return true;
      } else {
        return false;
      }
    case 'lastname':
      if (value.length < 3) {
        return true;
      } else {
        return false;
      }
    case 'email':
      if (value.length === 0) {
        return true;
      } else if (
        !value.includes('@') ||
        !value.includes('.') ||
        value.split('.')[1].length < 2
      ) {
        return true;
      } else {
        return false;
      }
    default:
      break;
  }
}
