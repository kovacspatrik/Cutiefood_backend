import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRecipeDto, UpdateRecipeDto } from './dto/recipe.dto';
import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  read() {
    return this.recipeService.readAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const recipe = await this.recipeService.readOne(id);

    if (!recipe) {
      throw new NotFoundException();
    }

    return recipe;
  }

  @Post('create')
  async create(@Body() recipe: CreateRecipeDto) {
    return this.recipeService.create(recipe);
  }

  //NEM MŰKÖDIK MÉG
  @Put(':id/update')
  async update(@Param('id') id: number, @Body() data: Recipe) {
    const recipe = await this.recipeService.readOne(id);

    if (!recipe) {
      throw new NotFoundException();
    }

    return this.recipeService.update(id, data);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id) {
    return this.recipeService.delete(id);
  }

  @Delete('delete_all')
  async deleteAll() {
    return this.recipeService.deleteAll();
  }
}
