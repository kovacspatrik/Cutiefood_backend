import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeIngredientDto {
  recipeId: number;
  ingredientId: number;
  quantity: string;
}

export class AssignRecipeIngredientDto {
  ingredientId: number;
  quantity: string;
}
