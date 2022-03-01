import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
import { Ingredient } from 'src/ingredient/ingredient.entity';
import { Repository } from 'typeorm';
import { UserShoppingListDto } from './dto/user-shopping-list.dto';
import { UserShoppingList } from './user-shopping-list.entity';

@Injectable()
export class UserShoppingListService {
  constructor(
    @InjectRepository(UserShoppingList)
    private userShopListRepository: Repository<UserShoppingList>,
  ) {}

  async create(data: UserShoppingListDto) {
    try {
      return await this.userShopListRepository.save(data);
    } catch (e) {
      throw e;
    }
  }

  async readAll() {
    return await this.userShopListRepository.find({
      relations: ['ingredient', 'user'],
    });
  }

  async readShopListByUserId(id: number) {
    let toReturn: Ingredient[] = [];
    const res = await this.userShopListRepository.find({
      where: {
        user: { id: id },
      },
      relations: ['ingredient'],
    });
    res.forEach((element) => {
      toReturn.push(element.ingredient);
    });

    return toReturn;
  }

  async deleteFromShoppingList(userId: number, ingredientId: number) {
    try {
      const data = await this.userShopListRepository.find({
        where: {
          user: { id: userId },
          ingredient: { id: ingredientId },
        },
        relations: ['user', 'ingredient'],
      });
      await this.userShopListRepository.remove(data);
    } catch (e) {
      console.log(e);
    }
  }

  async clearShoppingList(userId: number) {
    try {
      const data = await this.userShopListRepository.find({
        where: {
          user: { id: userId },
        },
        relations: ['user', 'ingredient'],
      });
      await this.userShopListRepository.remove(data);
    } catch (e) {
      console.log(e);
    }
  }
}
