import { Injectable } from '@nestjs/common';
import { Ingredient } from 'src/ingredient/ingredient.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class UserShoppingListDto {
  user: User;
  ingredient: Ingredient;
}
