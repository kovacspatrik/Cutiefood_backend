import { Injectable } from '@nestjs/common';
import { AssignIngredientDto } from 'src/ingredient/dto/ingredient.dto';
import { AssignRecipeIngredientDto } from 'src/recipe-ingredient/dto/recipe-ingredient.dto';

@Injectable()
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
  ingredients: AssignRecipeIngredientDto[];
}
