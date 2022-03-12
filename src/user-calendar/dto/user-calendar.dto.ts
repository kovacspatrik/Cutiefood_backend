import { Injectable } from '@nestjs/common';
import { Recipe } from 'src/recipe/recipe.entity';
import { User } from 'src/user/user.entity';

@Injectable()
export class UserCalendarDto {
  user: User;
  recipe: Recipe;
  date: Date;
}
