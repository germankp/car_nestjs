import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class Car extends BaseEntity {
  @PrimaryColumn()
  vin: string;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  registrationCode: string;
}
