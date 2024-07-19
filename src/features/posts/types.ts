import { createService } from "./service";

export type GetUsers = (
  page: number,
  pageSize: number
) => Promise<
  {
    id: number;
    name: string;
    age: number;
    email: string;
  }[]
>;

export type Service = ReturnType<typeof createService>;
