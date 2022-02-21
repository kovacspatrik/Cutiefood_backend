import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(user: UserDto) {
    try {
      return await this.userRepository.save(user);
    } catch (e) {
      throw e;
    }
  }

  async login(user: UserDto) {
    return await this.userRepository.findOne(user);
  }

  async readAll() {
    return await this.userRepository.find({ relations: ['recipes'] });
  }

  async readOne(id: number) {
    return await this.userRepository.findOne(id, { relations: ['recipes'] });
  }
}
