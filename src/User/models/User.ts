import { ObjectType, Field, ID, Directive } from "@nestjs/graphql";

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
    @Field(_ => ID) 
    id!: string;
}