import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { RecipeIngredientDto } from './dto/recipe-ingredient.dto';
import { RecipeIngredientService } from './recipe-ingredient.service';

@Controller('recipe-ingredient')
export class RecipeIngredientController {
  constructor(private recipeIngredientService: RecipeIngredientService) {}

  @Get()
  read() {
    return this.recipeIngredientService.readAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.recipeIngredientService.readOne(id);

    if (!data) {
      throw new NotFoundException();
    }

    return data;
  }

  @Post('create')
  async create(@Body() recipe: RecipeIngredientDto) {
    return this.recipeIngredientService.create(recipe);
  }

  @Delete(':redipeId/delete')
  async delete(@Param('recipeId') recipeId) {
    return this.recipeIngredientService.delete(recipeId);
  }

  @Delete('delete_all')
  async deleteAll() {
    return this.recipeIngredientService.deleteAll();
  }
}
