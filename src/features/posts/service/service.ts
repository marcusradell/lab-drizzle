import { Repository } from "../repository";
import { GetUsers, PostsCount } from "./types";

export const createService = (repository: Repository, getUsers: GetUsers) => {
  const getPostsCounts = async (
    page = 1,
    pageSize = 5
  ): Promise<PostsCount[]> => {
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

  return { getPostsCounts };
};
