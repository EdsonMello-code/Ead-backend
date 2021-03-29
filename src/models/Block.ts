import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Class from './Class';

@Entity('blocks')
class Block {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  video!: string;

  @Column()
  image!: string;

  @Column()
  text!: string;

  @Column()
  class_id!: number;
  
  @ManyToOne(() => Class, className => className.block)
  @JoinColumn({ name: 'class_id', referencedColumnName: 'id' })
  classes!: Class;
}

export default Block;