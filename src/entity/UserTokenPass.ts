import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "user_nfc_pass" })
export default class UserTokenPass {
    @PrimaryColumn()
    @ApiProperty()
    public user_id: string;
    @PrimaryColumn()
    @ApiProperty()
    public token: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @PrimaryColumn()
    @ApiProperty()
    public code: string;
}