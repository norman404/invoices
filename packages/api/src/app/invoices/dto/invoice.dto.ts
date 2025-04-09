import { Exclude, Expose, Type } from 'class-transformer'
import { InvoiceItemDto } from './invoice-item.dto'

export class InvoiceReceiver {
  @Expose()
  Rfc: string

  @Expose()
  Name: string

  @Expose()
  CfdiUse: string

  @Expose()
  FiscalRegime: string

  @Expose()
  TaxZipCode: string
}

export class InvoiceDto {
  @Expose()
  id: string

  @Expose()
  status: string

  @Expose()
  CfdiType: string

  @Expose()
  Currency: string

  @Expose()
  PaymentForm: string

  @Expose()
  PaymentMethod: string

  @Expose()
  Date: string

  @Expose()
  issuerId: string

  @Exclude()
  Issuer?: {
    Name: string;
    FiscalRegime: string;
    Rfc: string;
  }

  @Expose()
  @Type(() => InvoiceReceiver)
  Receiver: InvoiceReceiver

  @Expose()
  @Type(() => InvoiceItemDto)
  Items: InvoiceItemDto[]
}