import { Body, Controller, Post, Get, Param, Delete, Put} from '@nestjs/common';
import { CarService } from 'src/services/car.service';
import { CarDTO } from 'src/services/car.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import Car from 'src/entity/Car';

@ApiTags('Машины')
@Controller("car")
export class CarController {
    constructor(
        private readonly service: CarService
    ) {}

    @Post()
    @ApiBearerAuth()
    async add(@Body() dto: CarDTO) {
        return this.service.add(dto);
    }

    @Get()
    @ApiResponse({type: Car, isArray: true})
    @ApiBearerAuth()
    async getMany() {
        return this.service.getMany();
    }

    @Get(":id")
    @ApiResponse({type: Car})
    @ApiBearerAuth()
    async get(@Param("id") id: number){
        return this.service.getOne(id);
    }
    
    @Put(":id")
    @ApiBearerAuth()
    async update(@Param("id") id: number, @Body() dto: CarDTO) {
        return this.service.update(id, dto);
    }

    @Delete(":id")
    @ApiBearerAuth()
    async delete(@Param("id") id: number) {
        return this.service.delete(id);
    }
}
