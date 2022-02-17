import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'userName', type: 'varchar' })
  userName: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;
}
