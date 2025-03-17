import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    TourModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
