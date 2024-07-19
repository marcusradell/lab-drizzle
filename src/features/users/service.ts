import { Id, InsertUser, Repository } from "./repository";

export const createService = (repository: Repository) => {
  const getUsers = async (page: number, pageSize: number) => {
    return repository.getUsers(page, pageSize);
  };

  const getUserById = async (id: Id) => {
    return repository.getUserById(id);
  };

  const addUser = async (user: InsertUser) => {
    return repository.addUser(user);
  };

  return { getUsers, getUserById, addUser };
};
