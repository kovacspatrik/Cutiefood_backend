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
import { ApiTags } from '@nestjs/swagger';
import {
  CreateRecipeDto,
  UpdateRecipeDto,
  UploadImageDto,
} from './dto/recipe.dto';
import { RecipeService } from './recipe.service';

@ApiTags('Recipe')
@Controller('api/recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  read() {
    return this.recipeService.readAll();
  }

  @Get('user/:id')
  async getRecipeByUserId(@Param('id') id: number) {
    return await this.recipeService.readByUserId(id);
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

  @Post('upload_image')
  async uploadImage(@Body() uploadData: UploadImageDto): Promise<any> {
    return this.recipeService.uploadImage(uploadData);
  }

  @Put(':id/update')
  async update(@Param('id') id: number, @Body() data: UpdateRecipeDto) {
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
