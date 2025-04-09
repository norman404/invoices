import { 
  IsIn,
  IsInt,
  IsOptional,
  IsString,
  Min
} from 'class-validator'
import { Type } from 'class-transformer'

export class FindAllDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  page: number

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Min(1)
  limit: number

  @IsOptional()
  @IsString()
  @IsIn(['ASC', 'DESC'])
  sort: 'ASC' | 'DESC'

  @IsOptional()
  @IsString()
  sortBy: string
  constructor () {
    this.page = this.page ?? 1
    this.limit = this.limit ?? 10
    this.sort = this.sort ?? 'ASC'
    this.sortBy = this.sortBy ?? 'id'
  }
}