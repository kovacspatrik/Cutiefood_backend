import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipeIngredientDto {
  quantity: string;
}
