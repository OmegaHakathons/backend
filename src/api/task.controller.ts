import { Body, Controller, Post, Get, Param, Delete, Put} from '@nestjs/common';
import { TaskService } from 'src/services/task.service';
import { TaskDTO } from 'src/services/task.dto';

@Controller("task")
export class TaskController {
    constructor(
        private readonly service: TaskService
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

    @Put(":id")
    async update(@Param("id") id: number, @Body() dto: TaskDTO) {
        return this.service.update(id, dto);
    }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.service.delete(id);
    }
}
