import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from 'src/ingredient/ingredient.entity';
import { RecipeIngredient } from 'src/recipe-ingredient/recipe-ingredient.entity';
import { getRepository, Repository } from 'typeorm';
import { CreateRecipeDto, UpdateRecipeDto } from './dto/recipe.dto';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  async create(recipe: CreateRecipeDto) {
    try {
      //const entity = await this.recipeRepository.create(recipe);

      return await this.recipeRepository.save(recipe);
    } catch (e) {
      throw e;
    }
  }

  async readAll() {
    return await this.recipeRepository.find({
      relations: ['ingredients'],
    });
  }

  async readOne(id: number) {
    return await this.recipeRepository.findOne(id, {
      relations: ['ingredients'],
    });
  }

  async update(id: number, data: UpdateRecipeDto) {
    // data = await this.recipeRepository.findOne(id);
    data.id = Number(id);

    const entity = await this.recipeRepository.save(data);

    return this.readOne(id);
  }

  async delete(id: number) {
    return await this.recipeRepository.delete(id);
  }

  async deleteAll() {
    return await this.recipeRepository.clear();
  }
}
