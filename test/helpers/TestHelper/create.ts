import { INestApplication, ValidationPipe } from "@nestjs/common";
import { moduleMetadata } from "src/app.module";
import { Test, TestingModule } from "@nestjs/testing";

export type TestingApp = {
    app: INestApplication;
    module: TestingModule;
    url: string;
}

export const app = async (): Promise<TestingApp> => {
    const module = await Test.createTestingModule(moduleMetadata()).compile();
    const app = module.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({whitelist: true}));
    await app.listen(undefined as never);
    await app.init();
    return {app, url: await app.getUrl(), module};
};