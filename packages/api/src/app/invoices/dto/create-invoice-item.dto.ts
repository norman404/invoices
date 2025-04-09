import { IsString, IsNumber, IsArray, ValidateNested, IsOptional, IsBoolean } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateInvoiceItemDto {
  @IsString()
  ProductCode: string

  @IsString()
  IdentificationNumber: string

  @IsString()
  Description: string

  @IsString()
  Unit: string

  @IsString()
  UnitCode: string

  @IsNumber()
  UnitPrice: number

  @IsNumber()
  Quantity: number

  @IsNumber()
  Subtotal: number

  @IsOptional()
  @IsNumber()
  Discount?: number

  @IsString()
  TaxObject: string

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTaxDetailDto)
  Taxes: CreateTaxDetailDto[]

  @IsNumber()
  Total: number
}

export class CreateTaxDetailDto {
  @IsNumber()
  Total: number

  @IsString()
  Name: string

  @IsNumber()
  Base: number

  @IsNumber()
  Rate: number

  @IsBoolean()
  IsRetention: boolean
}