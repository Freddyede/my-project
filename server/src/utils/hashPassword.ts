import {genSalt, hash} from "bcrypt";

export const hashPassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    genSalt(10, (err, salt) => {
      if (err) reject(err);
      hash(password, salt, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      })
    })
  })
}