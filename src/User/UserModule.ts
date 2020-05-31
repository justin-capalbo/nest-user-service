import { Module } from "@nestjs/common";
import { UserResolver } from "./UserResolver";

@Module({
    imports: [],
    providers: [UserResolver],
})
export class UserModule{ };
