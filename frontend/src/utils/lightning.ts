export const generateInvoice = async (amount: number, memo: string) => {
  try {
    if (!window.webln) {
      throw new Error('WebLN not available');
    }

    await window.webln.enable();
    const invoice = await window.webln.makeInvoice({
      amount: String(amount),
      defaultMemo: memo,
    });

    return invoice.paymentRequest;
  } catch (error) {
    console.error('Error generating invoice:', error);
    throw error;
  }
};

export const sendPayment = async (paymentRequest: string) => {
  try {
    if (!window.webln) {
      throw new Error('WebLN not available');
    }

    await window.webln.enable();
    const result = await window.webln.sendPayment(paymentRequest);
    return result;
  } catch (error) {
    console.error('Error sending payment:', error);
    throw error;
  }
};
