import { ApiProperty } from "@nestjs/swagger";
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class Aggregate {
    @PrimaryColumn()
    @ApiProperty()
    public id: number;
    @Column()
    @ApiProperty()
    public name: string;
    @Column()
    @ApiProperty()
    public number: string;
}