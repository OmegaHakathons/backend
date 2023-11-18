import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm";
import Task from "./Task";

type StatusStep = string;

@Entity()
export default class Step {
    @PrimaryColumn()
    public index: number;
    @Column()
    public name: string;
    @ManyToOne(() => Task, (task) => task.steps)
    public task: Task;
    @Column()
    public description: string;
    @Column()
    public status: StatusStep;
    @Column({nullable: true})
    public comment?: string; 
}