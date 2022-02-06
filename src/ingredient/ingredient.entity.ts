import { Recipe } from 'src/recipe/recipe.entity';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'ingredient' })
export class Ingredient {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Index({ unique: true })
  @Column({ name: 'name', type: 'varchar', default: 'default ingredient name' })
  name: string;

  @ManyToMany(() => Recipe)
  @JoinTable({
    name: 'recipe_ingredients',
    joinColumns: [{ name: 'ingredient_id' }],
    inverseJoinColumns: [{ name: 'recipe_id' }],
  })
  recipes: Recipe[];
}
