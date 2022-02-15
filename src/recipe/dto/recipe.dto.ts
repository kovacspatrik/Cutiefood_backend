import { UpdateRecipeIngredientDto } from 'src/recipe-ingredient/dto/recipe-ingredient.dto';
import { RecipeIngredient } from 'src/recipe-ingredient/recipe-ingredient.entity';

export class CreateRecipeDto {
  name: string;
  diffLevel: number;
  process: string;
  picture: string;
}

export class UpdateRecipeDto {
  id: number;
  name: string;
  process: string;
  diffLevel: number;
  picture: string;
  ingredients: UpdateRecipeIngredientDto[];
}
