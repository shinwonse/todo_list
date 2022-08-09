export const getUniqueId = () => {
  const id = JSON.parse(localStorage.getItem('ID')) || 0;
  return id++;
};
