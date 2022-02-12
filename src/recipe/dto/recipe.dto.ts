import { Injectable } from '@nestjs/common';
import { AssignIngredientDto } from 'src/ingredient/dto/ingredient.dto';

@Injectable()
export class CreateRecipeDto {
  name: string;
  process: string;
  picture: string;
}

export class UpdateRecipeDto {
  id: number;
  name: string;
  process: string;
  picture: string;
  ingredients: AssignIngredientDto[];
}
