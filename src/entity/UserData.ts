import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "user_data" })
export default class UserData {
    @PrimaryColumn({type: "integer"})
    @ApiProperty()
    public id: number;
    @ApiProperty()
    @Column({length: 255})
    public last_name: string;
    @ApiProperty()
    @Column({length: 255})
    public username: string;
    @ApiProperty()
    @Column({length: 255})
    public first_name: string;
    @ApiPropertyOptional()
    @Column({nullable: true, length: 255})
    public middle_name?: string;
    @ApiProperty()
    @Column({type: "int"})
    public employee_id: number;
    @ApiProperty()
    @Column({length: 255})
    public position: string;
    @ApiProperty()
    @Column({length: 255})
    public role: string;
    @ApiPropertyOptional()
    @Column({unique: true, nullable: true, length: 255})
    public rfid_id?: string;
}