import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "user_pass" })
export default class UserPass {
    @PrimaryColumn()
    @ApiProperty()
    public user_id: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @PrimaryColumn()
    @ApiProperty()
    public password: string;
}