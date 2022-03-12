import { RecipeIngredient } from 'src/recipe-ingredient/recipe-ingredient.entity';
import { UserCalendar } from 'src/user-calendar/user-calendar.entity';
import { UserFavouriteRecipes } from 'src/user-favourite-recipes/user-favourite-recipes.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'recipe' })
export class Recipe {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar', default: 'default recipe name' })
  name: string;

  @Column({
    name: 'process',
    type: 'varchar',
    default: 'default recipe making process',
  })
  process: string;

  @Column({
    name: 'picture',
    type: 'varchar',
    default: 'default recipe picture',
  })
  picture: string;

  @Column({
    name: 'diffLevel',
    type: 'tinyint',
  })
  diffLevel: number;

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipe,
    { cascade: true },
  )
  ingredients: RecipeIngredient[];

  @ManyToOne(() => User, (user) => user.recipes)
  user: User;

  @OneToMany(
    () => UserFavouriteRecipes,
    (userFavouriteRecipes) => userFavouriteRecipes.recipe,
  )
  usersLiked: UserFavouriteRecipes[];

  @OneToMany(() => UserCalendar, (userCalendar) => userCalendar.recipe)
  calendarEvents: UserCalendar[];
}
