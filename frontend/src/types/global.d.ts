interface WebLNNode {
  alias: string;
  pubkey: string;
  color?: string;
}

interface WebLNInfo {
  node: WebLNNode;
  version: string;
  supports: string[];
}

interface MakeInvoiceArgs {
  amount: string | number;
  memo?: string;
  defaultMemo?: string;
}

interface WebLN {
  enable: () => Promise<void>;
  getInfo: () => Promise<WebLNInfo>;
  makeInvoice: (args: MakeInvoiceArgs) => Promise<{ paymentRequest: string }>;
  sendPayment: (paymentRequest: string) => Promise<{ preimage: string }>;
}

interface Window {
  webln?: WebLN;
}
