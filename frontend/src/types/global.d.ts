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

interface WebLN {
  enable: () => Promise<void>;
  getInfo: () => Promise<WebLNInfo>;
  makeInvoice: (args: { amount: string | number }) => Promise<{ paymentRequest: string }>;
  sendPayment: (paymentRequest: string) => Promise<{ preimage: string }>;
}

interface Window {
  webln?: WebLN;
}
