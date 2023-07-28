import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRestaurantDishMenu1689462080965 implements MigrationInterface {
    name = 'CreateRestaurantDishMenu1689462080965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dish" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "menuId" uuid, CONSTRAINT "PK_59ac7b35af39b231276bfc4c00c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "menu" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "restaurant" uuid, CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "dish" ADD CONSTRAINT "FK_b43c2b159b975d6f0f9828f563f" FOREIGN KEY ("menu") REFERENCES "menu"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "menu" ADD CONSTRAINT "FK_085156de3c3a44eba017a6a0846" FOREIGN KEY ("restaurant") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu" DROP CONSTRAINT "FK_085156de3c3a44eba017a6a0846"`);
        await queryRunner.query(`ALTER TABLE "dish" DROP CONSTRAINT "FK_b43c2b159b975d6f0f9828f563f"`);
        await queryRunner.query(`DROP TABLE "menu"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
        await queryRunner.query(`DROP TABLE "dish"`);
    }

}
