import { v4 } from "uuid";
import { UserId, InsertUser, Repository } from "../repository";
import { UserInput, userSchema } from "./validation";

export const createService = (repository: Repository) => {
  const getUsers = async (page: number, pageSize: number) => {
    return repository.getUsers(page, pageSize);
  };

  const getUserById = async (id: UserId) => {
    return repository.getUserById(id);
  };

  const addUser = async (rawUser: UserInput) => {
    const insertUser = userSchema.parse(rawUser);
    const id = v4();

    return repository.addUser({ ...insertUser, id });
  };

  return { getUsers, getUserById, addUser };
};
