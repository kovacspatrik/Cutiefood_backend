import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssignRecipeIngredientDto } from 'src/recipe-ingredient/dto/recipe-ingredient.dto';
import { Repository } from 'typeorm';
import { CreateRecipeDto } from './dto/recipe.dto';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
  ) {}

  async create(recipe: CreateRecipeDto) {
    try {
      return await this.recipeRepository.save(recipe);
    } catch (e) {
      throw new BadRequestException('Recipe already exists!');
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

  async update(id: number, data: Recipe) {
    data.id = id;

    const recipe = await this.recipeRepository.update(id, data);

    return this.recipeRepository.save(data);
  }

  async delete(id: number) {
    return await this.recipeRepository.delete(id);
  }

  async deleteAll() {
    return await this.recipeRepository.clear();
  }
}
