
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],// chỉ dùng để nhận module
  controllers: [UserController],
  providers: [UserService],// chỉ dùng để nhận service, repository
})
export class UserModule {}
