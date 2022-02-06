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
      throw new BadRequestException();
    }
  }

  async readAll() {
    return await this.ingredientRepository.find();
  }

  async readOne(id: number) {
    return await this.ingredientRepository.findOne(id);
  }

  async update(id: number, data: Ingredient) {
    data.id = id;

    const ingredient = await this.ingredientRepository.update(id, data);

    return this.readOne(id);
  }

  async delete(id: number) {
    return await this.ingredientRepository.delete(id);
  }

  async deleteAll() {
    return await this.ingredientRepository.clear();
  }
}
