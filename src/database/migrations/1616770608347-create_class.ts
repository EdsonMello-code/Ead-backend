import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createClass1616764814366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'classes',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'title',
            type: 'varchar'
          },

          {
            name: 'image',
            type: 'varchar'
          },

          {
            name: 'description',
            type: 'varchar'
          },

          {
            name: 'course_id',
            type: 'int'
          },
        ], 
        
        foreignKeys: [
          {
            name: 'Course',
            columnNames: ['course_id'],
            referencedTableName: 'courses',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
        ]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('classes')
    }

}
