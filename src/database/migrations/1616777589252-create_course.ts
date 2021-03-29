import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCourse1616764288457 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table(
        { 
          name: 'courses',
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
              type: 'varchar',
            },
  
            {
              name: 'image',
              type: 'varchar'
            },

            {
              name: 'description',
              type: 'varchar'
            }
          ]
         }
      ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('courses');
    }

}
