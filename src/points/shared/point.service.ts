import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Point } from "./point";

@Injectable()
export class PointService {
  constructor(@InjectModel("Point") public pointModel: Model<Point>) {}

  async getAll() {
      return await this.pointModel.find().exec();
  }

  async getById(id: string) {
    return await this.pointModel.findById(id).exec();
  }

  async create(point: Point) {
    const createdPoint = new this.pointModel(point);
    return await createdPoint.save();
  }

  async delete(id: string) {
    await this.pointModel.deleteOne({ _id: id }).exec();
    return { message: "Point deleted successfully" };
  }
}
