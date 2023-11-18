import { Body, Controller, Post, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NFCTokenDTO, PasswordDTO } from './auth.dto';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@Controller("auth")
export class AuthController {
    constructor(
        private readonly appService: AuthService
    ) {}

    @UseGuards()
    @ApiBody({
        type: "string"
    })
    @Post("login")
    async login(@Body() dto: PasswordDTO) {
        return this.appService.login(dto);
    }

    @UseGuards()
    @ApiBody({
        type: "string"
    })
    @Post("nfc-login")
    async loginNFC(@Body() dto: NFCTokenDTO) {
        return this.appService.loginNFC(dto);
    }

    @Get("hello")
    @ApiBearerAuth()
    @ApiBody({
        type: "string"
    })
    async hello(@Request() req: any) {
        return req.user;
    }
}
