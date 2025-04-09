import { ProviderFacturamaAdapter } from './provider-facturama.adapter'
import { InvoiceProvider } from './invoice-provider.interface'

export class InvoiceProviderFactory {
  static createProvider (providerName: string): InvoiceProvider {
    switch (providerName) {
      case 'facturama':
        return new ProviderFacturamaAdapter()
      default:
        throw new Error('Proveedor de facturas no soportado')
    }
  }
}
