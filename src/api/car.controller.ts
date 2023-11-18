import { Body, Controller, Post, Get, Param, Delete, Put} from '@nestjs/common';
import { CarService } from 'src/services/car.service';
import { CarDTO } from 'src/services/car.dto';

@Controller("car")
export class CarController {
    constructor(
        private readonly service: CarService
    ) {}

    @Post()
    async add(@Body() dto: CarDTO) {
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
    
    @Put(":id")
    async update(@Param("id") id: number, @Body() dto: CarDTO) {
        return this.service.update(id, dto);
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.service.delete(id);
    }
}
