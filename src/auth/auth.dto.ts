import { IsString } from "class-validator";

export class PasswordDTO {
    @IsString()
    public username: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @IsString()
    public password: string;
}

export class NFCTokenDTO {
    @IsString()
    public token: string;
    // Пароль хранится в чистом виде, не делайте так в нормальных проектах
    @IsString()
    public code: string;
}