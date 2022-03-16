import { Recipe } from 'src/recipe/recipe.entity';
import { User } from 'src/user/user.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'user_favourite_recipes' })
export class UserFavouriteRecipes {
  @ManyToOne(() => Recipe, (recipe) => recipe.usersLiked, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @ManyToOne(() => User, (user) => user.favouriteRecipes, {
    primary: true,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
