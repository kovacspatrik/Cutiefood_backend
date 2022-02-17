import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { create } from 'domain';
import { NotFoundError } from 'rxjs';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  read() {
    return this.userService.readAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const user = await this.userService.readOne(id);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }

  @Post('create')
  async create(@Body() user: UserDto) {
    return this.userService.create(user);
  }

  @Post('login')
  async login(@Body() user: UserDto) {
    const loggedInUser = await this.userService.login(user);
    if (!loggedInUser) {
      throw new BadRequestException('Sikertelen bejelentkezés');
    }

    return loggedInUser;
  }
}
