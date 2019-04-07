export const formatLink = (string) => {
  string = string.toLowerCase()
  .split(' ')
  .join('-');
  
  return string;
}

export const toggleNav = (navRef) => {
  navRef.current.classList.toggle("nav-list--active");
}