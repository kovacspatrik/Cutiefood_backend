import { Ingredient } from 'src/ingredient/ingredient.entity';
import { User } from 'src/user/user.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'user_shopping_list' })
export class UserShoppingList {
  @ManyToOne(() => Ingredient, (ingredient) => ingredient.shopListUsers, {
    primary: true,
    nullable: false,
  })
  @JoinColumn({ name: 'ingredient_id' })
  ingredient: Ingredient;

  @ManyToOne(() => User, (user) => user.shopListIngredients, {
    primary: true,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
