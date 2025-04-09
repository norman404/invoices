import { Injectable } from '@nestjs/common'
import {
  InvoiceProvider,
  Invoice
} from './invoice-provider.interface'

@Injectable()
export class ProviderFacturamaAdapter implements InvoiceProvider {
  private API_URL = 'https://apisandbox.facturama.mx/3/cfdis'
  private Invoice: Invoice = {
    // 'NameId': '1',
    // 'Folio': '100', Valor opcional, es el folio de la factura del contribuyente.
    'CfdiType': 'I', // Atributo requerido para expresar la clave del efecto del comprobante fiscal para el contribuyente emisor.  I|E|T|N|P
    // 'Serie': 'FAC',  valor opcional, es la serie de la factura del contribuyente.
    'Currency': 'MXN', // Atributo requerido para expresar la clave de la moneda utilizada para expresar los montos.
    'PaymentForm': '03', // Atributo condicional para expresar la clave de la forma de pago de los bienes o servicios amparados por el comprobante. 01|02|03|04|05|06|08|12|13|14|15|17|23|24|25|26|27|28|29|30|31|99
    'PaymentMethod': 'PUE', //Atributo condicional para precisar la clave del método de pago que aplica para este comprobante fiscal digital por Internet, conforme al Artículo 29- A fracción VII incisos a y b del CFF. Se entiende como método de pago leyendas tales como: PPD, PUE
    // 'Exportation': '01', // Atributo requerido para expresar si el comprobante ampara una operación de exportación. Se elige del catálogo del SAT 01|02|03|04
    // 'OrderNumber': 'TEST-001', // Atributo opcional para expresar el número de orden de compra de los bienes o servicios amparados por el comprobante.
    'Date': '2023-04-01T12:00:00-06:00', // Atributo requerido para la expresión de la fecha y hora de expedición del Comprobante Fiscal Digital por Internet.Se expresa en la forma AAAAMM-DDThh:mm:ss y debe corresponder con la hora local donde se expide el comprobante
    // 'ExpeditionPlace': '99999',
    // 'CurrencyExchangeRate': 20.55, // Atributo condicional para representar el tipo de cambio FIX conforme con la moneda usada.Es requerido cuando la clave de moneda es distinta de MXN y de XXX.El valor debe reflejar el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo moneda.Si el valor está fuera del porcentaje aplicable a la moneda tomado del catálogo c_Moneda, el emisor debe obtener del PAC que vaya a timbrar el CFDI, de manera no automática, una clave de confirmación para ratificar que el valor es correcto e integrar dicha clave en el atributo Confirmacion.
    // 'PaymentConditions': 'CREDITO A SIETE DIAS', // Atributo condicional para expresar las condiciones comerciales aplicables para el pago del comprobante fiscal digital por Internet.Este atributo puede ser condicionado mediante atributos o complementos
    // 'Observations': 'Elemento Observaciones solo visible en PDF', // Descripcion no fiscal del pdf
    'Issuer': {
      'Rfc': 'URE180429TM6',
      'Name': 'UNIVERSIDAD ROBOTICA ESPAÑOLA',
      'FiscalRegime': '601'
    },
    'Receiver':
      {
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
  }
  async generateInvoice (data: any): Promise < string > {
    const {
      CfdiType,
      Currency = 'MXN',
      PaymentForm,
      PaymentMethod = 'PUE',
      Date
    } = data
    this.Invoice.CfdiType = CfdiType
    this.Invoice.Currency = Currency
    this.Invoice.PaymentForm = PaymentForm
    this.Invoice.PaymentMethod = PaymentMethod
    this.Invoice.Date = Date || new Date().toISOString()

    
  // Call to the provider API
  return 'invoice-id'
}
  async getInvoice (id: string): Promise < any > {
  // Call to the provider API
  return {}
}
  async deleteInvoice (id: string): Promise < void> {
  // Call to the provider API
}
}