import { Module } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import UsersEntity from "./entities/users.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity])
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [TypeOrmModule.forFeature([UsersEntity])]
})
export class AuthModule{ }
