import { Type } from 'class-transformer'
import { IsArray, IsDateString, IsString, IsUUID, ValidateNested } from 'class-validator'
import { InvoiceItemDto } from './invoice-item.dto'

export class InvoiceIssuerDto {
  @IsString()
  Name: string

  @IsString()
  FiscalRegime: string

  @IsString()
  Rfc: string
}

export class ReceiverDto {
  @IsString()
  Rfc: string

  @IsString()
  Name: string

  @IsString()
  CfdiUse: string

  @IsString()
  FiscalRegime: string

  @IsString()
  TaxZipCode: string
}

export class CreateInvoiceDto {
  @IsString()
  CfdiType: string

  @IsString()
  Currency: string

  @IsString()
  PaymentForm: string

  @IsString()
  PaymentMethod: string

  @IsDateString()
  Date: string

  @IsUUID()
  issuerId: string

  @ValidateNested()
  @Type(() => InvoiceIssuerDto)
  Issuer: InvoiceIssuerDto

  @ValidateNested()
  @Type(() => ReceiverDto)
  Receiver: ReceiverDto

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InvoiceItemDto)
  Items: InvoiceItemDto[]
}
