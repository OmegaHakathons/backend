import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { GUARDS_METADATA } from "@nestjs/common/constants";


@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
    constructor(
        private readonly reflector: Reflector,
    ) { super(); }

    canActivate(context: ExecutionContext) {
        // Оказывается, что пустой @UseGuards() работает только в такой комбинации
        if (this.reflector.get(GUARDS_METADATA, context.getHandler()))
            return true;
        else {
            return super.canActivate(context);
        }
    }
}