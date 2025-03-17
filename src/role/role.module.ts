
import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [],// chỉ dùng để nhận module
  controllers: [RoleController],
  providers: [RoleService],// chỉ dùng để nhận service, repository
})
export class RoleModule {}
