const apiRequest = require('./service/api-request');

module.exports = {
  getBalances(userId) {
    return apiRequest({
      total: userId,
    });
  },

  getMiningMode(userId) {
    return apiRequest({
      idmining: userId,
    });
  },

  getSpeed(userId) {
    return apiRequest({
      idspeed: userId,
    });
  },

  getDepositAddress(userId, depositType) {
    return apiRequest({
      id: userId,
      deposit: depositType,
    });
  },
  getUserId(email, password) {
    return apiRequest({
      email,
      password,
    });
  },

  setMiningMode(userId, email, password, miningMode) {
    return apiRequest({
      password,
      email,
      id: userId,
      mining: miningMode,
    });
  },


  setAutomaticWithdraw(userId, email, password, currency, amount, walletAddress) {
    return apiRequest({
      password,
      email,
      amount,
      id: userId,
      withdraw: currency,
      wallet: walletAddress,
    });
  },

  manualWithdraw(userId, email, password, currency, amount, walletAddress) {
    return apiRequest({
      password,
      email,
      amount,
      id: userId,
      manualwithdraw: currency,
      wallet: walletAddress,
    });
  },

  buyCloudWithCryptocurrency(userId, email, password, currencyFrom, amount, cloudType) {
    return apiRequest({
      password,
      email,
      amount,
      id: userId,
      convertfrom: currencyFrom,
      convertto: cloudType,
    });
  },

  exchangeEstimate(hasExchangeFee, currencyFrom, amount, currencyTo) {
    return apiRequest({
      amount,
      convertfrom: currencyFrom,
      convertto: currencyTo,
      exchangefee: hasExchangeFee,
    });
  },
};
