import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ParseBoolean } from '../../../shared/decorators/parse.boolean';
import { Column } from 'typeorm';
import { ParseIntPipe } from '@nestjs/common';

export class CreateQuoteCommand {
  @IsNumber()
  @IsNotEmpty()
  public basePrice: number;

  @ParseBoolean()
  @IsBoolean()
  @IsNotEmpty()
  public includeDamageFromThirdParty: boolean;

  @IsNumber()
  @IsNotEmpty()
  public deductionDamageFromThirdParty: number;

  @ParseBoolean()
  @IsBoolean()
  @IsNotEmpty()
  public includeDamageToSelf: boolean;

  @IsNumber()
  @IsNotEmpty()
  public deductionDamageToSelf: number;

  @ParseBoolean()
  @IsBoolean()
  @IsNotEmpty()
  public includeBreakDownAndRescue: boolean;

  @IsNumber()
  @IsNotEmpty()
  public priceBreakDownAndRescue: number;

  @ParseBoolean()
  @IsBoolean()
  @IsNotEmpty()
  public isSubscribe: boolean;
}

export class SimulateQuoteCommand {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  public ageSpaceship: number;

  @IsNotEmpty()
  @IsString()
  public lightspeed: string;

  @IsNotEmpty()
  @ParseBoolean()
  @IsBoolean()
  public outerRimTravel: boolean;

  @IsNotEmpty()
  @ParseBoolean()
  @IsBoolean()
  public strandedOuterRim: boolean;
}

export class SimulatedQuoteCommand {
  public baseMonthlyPrice: number;

  public damageToThirdParty: { included: boolean; deductible: number };

  public damageToSelf: { included: boolean; deductible: number };

  public strandedOuterRimGuarantee: {
    included: boolean;
    supplementMonthlyPrice: number;
  };
}
