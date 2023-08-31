import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PointsModule } from './points/points.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://enriccou:12345@pontoeletronico.5vunqzd.mongodb.net/PontoEletronico?retryWrites=true&w=majority'),
    UsersModule,
    PointsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
