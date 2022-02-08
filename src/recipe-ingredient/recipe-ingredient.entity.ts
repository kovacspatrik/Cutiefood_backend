import { Ingredient } from 'src/ingredient/ingredient.entity';
import { Recipe } from 'src/recipe/recipe.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'recipe_ingredient' })
export class RecipeIngredient {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, { cascade: true })
  @JoinColumn()
  recipe: Recipe;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipes, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  ingredient: Ingredient;

  @Column({ name: 'quantity', type: 'varchar' })
  quantity: string;
}
