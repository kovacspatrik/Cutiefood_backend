import { Recipe } from 'src/recipe/recipe.entity';
import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'user_calendar' })
export class UserCalendar {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @ManyToOne(() => Recipe, (recipe) => recipe.calendarEvents, {
    primary: false,
    nullable: false,
  })
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @ManyToOne(() => User, (user) => user.calendarEvents, {
    primary: false,
    nullable: false,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
