import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Ingredient } from './ingredient/ingredient.entity';
import {
  AssignRecipeIngredientDto,
  RecipeIngredientDto,
} from './recipe-ingredient/dto/recipe-ingredient.dto';
import { RecipeIngredient } from './recipe-ingredient/recipe-ingredient.entity';
import { Recipe } from './recipe/recipe.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
