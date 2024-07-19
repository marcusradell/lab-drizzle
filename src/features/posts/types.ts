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
