import { IUser } from "./user";

export interface INotification {
  _id: string;
  //   sendTo: string[];
  sendFrom: IUser;
  content: string;
  //   createdAt: Date;
}
