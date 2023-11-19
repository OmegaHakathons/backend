import { Entity, Column, OneToMany, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import Car from "./Car";
import Step from "./Step";
import Aggregate from "./Aggregate";
import UserData from "./UserData";

type TypeTask = string;
type StatusTask = string;

@Entity()
export default class Task {
    @PrimaryColumn()
    public id: number;
    @Column()
    public type: TypeTask;
    @Column()
    public shortDescription: string; 
    @OneToMany(() => Step, (step) => step.task)
    @JoinTable()
    public steps: Step[];
    @Column({nullable: true})
    public currentStep?: number;
    @ManyToOne(() => Car)
    public car: Car;
    @Column()
    public carId: number;
    @ManyToOne(() => UserData)
    public executor: UserData;
    @Column()
    public executorId: number;
    @ManyToOne(() => Aggregate)
    public aggregate: Aggregate;
    @Column()
    public aggregateId: number;
    @Column()
    public field: string;
    @Column()
    public minSpeed: number;
    @Column()
    public maxSpeed: number;
    @Column({nullable: true})
    public depth?: number;
    @Column({nullable: true})
    public material?: string; 
    @Column({nullable: true})
    public consumption?: number; 
    @Column()
    public deadline: Date;
    @Column()
    public status: StatusTask;
}