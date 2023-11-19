import { Entity, Column, OneToMany, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import Car from "./Car";
import Step from "./Step";
import Aggregate from "./Aggregate";
import UserData from "./UserData";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

type TypeTask = string;
type StatusTask = string;

@Entity()
export default class Task {
    @PrimaryColumn()
    @ApiProperty()
    public id: number;
    @Column()
    @ApiProperty()
    public type: TypeTask;
    @Column()
    @ApiProperty()
    public shortDescription: string; 
    @ApiProperty()
    @OneToMany(() => Step, (step) => step.task)
    @JoinTable()
    public steps: Step[];
    @ApiPropertyOptional()
    @Column({nullable: true})
    public currentStep?: number;
    @ManyToOne(() => Car)
    @ApiProperty()
    public car: Car;
    @ApiProperty()
    @Column()
    public carId: number;
    @ApiProperty()
    @ManyToOne(() => UserData)
    public executor: UserData;
    @Column()
    @ApiProperty()
    public executorId: number;
    @ApiProperty()
    @ManyToOne(() => Aggregate)
    public aggregate: Aggregate;
    @Column()
    @ApiProperty()
    public aggregateId: number;
    @Column()
    @ApiProperty()
    public field: string;
    @Column()
    @ApiProperty()
    public minSpeed: number;
    @Column()
    @ApiProperty()
    public maxSpeed: number;
    @Column({nullable: true})
    @ApiPropertyOptional()
    public depth?: number;
    @ApiPropertyOptional()
    @Column({nullable: true})
    public material?: string; 
    @ApiPropertyOptional()
    @Column({nullable: true})
    public consumption?: number; 
    @Column()
    @ApiProperty()
    public deadline: Date;
    @Column()
    @ApiProperty()
    public status: StatusTask;
}