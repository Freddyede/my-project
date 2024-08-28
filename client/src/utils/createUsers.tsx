import {IUser} from "../interface/auth.ts";

export const createUsers = (email: string, password: string): IUser => {
  return {email, password};
}