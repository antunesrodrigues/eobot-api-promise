const apiRequest = require('./service/api-request');

let apiUrl = 'https://www.eobot.com';
const sendRequest = data => apiRequest(data, apiUrl);

module.exports = {
  setApiURL(newApiUrl) {
    apiUrl = newApiUrl;
    return apiUrl;
  },

  getBalances(userId) {
    return sendRequest({
      total: userId,
    });
  },

  getMiningMode(userId) {
    return sendRequest({
      idmining: userId,
    });
  },

  getSpeed(userId) {
    return sendRequest({
      idspeed: userId,
    });
  },

  getDepositAddress(userId, depositType) {
    return sendRequest({
      id: userId,
      deposit: depositType,
    });
  },
  getUserId(email, password) {
    return sendRequest({
      email,
      password,
    });
  },

  setMiningMode(userId, email, password, miningMode) {
    return sendRequest({
      password,
      email,
      id: userId,
      mining: miningMode,
    });
  },


  setAutomaticWithdraw(userId, email, password, currency, amount, walletAddress) {
    return sendRequest({
      password,
      email,
      amount,
      id: userId,
      withdraw: currency,
      wallet: walletAddress,
    });
  },

  manualWithdraw(userId, email, password, currency, amount, walletAddress) {
    return sendRequest({
      password,
      email,
      amount,
      id: userId,
      manualwithdraw: currency,
      wallet: walletAddress,
    });
  },

  buyCloudWithCryptocurrency(userId, email, password, currencyFrom, amount, cloudType) {
    return sendRequest({
      password,
      email,
      amount,
      id: userId,
      convertfrom: currencyFrom,
      convertto: cloudType,
    });
  },

  exchangeEstimate(hasExchangeFee, currencyFrom, amount, currencyTo) {
    return sendRequest({
      amount,
      convertfrom: currencyFrom,
      convertto: currencyTo,
      exchangefee: hasExchangeFee,
    });
  },
};
