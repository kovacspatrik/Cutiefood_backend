import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ingredient' })
export class Ingredient {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'name', type: 'varchar', default: 'default ingredient name' })
  name: string;
}
