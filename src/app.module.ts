import { Module } from '@nestjs/common';
import 'dotenv/config';
import { getDS } from './dataSource';
import { TypeOrmModule } from '@nestjs/typeorm';
import entityList from './entity/_entities';
import { InitialDatabaseCreator } from './migrations/0-InitialDatabaseCreator';
import { AuthController } from './auth/auth.controlles';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { CarService } from './services/car.service';
import { TaskService } from './services/task.service';
import { CarController } from './api/car.controller';
import { TaskController } from './api/task.controller';
import { AggregateController } from './api/aggregate.controller';
import { AggregateService } from './services/aggregate.service';
import { UserDataController } from './api/userData.controller';
import { UserDataService } from './services/userData.service';

export const moduleMetadata = (): Parameters<typeof Module>[0] => {
    return {
        controllers: [
            AuthController,
            CarController,
            TaskController,
            AggregateController,
            UserDataController,
        ],
        providers: [
            JwtStrategy,
            // {
            //     provide: APP_GUARD,
            //     useClass: JwtAuthGuard,
            // },
            AuthService,
            CarService,
            TaskService,
            AggregateService,
            UserDataService,
            // FirebaseService,
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
    };
};

@Module(moduleMetadata())
export class AppModule {}
