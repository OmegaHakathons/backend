import { Body, Controller, Post, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NFCTokenDTO, PasswordDTO } from './auth.dto';

@Controller("auth")
export class AuthController {
    constructor(
        private readonly appService: AuthService
    ) {}

    @UseGuards()
    @Post("login")
    async login(@Body() dto: PasswordDTO) {
        return this.appService.login(dto);
    }

    @UseGuards()
    @Post("nfc-login")
    async loginNFC(@Body() dto: NFCTokenDTO) {
        return this.appService.loginNFC(dto);
    }

    @Get("hello")
    async hello(@Request() req: any) {
        return req.user;
    }
}
