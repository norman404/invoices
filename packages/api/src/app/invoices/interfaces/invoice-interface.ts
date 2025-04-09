export enum InvoiceStatus {
  DRAFT = 'draft',
  ISSUED = 'issued',
  CANCELLED = 'cancelled'
}
export interface Invoice {
  id: string;
  status: InvoiceStatus;
  CfdiType: string;
  Currency: string;
  PaymentForm: string;
  PaymentMethod: string;
  Date: string;

  issuerId: string;
  Issuer: InvoiceIssuer;

  Receiver: InvoiceReceiver;

  Items: InvoiceItem[];
}

export interface InvoiceIssuer {
  Name: string;
  FiscalRegime: string;
  Rfc: string;
}

export interface InvoiceReceiver {
  Rfc: string;
  Name: string;
  CfdiUse: string;
  FiscalRegime: string;
  TaxZipCode: string;
}

export interface InvoiceItem {
  ProductCode: string;
  IdentificationNumber: string;
  Description: string;
  Unit: string;
  UnitCode: string;
  UnitPrice: number;
  Quantity: number;
  Subtotal: number;
  Discount?: number;
  TaxObject: string;
  Taxes: TaxDetail[];
  Total: number;
}

export interface TaxDetail {
  Total: number;
  Name: string;
  Base: number;
  Rate: number;
  IsRetention: boolean;
}
