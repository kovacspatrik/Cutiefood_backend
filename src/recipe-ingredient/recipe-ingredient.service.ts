import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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

  async deleteAll() {
    return await this.recipeIngredientRepository.clear();
  }
}
