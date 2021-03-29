import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Block from "./Block";
import Course from "./Course";

@Entity('classes')
class Class {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  title!: string;

  @Column()
  image!: string;

  @Column()
  description!: string;

  @Column()
  course_id!: number;
  
  @ManyToOne(() => Course, course => course.classes)
  @JoinColumn({ name: 'course_id' })
  course!: Course;

  @OneToMany(() => Block, block => block.classes)
  @JoinColumn({ name: 'class_id', referencedColumnName: 'id' })
  block!: Block[];
}

export default Class;