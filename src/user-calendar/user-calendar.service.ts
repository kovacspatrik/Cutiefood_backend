import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCalendarDto } from './dto/user-calendar.dto';
import { UserCalendar } from './user-calendar.entity';

@Injectable()
export class UserCalendarService {
  constructor(
    @InjectRepository(UserCalendar)
    private userCalendarRepository: Repository<UserCalendar>,
  ) {}

  async create(data: UserCalendarDto) {
    try {
      const recipestoday = this.userCalendarRepository.find({
        where: {
          user: data.user,
          date: data.date,
        },
      });
      if ((await recipestoday).length >= 3) {
        throw new BadRequestException("Can't have more than 3 recipes a day!");
      } else {
        return await this.userCalendarRepository.save(data);
      }
    } catch (e) {
      throw e;
    }
  }

  async readAll() {
    return await this.userCalendarRepository.find({
      relations: ['user', 'recipe'],
    });
  }

  async readCalendarByUserId(id: number) {
    let toReturn: UserCalendar[] = [];
    const res = await this.userCalendarRepository.find({
      where: {
        user: { id: id },
      },
      relations: ['recipe', 'recipe.ingredients'],
    });
    return res;
  }

  async deleteFromCalendar(id: number) {
    try {
      await this.userCalendarRepository.delete(id);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
