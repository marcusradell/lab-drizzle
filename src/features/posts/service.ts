import { Repository } from "./repository";
import { GetUsers } from "./types";

export const createService = (repository: Repository, getUsers: GetUsers) => {
  const getPostsCount = async (
    page = 1,
    pageSize = 5
  ): Promise<
    Array<{
      postsCount: number;
      id: number;
      name: string;
      age: number;
      email: string;
    }>
  > => {
    const users = await getUsers(page, pageSize);
    const userIds = users.map(({ id }) => id);

    const postsCounts = await repository.getPostsCount(userIds);

    const result = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        age: user.age,
        email: user.email,
        postsCount:
          postsCounts.find((postsCount) => postsCount.userId === user.id)
            ?.postsCount ?? 0,
      };
    });

    return result;
  };

  return { getPostsCount };
};
