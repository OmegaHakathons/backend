import { Injectable, BadRequestException } from '@nestjs/common';
import UserPass from 'src/entity/UserPass';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { NFCTokenDTO, PasswordDTO } from './auth.dto';
import UserTokenPass from 'src/entity/UserTokenPass';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserPass) private readonly userPass: Repository<UserPass>,
        @InjectRepository(UserTokenPass) private readonly userTokenPass: Repository<UserTokenPass>,
        private jwtService: JwtService
    ) {}

    private sign(userName: string): string {
        return this.jwtService.sign({ user: userName });
    }

    async login(dto: PasswordDTO) {
        // Пароль хранится в чистом виде, не делайте так в нормальных проектах
        const user = await this.userPass.findOneBy({password: dto.password, user_id: dto.username});
        if (!user) throw new BadRequestException("Wrong username and/or password");
        return this.sign(user.user_id);
    }

    async loginNFC(dto: NFCTokenDTO) {
        // Пароль хранится в чистом виде, не делайте так в нормальных проектах
        const user = await this.userTokenPass.findOneBy({token: dto.token, code: dto.code});
        if (!user) throw new BadRequestException("Wrong token and/or code");
        return this.sign(user.user_id);
    }
}
