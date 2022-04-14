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

  @Column({ name: 'name', type: 'varchar', default: 'Névtelen recept' })
  name: string;

  @Column({
    name: 'process',
    type: 'text',
  })
  process: string;

  @Column({
    name: 'picture',
    type: 'varchar',
    default:
      'https://firebasestorage.googleapis.com/v0/b/cutiefood-1a176.appspot.com/o/placeholder%2Fcutiefood_placeholder.png?alt=media&token=f946aae5-bc8e-4b7d-b3b0-bab96a9ae52c',
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
