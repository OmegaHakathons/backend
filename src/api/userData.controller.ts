import { Controller, Get, Param, Delete} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDataService } from 'src/services/userData.service';

@ApiTags('UserData') 
@Controller("user_data")
export class UserDataController {
    constructor(
        private readonly service: UserDataService
    ) {}

    // @Post()
    // async add(@Body() dto: CarDTO) {
    //     return this.service.add(dto);
    // }

    @Get()
    async getMany() {
        return this.service.getMany();
    }

    @Get(":id")
    async get(@Param("id") id: number){
        return this.service.getOne(id);
    }
    
    // @Put(":id")
    // async update(@Param("id") id: number, @Body() dto: CarDTO) {
    //     return this.service.update(id, dto);
    // }

    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.service.delete(id);
    }
}
