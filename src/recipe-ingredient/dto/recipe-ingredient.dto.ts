import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/ingredient/ingredient.entity';

@Injectable()
export class RecipeIngredientDto {
  quantity: string;
}

export class AssignRecipeIngredientDto {
  ingredient: number;
  quantity: string;
}
