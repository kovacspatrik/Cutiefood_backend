import { Recipe } from 'src/recipe/recipe.entity';
import { UserCalendar } from 'src/user-calendar/user-calendar.entity';
import { UserFavouriteRecipes } from 'src/user-favourite-recipes/user-favourite-recipes.entity';
import { UserShoppingList } from 'src/user-shopping-list/user-shopping-list.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'userName', type: 'varchar' })
  userName: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @OneToMany(() => Recipe, (recipe) => recipe.user)
  recipes: Recipe[];

  @OneToMany(
    () => UserFavouriteRecipes,
    (userFavouriteRecipes) => userFavouriteRecipes.user,
    { cascade: true },
  )
  favouriteRecipes: UserFavouriteRecipes[];

  @OneToMany(
    () => UserShoppingList,
    (userShoppingList) => userShoppingList.user,
    { cascade: true },
  )
  shopListIngredients: UserShoppingList[];

  @OneToMany(() => UserCalendar, (userCalendar) => userCalendar.user)
  calendarEvents: UserCalendar[];
}
