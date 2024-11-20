export const formatedDate = () => {
  const monthFormat = { month: "long" };
  const dayFormat = { day: "2-digit" };
  let currentTime = new Date();
  const day = currentTime.toLocaleDateString("default", dayFormat);
  const month = currentTime.toLocaleDateString("default", monthFormat);
  return month.toUpperCase() + " " + day + ",";
};

export const currentDay = () => {
  const dayFormat = { weekday: "long" };
  let currentDate = new Date();
  return currentDate.toLocaleDateString("default", dayFormat);
};
