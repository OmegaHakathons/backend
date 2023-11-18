import { Body, Controller, Post, Get, Param, Delete} from '@nestjs/common';
import { TaskDTO } from 'src/services/task.dto';
import { CarService } from 'src/services/car.service';

@Controller("car")
export class CarController {
    constructor(
        private readonly service: CarService
    ) {}

    @Post()
    async add(@Body() dto: TaskDTO) {
        return this.service.add(dto);
    }

    @Get()
    async getMany() {
        return this.service.getMany();
    }

    @Get(":id")
    async get(@Param("id") id: number){
        return this.service.getOne(id);
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.service.delete(id);
    }
}
