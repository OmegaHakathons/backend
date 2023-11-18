import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CarDTO } from './car.dto';
import Aggregate from 'src/entity/Aggregate';

@Injectable()
export class AggregateService {
    constructor(
        @InjectRepository(Aggregate) private readonly repo: Repository<Aggregate>,
    ) {}

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
