import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateIngredientDto } from './dto/ingredient.dto';
import { Ingredient } from './ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}

  async create(ingredient: CreateIngredientDto) {
    return await this.ingredientRepository.save(ingredient);
  }

  async readAll() {
    return await this.ingredientRepository.find();
  }

  async update(ingredient: Ingredient) {
    return await this.ingredientRepository.update(ingredient.id, ingredient);
  }

  async delete(id) {
    return await this.ingredientRepository.delete(id);
  }

  async deleteAll() {
    return await this.ingredientRepository.clear();
  }
}
