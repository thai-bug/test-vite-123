export interface IQuery {
  page?: number;
  limit?: number;
  status?: number;
  keyword?: string;
}

export interface IUser {
  id?: string;
  status: number;
  username: string;
  phoneNumber: string;
  isAdmin?: boolean;
}
