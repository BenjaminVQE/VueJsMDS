import fetchData from "./api";

export const getUserById = async (id) => {
  return fetchData(`/users/${id}`);
};
