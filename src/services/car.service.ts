import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from '@nestjs/jwt';
import Task from 'src/entity/Task';
import { TaskDTO } from './task.dto';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Task) private readonly repo: Repository<Task>,
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

    async add(dto: TaskDTO) {
        return this.repo.insert(dto);
    }

    async delete(id: number) {
        return this.repo.delete({id});
    }

    async update(id: number, dto: TaskDTO) {
        return this.repo.update({id}, dto);
    }
}
