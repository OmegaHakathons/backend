import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

type TypeTask = string;
type StatusTask = string;

export class TaskDTO {
    @IsNumber()
    @ApiProperty()
    public id: number;
    @IsString()
    @ApiProperty()
    public type: TypeTask;
    @IsString()
    @ApiProperty()
    public shortDescription: string; 
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    public currentStep?: number;
    @IsNumber()
    @ApiProperty()
    public carId: number;
    @IsNumber()
    @ApiProperty()
    public aggregateId: number;
    @IsString()
    @ApiProperty()
    public field: string;
    @IsNumber()
    @ApiProperty()
    public minSpeed: number;
    @IsNumber()
    @ApiProperty()
    public maxSpeed: number;
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    public depth?: number;
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    public material?: string;
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    public consumption?: number; 
    @IsDateString()
    @ApiProperty()
    public deadline: Date;    
    @IsString()
    @ApiProperty()
    public status: StatusTask;
}