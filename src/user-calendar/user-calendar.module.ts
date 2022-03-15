import { Module } from '@nestjs/common';
import { UserCalendarService } from './user-calendar.service';
import { UserCalendarController } from './user-calendar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCalendar } from './user-calendar.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserCalendar])],
  providers: [UserCalendarService],
  controllers: [UserCalendarController],
})
export class UserCalendarModule {}
