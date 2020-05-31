import { Module } from "@nestjs/common";
import { GraphQLFederationModule } from "@nestjs/graphql";
import { UserModule } from "./User/UserModule";

@Module({
    imports: [
        GraphQLFederationModule.forRoot({
            path: "/user-service/graphql",
            autoSchemaFile: "src/schema.graphql",
        }),
        UserModule,
    ],
})
export class AppModule { }
