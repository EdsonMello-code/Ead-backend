import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBlock1616784399433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'blocks',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'video',
            type: 'varchar' 
          },

          {
            name: 'image',
            type: 'varchar' 
          },

          {
            name: 'text',
            type: 'varchar' 
          },

          {
            name: 'class_id',
            type: 'int' 
          }
        ],

        foreignKeys: [
          {
            name: 'block',
            columnNames: ['class_id'],
            referencedTableName: 'classes',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
          }
        ]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('blocks')
    }

}
