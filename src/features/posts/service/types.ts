import { Id } from "../repository";
import { createService } from "./service";

export type PostsCount = {
  postsCount: number;
  id: Id;
  name: string;
  age: number;
  email: string;
};

export type GetUsers = (
  page: number,
  pageSize: number
) => Promise<
  {
    id: Id;
    name: string;
    age: number;
    email: string;
  }[]
>;

export type Service = ReturnType<typeof createService>;
