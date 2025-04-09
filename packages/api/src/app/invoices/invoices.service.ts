import { Injectable } from '@nestjs/common'
import { InvoiceDto } from './dto/invoice.dto'
import { Invoice, InvoiceStatus } from './interfaces/invoice-interface'
import { CreateInvoiceDto } from './dto/create-invoice.dto'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class InvoicesService {
  private Invoices: Invoice[] = [{
    id: '1',
    issuerId: '1',
    status: InvoiceStatus.DRAFT,
    CfdiType: 'I',
    Currency: 'MXN',
    PaymentForm: '03',
    PaymentMethod: 'PUE',
    Date: '2021-10-01T00:00:00.000Z',
    Issuer: {
      Name: 'ACME Inc.',
      FiscalRegime: '601',
      Rfc: 'ACI920427E98'
    },
    Receiver: {
      'Rfc': 'EKU9003173C9',
      'Name': 'ESCUELA KEMPER URGATE',
      'CfdiUse': 'P01',
      'FiscalRegime': '603',
      'TaxZipCode': '42501'
    },
   'Items': [
      {
        'ProductCode': '10101504',
        'IdentificationNumber': 'EDL',
        'Description': 'Estudios de viabilidad',
        'Unit': 'NO APLICA',
        'UnitCode': 'MTS',
        'UnitPrice': 50.0,
        'Quantity': 2.0,
        'Subtotal': 100.0,
        'TaxObject': '02',
        'Taxes': [{
          'Total': 16.0,
          'Name': 'IVA',
          'Base': 100.0,
          'Rate': 0.16,
          'IsRetention': false
        }],
        'Total': 116.0
      },
      {
        'ProductCode': '10101504',
        'IdentificationNumber': '001',
        'Description': 'SERVICIO DE COLOCACION',
        'Unit': 'NO APLICA',
        'UnitCode': 'E49',
        'UnitPrice': 100.0,
        'Quantity': 15.0,
        'Subtotal': 1500.0,
        'Discount': 0.0,
        'TaxObject': '02',
        'Taxes': [{
          'Total': 240.0,
          'Name': 'IVA',
          'Base': 1500.0,
          'Rate': 0.16,
          'IsRetention': false
        }],
      'Total': 1740.0
      }
    ]
  }]
  async create (createInvoiceDto: CreateInvoiceDto): Promise<InvoiceDto> {
    const newInvoice = {
      ...createInvoiceDto,
      id: uuidv4(),
      status: InvoiceStatus.DRAFT
    }
    this.Invoices.push(newInvoice)
    return newInvoice
  }

  issue (invoiceId: string) {
    return { 
      ...this.Invoices[0],
      status: 'issued'
    }
  }
  update (invoiceId: string) {
    return invoiceId
  }
  remove (invoiceId: string) {
    return invoiceId
  }
  async findAll (query: any): Promise<InvoiceDto[]> {
    return this.Invoices
  }
  async findOne (invoiceId: string): Promise<InvoiceDto> {
    return this.Invoices[0]
  }
}
