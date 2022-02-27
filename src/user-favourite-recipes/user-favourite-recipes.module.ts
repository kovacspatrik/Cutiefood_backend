import { Module } from '@nestjs/common';
import { UserFavouriteRecipesService } from './user-favourite-recipes.service';
import { UserFavouriteRecipesController } from './user-favourite-recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFavouriteRecipes } from './user-favourite-recipes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFavouriteRecipes])],
  providers: [UserFavouriteRecipesService],
  controllers: [UserFavouriteRecipesController],
})
export class UserFavouriteRecipesModule {}
