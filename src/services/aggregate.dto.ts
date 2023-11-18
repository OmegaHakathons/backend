import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AggregateDTO {
    @IsString()
    @ApiProperty()
    public name: string;
    @IsString()
    @ApiProperty()
    public number: string;
}