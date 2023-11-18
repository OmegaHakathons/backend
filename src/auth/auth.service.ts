import { Injectable, NotFoundException } from '@nestjs/common';
import UserPass from 'src/entity/UserPass';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PasswordDTO } from './auth.dto';
import * as jwt from "jsonwebtoken";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserPass) private readonly userPass: Repository<UserPass>
    ) {}

    async login(dto: PasswordDTO) {
        const user = await this.userPass.findOneBy({password: dto.password, user_id: dto.username});
        if (!user) throw new NotFoundException();

        return jwt.sign({ user: user.user_id }, process.env.JWT_SECRET as string, {
            algorithm: "HS256",
            expiresIn: "16h",
        });
    }
}
