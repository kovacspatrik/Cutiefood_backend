import { Injectable } from '@nestjs/common';
import { AssignRecipeIngredientDto } from 'src/recipe-ingredient/dto/recipe-ingredient.dto';

@Injectable()
export class CreateRecipeDto {
  name: string;
  process: string;
  picture: string;
  ingredients: AssignRecipeIngredientDto[];
}
