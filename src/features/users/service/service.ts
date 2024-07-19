import { Id, InsertUser, Repository } from "../repository";
import { userSchema } from "./validation";

export const createService = (repository: Repository) => {
  const getUsers = async (page: number, pageSize: number) => {
    return repository.getUsers(page, pageSize);
  };

  const getUserById = async (id: Id) => {
    return repository.getUserById(id);
  };

  const addUser = async (rawUser: InsertUser) => {
    const user = userSchema.parse(rawUser);

    return repository.addUser(user);
  };

  return { getUsers, getUserById, addUser };
};
