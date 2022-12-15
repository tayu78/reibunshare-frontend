export interface IUser {
  _id?: string;
  accountName: string;
  username: string;
  email: string;
  password: string;
  img?: string;
  follower?: string[];
  following?: string[];
}
