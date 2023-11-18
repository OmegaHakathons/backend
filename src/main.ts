import { NestApplicationOptions, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import 'dotenv/config';

export default async function bootstrap(nestPort?: number, logger = true) {
    const options: NestApplicationOptions = {};
    if (logger === false) options.logger = false;
    const app = await NestFactory.create(AppModule, options);
    app.useGlobalPipes(new ValidationPipe({whitelist: true}));

    const config = new DocumentBuilder().build();
    const document = SwaggerModule.createDocument(app, config, {
        deepScanRoutes: true,
    });
    SwaggerModule.setup("docs", app, document);

    if (process.env.CORS === "1") app.enableCors({origin: true});
    await app.listen(nestPort as number);
    console.log("Listening at port " + nestPort);
    return app;
}

//TODO: не игнорировать
// Stryker disable next-line all
/* istanbul ignore next */
if (require.main === module)
/* istanbul ignore next */
    void bootstrap(parseInt(process.env.PORT as string));
