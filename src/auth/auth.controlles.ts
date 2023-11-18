import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NFCTokenDTO, PasswordDTO } from './auth.dto';

@Controller("auth")
export class AuthController {
    constructor(
        private readonly appService: AuthService
    ) {}

    @Post("login")
    async login(@Body() dto: PasswordDTO) {
        return this.appService.login(dto);
    }

    @Post("nfc-login")
    async loginNFC(@Body() dto: NFCTokenDTO) {
        return this.appService.loginNFC(dto);
    }
}
