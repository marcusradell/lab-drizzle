import { UserId } from "../types";
import { createService } from "./service";

export type PostsCount = {
  postsCount: number;
  id: UserId;
  name: string;
  age: number;
  email: string;
};

export type GetUsers = (
  page: number,
  pageSize: number
) => Promise<
  {
    id: UserId;
    name: string;
    age: number;
    email: string;
  }[]
>;

export type Service = ReturnType<typeof createService>;
