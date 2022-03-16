import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from 'src/recipe/recipe.entity';
import { Repository } from 'typeorm';
import { RecipeIngredientDto } from './dto/recipe-ingredient.dto';
import { RecipeIngredient } from './recipe-ingredient.entity';

@Injectable()
export class RecipeIngredientService {
  constructor(
    @InjectRepository(RecipeIngredient)
    private recipeIngredientRepository: Repository<RecipeIngredient>,
  ) {}

  async create(data: RecipeIngredientDto) {
    try {
      return await this.recipeIngredientRepository.save(data);
    } catch (e) {
      throw e;
    }
  }

  async readAll() {
    return await this.recipeIngredientRepository.find({
      relations: ['ingredient'],
    });
  }

  async readOne(id: number) {
    return await this.recipeIngredientRepository.findOne(id, {
      relations: ['ingredient'],
    });
  }

  async delete(recipe: Recipe) {
    try {
      return await recipe.ingredients.forEach((element) => {
        this.recipeIngredientRepository.delete(element);
      });
    } catch (e) {
      return e;
    }
  }

  async deleteAll() {
    return await this.recipeIngredientRepository.clear();
  }

  async deleteByRecipeId(id: number) {
    const data = await this.recipeIngredientRepository.find({
      where: { recipeId: id },
    });
    await this.recipeIngredientRepository.remove(data);
  }
}
