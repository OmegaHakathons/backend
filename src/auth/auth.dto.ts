import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class PasswordDTO {
    @IsString()
    @ApiProperty()
    public username: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @IsString()
    @ApiProperty()
    public password: string;
}

export class NFCTokenDTO {
    @IsString()
    @ApiProperty()
    public token: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @IsString()
    @ApiProperty()
    public code: string;
}