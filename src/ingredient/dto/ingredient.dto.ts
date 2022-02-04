import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateIngredientDto {
  name: string;
}

export class AssignIngredientDto {
  id: number;
}
