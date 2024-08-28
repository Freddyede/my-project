import {IUser} from "../../interface/auth.ts";

export const handleSubmitForm = (user: IUser, callback: CallableFunction) => callback(user);