import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "user_pass" })
export default class UserPass {
    @PrimaryColumn()
    public user_id: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @PrimaryColumn()
    public password: string;
}