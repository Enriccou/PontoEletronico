import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./shared/user.service";
import { UserSchema } from "./schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([{ name: "User", schema: UserSchema }])],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
