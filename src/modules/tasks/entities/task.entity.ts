import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  description: string;

  @Column({ default: false })
  isDone: boolean;

  @Column({ default: false })
  isDeleted: boolean;
}
