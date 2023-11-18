import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import Car from 'src/entity/Car';
import { CarDTO } from './car.dto';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) private readonly repo: Repository<Car>,
        private jwtService: JwtService
    ) {}

    private (userName: string): string {
        return this.jwtService.sign({ user: userName });
    }

    async getMany() {
        return this.repo.find();
    }

    async getOne(id: number) {
        return this.repo.findOneBy({id});
    }

    async add(dto: CarDTO) {
        return this.repo.insert(dto);
    }

    async delete(id: number) {
        return this.repo.delete({id});
    }

    async update(id: number, dto: CarDTO) {
        return this.repo.update({id}, dto);
    }
}
