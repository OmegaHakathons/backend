import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700317847702 implements MigrationInterface {
    name = 'Migration1700317847702';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aggregate" ("id" integer NOT NULL, "name" character varying NOT NULL, "number" character varying NOT NULL, CONSTRAINT "PK_c4ee11f0faf388bb19c3c5fdd8c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "car" ("id" integer NOT NULL, "name" character varying NOT NULL, "number" character varying NOT NULL, CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" integer NOT NULL, "type" character varying NOT NULL, "shortDescription" character varying NOT NULL, "currentStep" integer, "field" character varying NOT NULL, "minSpeed" integer NOT NULL, "maxSpeed" integer NOT NULL, "depth" integer, "material" character varying, "consumption" integer, "deadline" TIMESTAMP NOT NULL, "status" character varying NOT NULL, "carId" integer, "aggregateId" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "step" ("index" integer NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying NOT NULL, "comment" character varying, "taskId" integer, CONSTRAINT "PK_32d01123ed13dfe2874adc60c69" PRIMARY KEY ("index"))`);
        await queryRunner.query(`ALTER TABLE "user_pass" ADD CONSTRAINT "PK_5aaf790b65ecb25b2ce7a5997bf" PRIMARY KEY ("user_id", "password")`);
        await queryRunner.query(`ALTER TABLE "user_nfc_pass" ADD CONSTRAINT "PK_40ad9d3f65c009b7dfb341e2e9a" PRIMARY KEY ("user_id", "token", "code")`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_66e11b07926c001b0a6e7a71245" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_56e03eae5843ab5bff06b54eb08" FOREIGN KEY ("aggregateId") REFERENCES "aggregate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "step" ADD CONSTRAINT "FK_1484f6f77babbe1087c317bfdfc" FOREIGN KEY ("taskId") REFERENCES "task"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "step" DROP CONSTRAINT "FK_1484f6f77babbe1087c317bfdfc"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_56e03eae5843ab5bff06b54eb08"`);
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_66e11b07926c001b0a6e7a71245"`);
        await queryRunner.query(`ALTER TABLE "user_nfc_pass" DROP CONSTRAINT "PK_40ad9d3f65c009b7dfb341e2e9a"`);
        await queryRunner.query(`ALTER TABLE "user_pass" DROP CONSTRAINT "PK_5aaf790b65ecb25b2ce7a5997bf"`);
        await queryRunner.query(`DROP TABLE "step"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "car"`);
        await queryRunner.query(`DROP TABLE "aggregate"`);
    }

}
