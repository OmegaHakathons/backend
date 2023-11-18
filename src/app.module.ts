import { Module } from '@nestjs/common';
import 'dotenv/config';
import { getDS } from './dataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityList from './entity/_entities';
import { InitialDatabaseCreator } from './migrations/0-InitialDatabaseCreator';
import { AuthController } from './auth/auth.controlles';
import { AuthService } from './auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
    controllers: [AuthController],
    providers: [
        AuthService,
        JwtStrategy,
        {
            provide: APP_GUARD,
            useClass: JwtAuthGuard,
        },
    ],
    imports: [
        InitialDatabaseCreator,
        TypeOrmModule.forRoot(getDS().options),
        TypeOrmModule.forFeature(entityList),
        PassportModule,
        JwtModule.register({
            secret:  process.env.JWT_SECRET,
            signOptions: { 
                algorithm: "HS256",
                expiresIn: "16h",
            },
        }),
    ],
})
export class AppModule {}
