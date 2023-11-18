import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700327451311 implements MigrationInterface {
    name = 'Migration1700327451311';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_4b65b593739f787563c23063da5"`);
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "executorUserId" TO "executorId"`);
        await queryRunner.query(`ALTER TABLE "user_data" DROP CONSTRAINT "user_data_pkey"`);
        await queryRunner.query(`ALTER TABLE "user_data" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user_data" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_data" ADD CONSTRAINT "PK_73a2ae063ee34712f94b8248ced" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user_data" ADD "username" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_de1876565f93fd5fae3a73cc8f9" FOREIGN KEY ("executorId") REFERENCES "user_data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_de1876565f93fd5fae3a73cc8f9"`);
        await queryRunner.query(`ALTER TABLE "user_data" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "user_data" DROP CONSTRAINT "PK_73a2ae063ee34712f94b8248ced"`);
        await queryRunner.query(`ALTER TABLE "user_data" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user_data" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_data" ADD CONSTRAINT "user_data_pkey" PRIMARY KEY ("user_id")`);
        await queryRunner.query(`ALTER TABLE "task" RENAME COLUMN "executorId" TO "executorUserId"`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_4b65b593739f787563c23063da5" FOREIGN KEY ("executorUserId") REFERENCES "user_data"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
