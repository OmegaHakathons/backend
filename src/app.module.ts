import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'dotenv/config';
import { getDS } from './dataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityList from './entity/_entities';
import { InitialDatabaseCreator } from './migrations/0-InitialDatabaseCreator';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        InitialDatabaseCreator,
        TypeOrmModule.forRoot(getDS().options),
        TypeOrmModule.forFeature(entityList),
    ],
})
export class AppModule {}
