import { Body, Controller, Post, Get, Param, Delete, Put} from '@nestjs/common';
import { CarDTO } from 'src/services/car.dto';
import { AggregateService } from 'src/services/aggregate.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import Aggregate from 'src/entity/Aggregate';

@ApiTags('Агрегаты') 
@Controller("aggregate")
export class AggregateController {
    constructor(
        private readonly service: AggregateService
    ) {}

    @Post()
    @ApiBearerAuth()
    async add(@Body() dto: CarDTO) {
        return this.service.add(dto);
    }

    @Get()
    @ApiResponse({type: Aggregate, isArray: true})
    @ApiBearerAuth()
    async getMany() {
        return this.service.getMany();
    }

    @Get(":id")
    @ApiResponse({type: Aggregate})
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
