import {Injectable} from '@nestjs/common';
import {IUsers} from "../common/interfaces/users.interface";
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";
import UsersEntity from "./entities/users.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>) {}
  async login(user: IUsers) {
    let userObject: any = await this.usersRepository.findOneBy({email: user.email});
    console.log(user);
    return new Promise((resolve, reject) => {
      compare(user.password, userObject.password, async (err: Error, user: boolean) => {
        if (err) reject(err);
        if(user) {
          let token = sign({...userObject}, 'shhhhhhh');
          resolve({token: token});
        } else {
          reject({message: 'Bad authentication', status: 500});
        }
      });
    });
  }
  async register(user: IUsers): Promise<{message: string; data: IUsers, status: number}> {
    let userObject = await this.usersRepository.save(user);
    return {message: 'New user created', data: userObject, status: 200};
  }
}
