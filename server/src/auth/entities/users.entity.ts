import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export default class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique:true, length: 100})
  email: string;
  @Column({type: 'json'})
  roles: string[];
  @Column({type: 'text'})
  password: string;
}