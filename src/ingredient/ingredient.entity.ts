import { RecipeIngredient } from 'src/recipe-ingredient/recipe-ingredient.entity';
import { UserShoppingList } from 'src/user-shopping-list/user-shopping-list.entity';
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'ingredient' })
export class Ingredient {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Index({ unique: true })
  @Column({ name: 'name', type: 'varchar', default: 'default ingredient name' })
  name: string;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.ingredient,
  )
  recipes: RecipeIngredient[];

  @OneToMany(
    () => UserShoppingList,
    (userShoppingList) => userShoppingList.ingredient,
  )
  shopListUsers: UserShoppingList[];
}
