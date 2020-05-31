import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./models/User";
import { plainToClass } from "class-transformer";

@Resolver(User)
export class UserResolver {
    @Query(_ => User, { nullable: true })
    async user(): Promise<User | null> {
        return plainToClass(User, {
            id: "12345",
        });
    }
}
