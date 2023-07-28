import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Menu } from '../menus/menu.entity';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menus: Menu[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
