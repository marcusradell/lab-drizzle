import { Repository } from "./repository";

export const createService = (repository: Repository) => {
  const getUsers = async (page: number, pageSize: number) => {
    return repository.getUsers(page, pageSize);
  };

  return { getUsers };
};
