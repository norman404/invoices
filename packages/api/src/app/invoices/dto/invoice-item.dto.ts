import { Expose, Type } from 'class-transformer'
import { TaxDetailDto } from './tax-detail.dto'

export class InvoiceItemDto {
  @Expose()
  ProductCode: string

  @Expose()
  IdentificationNumber: string

  @Expose()
  Description: string

  @Expose()
  Unit: string

  @Expose()
  UnitCode: string

  @Expose()
  UnitPrice: number

  @Expose()
  Quantity: number

  @Expose()
  Subtotal: number

  @Expose()
  Discount?: number

  @Expose()
  TaxObject: string

  @Expose()
  @Type(() => TaxDetailDto)
  Taxes: TaxDetailDto[]

  @Expose()
  Total: number
}
