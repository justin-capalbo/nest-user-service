import { Resolver, Query, Args, ID } from "@nestjs/graphql";
import { User } from "./models/User";
import { plainToClass } from "class-transformer";

const data: User[] = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
];

@Resolver(User)
export class UserResolver {
    @Query(_ => User, { nullable: true })
    async user(
        @Args("id") id: string
    ): Promise<User | null> {
        const user = data.find((user) => user.id === id);
        return plainToClass(User, user);
    }

    @Query(_ => User)
    async users(): Promise<User[] | null> {
        return plainToClass(User, data);
    }
}
