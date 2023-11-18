import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { faker } from '@faker-js/faker/locale/ru';
import { moduleMetadata } from 'src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import Car from 'src/entity/Car';
import {Repository} from "typeorm";
import { randomInt } from 'crypto';

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

    it("insert test data", async () => {
        for (let i = 0; i < 10; i++) {
            const repo: Repository<Car> = module.get(getRepositoryToken(Car));
            await repo.insert({
                id: randomInt(100000),
                name: `${faker.music.genre()} ${faker.commerce.productName()} ${faker.string.alphanumeric(2).toUpperCase()}`,
                number: `${faker.string.alphanumeric(6)} ${faker.string.alphanumeric(2)}`.toUpperCase()
            });
        }
        expect(1).toBe(1);
    });
});
