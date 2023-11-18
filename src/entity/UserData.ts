import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "user_data" })
export default class UserData {
    @PrimaryColumn({type: "integer"})
    public id: number;
    @Column({length: 255})
    public last_name: string;
    @Column({length: 255})
    public username: string;
    @Column({length: 255})
    public first_name: string;
    @Column({nullable: true, length: 255})
    public middle_name?: string;
    @Column({type: "int"})
    public employee_id: number;
    @Column({length: 255})
    public position: string;
    @Column({length: 255})
    public role: string;
    @Column({unique: true, nullable: true, length: 255})
    public rfid_id?: string;
}