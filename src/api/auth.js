import fetchData from "./api";

export const getUserById = async () => {
  return fetchData(`/auth`);
};
