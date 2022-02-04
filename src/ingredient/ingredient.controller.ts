import { IngredientService } from './ingredient.service';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { Ingredient } from './ingredient.entity';
import { CreateIngredientDto } from './dto/ingredient.dto';

@Controller('ingredient')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {}
  @Get()
  read() {
    return this.ingredientService.readAll();
  }

  @Get(':id')
  async getOne(id: number) {
    const ingredient = await this.ingredientService.readOne(id);

    if (!ingredient) {
      throw new NotFoundException();
    }

    return ingredient;
  }

  @Post('create')
  async create(@Body() ingredient: CreateIngredientDto) {
    return this.ingredientService.create(ingredient);
  }

  //NEM MŰKÖDIK MÉG
  @Put(':id/update')
  async update(@Param('id') id, @Body() ingredient: Ingredient) {
    ingredient.id = Number(id);
    return this.ingredientService.update(ingredient);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id) {
    return this.ingredientService.delete(id);
  }

  @Delete('delete_all')
  async deleteAll() {
    return this.ingredientService.deleteAll();
  }
}
