import { Ingredient } from 'src/ingredient/ingredient.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
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

  @ManyToMany(() => Ingredient)
  @JoinTable({
    name: 'recipe_ingredients',
    joinColumns: [{ name: 'recipe_id' }],
    inverseJoinColumns: [{ name: 'ingredient_id' }],
  })
  ingredients: Ingredient[];
}
