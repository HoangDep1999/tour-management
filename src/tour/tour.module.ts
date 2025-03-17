
import { Module } from '@nestjs/common';
import { TourController } from './tour.controller';
import { TourService } from './tour.service';

@Module({
  imports: [],// chỉ dùng để nhận module
  controllers: [TourController],
  providers: [TourService],// chỉ dùng để nhận service, repository
})
export class TourModule {}
