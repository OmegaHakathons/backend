import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import migationList from "./migrations/_migrations";
import entityList from "./entity/_entities";
import { readFileSync } from "fs";
import "dotenv/config";

export const getDS = (dbName?: string) => {
    const options: PostgresConnectionOptions = {
        type: "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT ?? "5432"),
        database: dbName ?? process.env.DB_NAME,
        username: process.env.DB_USER,
        logging: process.env.DB_LOG === "1",
        password: process.env.DB_PASSWORD,
        migrations: migationList,
        entities: entityList,
        applicationName: "lk-form-api",
        migrationsRun: true,
        migrationsTableName: "migrations",
        ssl: {
            rejectUnauthorized: true,
            ca: readFileSync(process.env.PATH_TO_CRT as string)
                .toString(),
        },
    };

    return { options, ds: new DataSource(options) };
};

export default getDS().ds;