import { Injectable } from '@nestjs/common';
import { AssignIngredientDto } from 'src/ingredient/dto/ingredient.dto';
import { Ingredient } from 'src/ingredient/ingredient.entity';

@Injectable()
export class RecipeIngredientDto {
  recipeId: number;
  ingredientId: number;
  quantity: string;
}

export class UpdateRecipeIngredientDto {
  ingredientId: number;
  quantity: string;
}
