import { Ingredient } from 'src/ingredient/ingredient.entity';
import { Recipe } from 'src/recipe/recipe.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'recipe_ingredient' })
export class RecipeIngredient {
  @Column('int', { primary: true, name: 'recipe_id' })
  recipeId: number;

  @Column('int', { primary: true, name: 'ingredient_id' })
  ingredientId: number;

  @Column({ name: 'quantity', type: 'varchar' })
  quantity: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
    primary: true,
  })
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipes, {
    primary: true,
    eager: true,
  })
  @JoinColumn({ name: 'ingredient_id' })
  ingredient: Ingredient;
}
