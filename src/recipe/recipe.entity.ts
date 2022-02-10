import { Options } from '@nestjs/common';
import { RecipeIngredient } from 'src/recipe-ingredient/recipe-ingredient.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(
    () => RecipeIngredient,
    (recipeIngredient) => recipeIngredient.recipe,
    { cascade: true },
  )
  ingredients: RecipeIngredient[];
}
