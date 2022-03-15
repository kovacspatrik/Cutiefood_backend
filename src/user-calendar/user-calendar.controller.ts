import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserCalendarDto } from './dto/user-calendar.dto';
import { UserCalendarService } from './user-calendar.service';

@Controller('user-calendar')
export class UserCalendarController {
  constructor(private userCalendarService: UserCalendarService) {}

  @Get()
  read() {
    return this.userCalendarService.readAll();
  }

  @Get('user/:id')
  async getUserCalendar(@Param('id') id: number) {
    return await this.userCalendarService.readCalendarByUserId(id);
  }

  @Post('create')
  async create(@Body() data: UserCalendarDto) {
    return this.userCalendarService.create(data);
  }

  @Delete('delete_event/:id')
  async deleteCalendarEvent(@Param('id') id: number) {
    return await this.userCalendarService.deleteFromCalendar(id);
  }
}
