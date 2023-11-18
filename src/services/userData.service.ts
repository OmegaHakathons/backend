import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskDTO } from './task.dto';
import UserData from 'src/entity/UserData';

@Injectable()
export class UserDataService {
    constructor(
        @InjectRepository(UserData) private readonly repo: Repository<UserData>,
    ) {}

    async getMany() {
        return this.repo.find({});
    }

    async getOne(id: number) {
        return this.repo.findOneBy({id});
    }

    async getOneByUsername(username: string) {
        return this.repo.findOneBy({username});
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
