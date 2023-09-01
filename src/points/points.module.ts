import { Module } from "@nestjs/common";
import { PointsController } from "./points.controller";
import { PointService } from "./shared/point.service";
import { MongooseModule } from "@nestjs/mongoose";
import { PointSchema } from "./schemas/point.schema";
import { UsersModule } from "src/users/users.module";


@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Point", schema: PointSchema }]),
    UsersModule
  ],
  controllers: [PointsController],
  providers: [PointService],
})
export class PointsModule {}
