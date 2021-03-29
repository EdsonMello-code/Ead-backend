import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Class from './Class';
@Entity('courses')
class Course {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column()
  title!: string;

  @Column()
  image!: string;

  @Column()
  description!: string;
  
  @OneToMany(() => Class, className => className.course, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'course_id' })
  classes!: Class[];
}

export default Course;