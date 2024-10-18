export interface IUser {
  id?: string;
  status: number;
  username: string;
  phoneNumber: string;
  isAdmin?: boolean;
}