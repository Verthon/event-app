export const formatLink = string => {
  string = string.toLowerCase()
  .split(' ')
  .join('-');
  
  return string;
}

export const toggleNav = navRef => {
  navRef.current.classList.toggle("nav-list--active");
}

export const formatDay = data => {
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  let date = data.toLocaleDateString('en-GB', options);

  // Split string to array of day, month, year
  date = date.split(" ");
  // Reverse array
  date.reverse();
  // Remove year from array
  date.shift();
  // Turn into string in format Month Day
  date = date.join(" ");
  return date;
}

export const filterSearch = (data, query) => {
  const result = data.filter(item => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });
  return result;
}