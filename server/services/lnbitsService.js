const axios = require('axios');

const createWallet = async (userLabel) => {
  const res = await axios.post(
    `${process.env.LNBITS_BASE_URL}/wallet`,
    { user_name: userLabel },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return res.data;
};

const createInvoice = async (walletAdminKey, invoiceData) => {
  const res = await axios.post(
    `${process.env.LNBITS_BASE_URL}/payments`,
    invoiceData,
    {
      headers: {
        "X-Api-Key": walletAdminKey,
        "Content-type": "application/json",
      },
    }
  );
  return res.data;
};

module.exports = { createInvoice, createWallet };
