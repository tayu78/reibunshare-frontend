export const getUserToken = () => {
  const user = JSON.parse(localStorage.getItem("persist:root") as string);
  const { userToken } = JSON.parse(user.user);
  return userToken;
};
