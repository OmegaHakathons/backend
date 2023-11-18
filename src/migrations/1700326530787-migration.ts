import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700326530787 implements MigrationInterface {
    name = 'Migration1700326530787';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" ADD "executorUserId" integer`);
        await queryRunner.query(`ALTER TABLE "user_data" ALTER COLUMN "user_id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "user_data_user_id_seq"`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_4b65b593739f787563c23063da5" FOREIGN KEY ("executorUserId") REFERENCES "user_data"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_4b65b593739f787563c23063da5"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "user_data_user_id_seq" OWNED BY "user_data"."user_id"`);
        await queryRunner.query(`ALTER TABLE "user_data" ALTER COLUMN "user_id" SET DEFAULT nextval('"user_data_user_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "task" DROP COLUMN "executorUserId"`);
    }

}
