import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserFavouriteRecipesDto } from './dto/user-favourite-recipes.dto';
import { UserFavouriteRecipesService } from './user-favourite-recipes.service';

@Controller('user-favourite-recipes')
export class UserFavouriteRecipesController {
  constructor(
    private userFavouriteRecipesService: UserFavouriteRecipesService,
  ) {}

  @Get()
  read() {
    return this.userFavouriteRecipesService.readAll();
  }

  @Get('user/:id')
  async getUserFavs(@Param('id') id: number) {
    return await this.userFavouriteRecipesService.readFavsByUserId(id);
  }

  @Post('create')
  async create(@Body() data: UserFavouriteRecipesDto) {
    return this.userFavouriteRecipesService.create(data);
  }

  @Delete('delete/user/:userId/recipe/:recipeId')
  async DeleteUserFav(
    @Param('userId') userId: number,
    @Param('recipeId') recipeId: number,
  ) {
    this.userFavouriteRecipesService.deleteFromFavs(userId, recipeId);
  }
}
