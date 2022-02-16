import { Injectable } from '@nestjs/common';

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
