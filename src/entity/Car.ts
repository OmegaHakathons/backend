import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export default class Car {
    @PrimaryColumn()
    public id: number;
    @Column()
    public name: string;
    @Column()
    public number: string;
}