import { Body, Controller, Post, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { NFCTokenDTO, PasswordDTO } from './auth.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Авторизация")
@Controller("auth")
export class AuthController {
    constructor(
        private readonly appService: AuthService
    ) {}

    @UseGuards()
    @ApiOperation({ summary: 'Вход по логину и паролю' })
    @Post("login")
    async login(@Body() dto: PasswordDTO) {
        return this.appService.login(dto);
    }

    @UseGuards()
    @ApiOperation({ summary: 'Вход по токену и коду' })
    @Post("nfc-login")
    async loginNFC(@Body() dto: NFCTokenDTO) {
        return this.appService.loginNFC(dto);
    }

    @Get("hello")
    @ApiOperation({ summary: 'Проверка работы токена из auth/login и auth/nfc-login' })
    @ApiBearerAuth()
    async hello(@Request() req: any) {
        return `Hello, ${req.user}`;
    }
}
