import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  vin: string;
  make: string;
  model: string;
  year: number;
  registrationCode: string;
}
