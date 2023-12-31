import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PointService } from './shared/point.service';
import { Point } from './shared/point';

@Controller('points')
export class PointsController {

        constructor(private pointService: PointService) {}

        @Get()
        async getAll(): Promise<Point[]> {
            return this.pointService.getAll();
        }

        @Get(':id')
        async getById(@Param('id') id: string): Promise<Point> {
            return this.pointService.getById(id);
        }

        @Post()
        async create(@Body() point: Point): Promise<Point> {
            return this.pointService.create(point);
        }
}
