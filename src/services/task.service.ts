import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import Task from 'src/entity/Task';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task) private readonly repo: Repository<Task>,
    ) {}

    async getMany() {
        return this.repo.find({relations: ["steps", "car", "aggregate"]});
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
