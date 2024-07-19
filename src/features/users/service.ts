import { Repository } from "./repository";

export const createService = (repository: Repository) => {
  const getUsers = async (page = 1, pageSize = 5) => {
    return repository.getUsers(page, pageSize);
  };

  return { getUsers };
};
