import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carsRepository: Repository<Car>,
  ) {}
  async create(dto: CreateCarDto): Promise<string> {
    let car: Car;
    try {
      car = await this.carsRepository.create(dto).save();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

    return 'OK';
  }

  async findAll() {
    const carList = await this.carsRepository.find();
    return carList;
  }

  async findOne(vin: string) {
    const car = await this.carsRepository.findOne(vin);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    return car;
  }

  async update(vin: string, updateCarDto: UpdateCarDto) {
    const car = await this.carsRepository.findOne(vin);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    await this.carsRepository.merge(car, updateCarDto).save();
    return 'OK';
  }

  async remove(vin: string) {
    const car = await this.carsRepository.findOne(vin);
    if (!car) {
      throw new NotFoundException('Car not found');
    }
    this.carsRepository.remove(car);
    return 'OK';
  }
}
