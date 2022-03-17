import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipeIngredientService } from 'src/recipe-ingredient/recipe-ingredient.service';
import { Repository } from 'typeorm';
import {
  CreateRecipeDto,
  UpdateRecipeDto,
  UploadImageDto,
} from './dto/recipe.dto';
import { Recipe } from './recipe.entity';
import fs from 'fs';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe) private recipeRepository: Repository<Recipe>,
    private recipeIngredientService: RecipeIngredientService,
  ) {}

  async create(recipe: CreateRecipeDto) {
    try {
      return await this.recipeRepository.save(recipe);
    } catch (e) {
      throw e;
    }
  }

  async readAll() {
    return await this.recipeRepository.find({
      relations: ['ingredients', 'user'],
    });
  }

  async readByUserId(id: number) {
    return await this.recipeRepository.find({
      where: {
        user: { id: id },
      },
      relations: ['ingredients', 'user'],
    });
  }

  async readOne(id: number) {
    return await this.recipeRepository.findOne(id, {
      relations: ['ingredients', 'user'],
    });
  }

  async update(id: number, data: UpdateRecipeDto) {
    data.id = Number(id);

    this.recipeIngredientService.deleteByRecipeId(id).then(() => {
      setTimeout(() => {
        this.recipeRepository.save(data);
      });
    });

    return this.readOne(data.id);
  }

  async delete(id: number) {
    return await this.recipeRepository.delete(id);
  }

  async deleteAll() {
    return await this.recipeRepository.clear();
  }

  async uploadImage(uploadData: UploadImageDto) {
    var fs = require('fs');
    const matches = uploadData.data.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);

    if (matches.length !== 3) {
      throw new BadRequestException('Invalid input string');
    }

    const type = matches[1];
    const dataBuffer = new Buffer(matches[2], 'base64');
    // const extension = 'png'; //mime.extension(type);
    console.log(type);
    // console.log(mime.extension('image/png'));
    const fileName = `${uploadData.name}`;
    console.log(matches.length);
    try {
      fs.writeFileSync(`./storage/${fileName}`, dataBuffer, 'utf8');
      return { status: 'success' };
    } catch (e) {
      return e.message;
    }
  }
}
