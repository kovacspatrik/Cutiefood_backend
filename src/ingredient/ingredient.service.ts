import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(ingredient: CreateIngredientDto) {
    try {
      return await this.ingredientRepository.save(ingredient);
    } catch (e) {
      throw new BadRequestException('Ingredient already exists!');
    }
  }

  async readAll() {
    return await this.ingredientRepository.find();
  }

  async readOne(id: number) {
    return await this.ingredientRepository.findOne(id);
  }

  async update(ingredient: Ingredient) {
    return await this.ingredientRepository.update(ingredient.id, ingredient);
  }

  async delete(id: number) {
    return await this.ingredientRepository.delete(id);
  }

  async deleteAll() {
    return await this.ingredientRepository.clear();
  }
}
