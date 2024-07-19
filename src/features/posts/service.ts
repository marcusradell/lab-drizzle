import { Repository } from "./repository";

export const createService = (repository: Repository) => {
  const getPostsCount = async (
    userIds: number[]
  ): Promise<
    Array<{
      postsCount: number;
      //   id: number;
      //   name: string;
      //   age: number;
      //   email: string;
    }>
  > => {
    const result = await repository.getPostsCount(userIds);
    return result;
  };

  return { getPostsCount };
};
