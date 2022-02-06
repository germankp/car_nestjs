import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  create(@Body() createCarDto: CreateCarDto) {
    return this.carService.create(createCarDto);
  }

  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':vin')
  findOne(@Param('vin') vin: string) {
    return this.carService.findOne(vin);
  }

  @Patch(':vin')
  update(@Param('vin') vin: string, @Body() updateCarDto: UpdateCarDto) {
    return this.carService.update(vin, updateCarDto);
  }

  @Delete(':vin')
  remove(@Param('vin') vin: string) {
    return this.carService.remove(vin);
  }
}
