import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { plainToInstance } from 'class-transformer'

import { InvoicesService } from './invoices.service'

import { FindAllDto } from './dto/find-all.dto'
import { InvoiceDto } from './dto/invoice.dto'
import { CreateInvoiceDto } from './dto/create-invoice.dto'


@Controller('invoices')
export class InvoicesController {
  constructor (private readonly _invoicesService: InvoicesService) {}

  /**
   * This method creates a new invoice.
   * @returns 
   */
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create (@Body() createInvoiceDto: CreateInvoiceDto): Promise<InvoiceDto> {
    const newInvoice = await this._invoicesService.create(createInvoiceDto)
    return plainToInstance(InvoiceDto, newInvoice, { excludeExtraneousValues: true })
  }

  /**
   * This method issues an invoice.
   * This issue is in SAT.
   * @returns 
   */
  @Post(':invoiceId/issue')
  issue (@Param('invoiceId') invoiceId: string) {
    return this._invoicesService.issue(invoiceId)
  }

  /**
   * This method updates an invoice, it can be the amount, the concept, etc.
   * It's not possible to update an invoice already issued.
   * @returns 
   */
  @Put(':invoiceId')
  update (@Param('invoiceId') invoiceId: string) {
    return this._invoicesService.update(invoiceId)
  }

  /**
   * This method removes an invoice.
   * It's not possible to remove an invoice already issued.
   * @returns 
   */
  @Delete(':invoiceId')
  remove (@Param('invoiceId') invoiceId: string) {
    return this._invoicesService.remove(invoiceId)
  }

  /**
   * This method returns all invoices.
   * @returns 
   */
  @Get()
  @UsePipes(new ValidationPipe({ transform: true }))
  async findAll (@Query() query: FindAllDto): Promise<InvoiceDto[]> {
    const issues = await this._invoicesService.findAll(query)
    return plainToInstance(InvoiceDto, issues, { excludeExtraneousValues: true })
  }

  /**
   * This method returns one invoice.
   * @returns 
   */
  @Get(':invoiceId')
  async findOne (@Param('invoiceId') invoiceId: string): Promise<InvoiceDto> {
    const issue = await this._invoicesService.findOne(invoiceId)
    return plainToInstance(InvoiceDto, issue, { excludeExtraneousValues: true })
  }

  // /**
  //  * This method returns the PDF of an invoice, The PDF is in base64.
  //  * @returns 
  //  */
  // @Get(':invoiceId/pdf')
  // findPdf(@Param('invoiceId') invoiceId: string) {
  //   return this._invoicesService.findPdf(invoiceId);
  // }

  // /**
  //  * This method returns the XML of an invoice, The XML is in base64.
  //  * @returns 
  //  */
  // @Get(':invoiceId/xml')
  // findXml(@Param('invoiceId') invoiceId: string) {
  //   return this._invoicesService.findXml(invoiceId);
  // }

  // /**
  //  * This method returns the ZIP URL of the invoices.
  //  * @returns 
  //  */
  // @Post(':invoiceId/zip')
  // createZip(@Param('invoiceId') invoiceId: string) {
  //   return this._invoicesService.createZip(invoiceId);
  // }
}
