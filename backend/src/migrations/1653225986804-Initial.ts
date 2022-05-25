import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1653225986804 implements MigrationInterface {
    name = 'Initial1653225986804'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "participant" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                "nickname" character varying NOT NULL,
                CONSTRAINT "PK_64da4237f502041781ca15d4c41" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "score" (
                "id" SERIAL NOT NULL,
                "score" integer NOT NULL,
                "gameId" integer,
                "playerId" integer,
                CONSTRAINT "PK_1770f42c61451103f5514134078" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "game" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_352a30652cd352f552fef73dec5" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "user" (
                "id" SERIAL NOT NULL,
                "firstName" character varying NOT NULL,
                "lastName" character varying NOT NULL,
                "age" integer NOT NULL,
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "score"
            ADD CONSTRAINT "FK_0778913dcc5349f3bcb0ebeab8c" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "score"
            ADD CONSTRAINT "FK_66f5fb8ee865712db248080d5ea" FOREIGN KEY ("playerId") REFERENCES "participant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "score" DROP CONSTRAINT "FK_66f5fb8ee865712db248080d5ea"
        `);
        await queryRunner.query(`
            ALTER TABLE "score" DROP CONSTRAINT "FK_0778913dcc5349f3bcb0ebeab8c"
        `);
        await queryRunner.query(`
            DROP TABLE "user"
        `);
        await queryRunner.query(`
            DROP TABLE "game"
        `);
        await queryRunner.query(`
            DROP TABLE "score"
        `);
        await queryRunner.query(`
            DROP TABLE "participant"
        `);
    }

}
