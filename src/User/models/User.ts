import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(_ => ID) 
    id!: string;
}