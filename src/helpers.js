export const formatLink = (string) => {
  string = string.toLowerCase()
  .split(' ')
  .join('-');
  
  return string;
}