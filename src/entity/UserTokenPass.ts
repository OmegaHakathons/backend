import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "user_nfc_pass" })
export default class UserTokenPass {
    @PrimaryColumn()
    public user_id: string;
    @PrimaryColumn()
    public token: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @PrimaryColumn()
    public code: string;
}