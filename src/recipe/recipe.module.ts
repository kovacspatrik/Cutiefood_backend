import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeIngredientModule } from 'src/recipe-ingredient/recipe-ingredient.module';
import { RecipeController } from './recipe.controller';
import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe]), RecipeIngredientModule],
  controllers: [RecipeController],
  providers: [RecipeService],
})
export class RecipeModule {}
