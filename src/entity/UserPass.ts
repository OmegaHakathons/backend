import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "user_pass" })
export default class UserPass {
    @PrimaryColumn()
    public user_id: string;

    @PrimaryColumn()
    public password: string;
}