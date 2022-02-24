import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipe/recipe.entity';
import { Repository } from 'typeorm';
import { UserFavouriteRecipesDto } from './dto/user-favourite-recipes.dto';
import { UserFavouriteRecipes } from './user-favourite-recipes.entity';

@Injectable()
export class UserFavouriteRecipesService {
  constructor(
    @InjectRepository(UserFavouriteRecipes)
    private userFavesRepository: Repository<UserFavouriteRecipes>,
  ) {}

  async create(data: UserFavouriteRecipesDto) {
    try {
      return await this.userFavesRepository.save(data);
    } catch (e) {
      throw e;
    }
  }

  async readAll() {
    return await this.userFavesRepository.find({
      relations: ['user', 'recipe'],
    });
  }

  async readFavsByUserId(id: number) {
    let toReturn: Recipe[] = [];
    const res = await this.userFavesRepository.find({
      where: {
        user: { id: id },
      },
      relations: ['recipe', 'recipe.ingredients'],
    });
    res.forEach((element) => {
      toReturn.push(element.recipe);
    });
    return toReturn;
  }

  async deleteFromFavs(userId: number, recipeId: number) {
    try {
      const data = await this.userFavesRepository.find({
        where: {
          user: { id: userId },
          recipe: { id: recipeId },
        },
        relations: ['recipe', 'user'],
      });
      this.userFavesRepository.remove(data);
    } catch (e) {
      console.log(e);
    }
  }
}
