import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class Car {
    @PrimaryColumn()
    @ApiProperty()
    public id: number;
    @Column()
    @ApiProperty()
    public name: string;
    @ApiProperty()
    @Column()
    public number: string;
}