let id = 0;

export const getUniqueId = (newToDo) => {
  return id++ + newToDo;
};
