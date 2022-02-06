import { All, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AdvancedConsoleLogger } from 'typeorm';
import { HttpModule } from '@nestjs/axios';
import { CarModule } from './car/car.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [join(__dirname, '/**/*.entity{.ts,.js}')],
      synchronize: true,
      logger: new AdvancedConsoleLogger('all'),
    }),
    HttpModule,
    CarModule,
  ],
})
export class AppModule {}
