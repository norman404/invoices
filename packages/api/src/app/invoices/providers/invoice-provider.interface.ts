export interface InvoiceProvider {
  generateInvoice(data: any): Promise<string>;
  getInvoice(id: string): Promise<any>;
  deleteInvoice(id: string): Promise<void>;
}

export interface TaxResidence {
  Street: string;
  ExteriorNumber: string;
  Neighborhood: string;
  ZipCode: string;
  Municipality: string;
  State: string;
  Country: string;
}

export interface InvoiceIssuer {
  FiscalRegime: string;
  Rfc: string;
  Name: string;
  TaxResidence?: string;
}

export interface InvoiceReceiver {
  Rfc: string;
  Name: string;
  CfdiUse: string;
  FiscalRegime: string;
  TaxZipCode: string;
  TaxResidence?: string;
}
export interface InvoiceTaxes {
  Name: string;
  Rate: number;
  IsRetention: boolean;
  Total: number;
  Base: number;
}
export interface InvoiceItem {
  ProductCode: string;
  Description: string;
  Unit: string;
  UnitCode: string;
  Quantity: number;
  Discount?: number;
  UnitPrice: number;
  Subtotal: number;
  TaxObject: string;
  Taxes: InvoiceTaxes[];
  Total: number;
  IdentificationNumber?: string;
}

export interface Invoice {
  CfdiType: string;
  Currency: string;
  PaymentForm: string;
  PaymentMethod: string;
  Date: string;
  Issuer: InvoiceIssuer;
  Receiver: InvoiceReceiver;
  Items: InvoiceItem[];
}