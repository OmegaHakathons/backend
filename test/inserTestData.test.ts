import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { faker } from '@faker-js/faker/locale/ru';
import { ObjectLiteral } from "typeorm/common/ObjectLiteral";
import { moduleMetadata } from 'src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import Car from 'src/entity/Car';
import {Repository} from "typeorm";
import { randomInt } from 'crypto';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import Aggregate from 'src/entity/Aggregate';

describe('(e2e)', () => {
    let app: INestApplication;
    let module: TestingModule;

    afterAll(async () => {
        await app?.close(); await module?.close();
    });
    beforeAll(async () => {
        module = await Test.createTestingModule(moduleMetadata()).compile();
        app = module.createNestApplication();
        await app.init();
    });

    const handler = async <T extends ObjectLiteral>(type: EntityClassOrSchema, data: () =>  T) => {
        for (let i = 0; i < 10; i++) {
            const repo: Repository<T> = module.get(getRepositoryToken(type));
            await repo.insert(data());
        }
    };

    it("insert test data", async () => {
        await handler<Car>(Car, () => ({
            id: randomInt(100000),
            name: `${faker.music.genre()} ${faker.commerce.productName()} ${faker.string.alphanumeric(2).toUpperCase()}`,
            number: `${faker.string.alphanumeric(6)} ${faker.string.alphanumeric(2)}`.toUpperCase()
        }));
        await handler<Aggregate>(Aggregate, () => ({
            id: randomInt(100000),
            name: `${faker.animal.cat()} ${faker.string.alphanumeric(2).toUpperCase()}`,
            number: `${faker.string.alphanumeric(4)}`.toUpperCase()
        }));
        expect(1).toBe(1);
    });
});
