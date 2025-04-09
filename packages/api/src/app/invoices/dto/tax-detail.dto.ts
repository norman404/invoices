import { Expose } from 'class-transformer'

export class TaxDetailDto {
  @Expose()
  Total: number

  @Expose()
  Name: string

  @Expose()
  Base: number

  @Expose()
  Rate: number

  @Expose()
  IsRetention: boolean
}
