import { Module } from '@nestjs/common';
import 'dotenv/config';
import { getDS } from './dataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityList from './entity/_entities';
import { InitialDatabaseCreator } from './migrations/0-InitialDatabaseCreator';
import { AuthController } from './auth/auth.controlles';
import { AuthService } from './auth/auth.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        InitialDatabaseCreator,
        TypeOrmModule.forRoot(getDS().options),
        TypeOrmModule.forFeature(entityList),
    ],
})
export class AppModule {}
