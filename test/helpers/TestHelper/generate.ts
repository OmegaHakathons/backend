import { INestApplication } from "@nestjs/common";
import { faker } from '@faker-js/faker/locale/ru';
import { TestingModule } from "@nestjs/testing";
import { randomInt } from "crypto";
import Aggregate from "src/entity/Aggregate";
import Car from "src/entity/Car";
import Task from "src/entity/Task";

export type TestingApp = {
    app: INestApplication;
    module: TestingModule;
    url: string;
}

export const car = (): Car => ({
    id: randomInt(100000),
    name: `${faker.music.genre()} ${faker.commerce.productName()} ${faker.string.alphanumeric(2).toUpperCase()}`,
    number: `${faker.string.alphanumeric(6)} ${faker.string.alphanumeric(2)}`.toUpperCase()
});

export const aggregate = (): Aggregate => ({
    id: randomInt(100000),
    name: `${faker.animal.cat()} ${faker.string.alphanumeric(2).toUpperCase()}`,
    number: `${faker.string.alphanumeric(4)}`.toUpperCase()
});

export const task = (aggregateId: number, carId: number, executorId: number): Task => ({
    aggregateId,
    carId,
    deadline: faker.date.future(),
    field: faker.lorem.words(),
    executorId,
    id: faker.number.int({min:0, max: 1000000}),
    maxSpeed: faker.number.int({min:10, max: 16}),
    minSpeed: faker.number.int({min: 6, max: 10}),
    shortDescription: faker.lorem.words(5),
    status: faker.helpers.arrayElement(["новая", "техосмотр", "взял расходники", "в дороге", "на поле (основная деятельность)", "на паузе", "проблема", "выполнена (основная деятельность на поле)", "доехал до базы/сдал остатки расходников"]),
    type: faker.color.human(),
    aggregate: null as never,
    car: null as never,
    executor: null as never,
    steps: []
});
