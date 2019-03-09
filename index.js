const apiRequest = require('./src/service/api-request');

exports.getBalances = function(userId){
  return apiRequest({
    total: userId,
  });
};

exports.getMiningMode = function(userId){
  return apiRequest({
    idmining: userId,
  });
};

exports.getSpeed = function(userId){
  return apiRequest({
    idspeed: userId,
  });
};

exports.getDepositAddress = function(userId,depositType){
  return apiRequest({
    id: userId,
    deposit: depositType,
  });
};

exports.getUserId = function(email,password){
  return apiRequest({
    email,
    password,
  });
};

exports.setMiningMode = function(userId,email,password,miningMode){
  return apiRequest({
    password,
    email,
    id: userId,
    mining: miningMode,
  });
};

exports.setAutomaticWithdraw = function(userId, email, password,currency,amount,walletAddress){
  return apiRequest({
    password,
    email,
    amount,
    id: userId,
    withdraw: currency,
    wallet: walletAddress,
  });
};

exports.manualWithdraw = function(userId,email,password,currency,amount,walletAddress){
  return apiRequest({
    password,
    email,
    amount,
    id: userId,
    manualwithdraw: currency,
    wallet: walletAddress,
  });
};

exports.buyCloudWithCryptocurrency = function(userId,email,password,currencyFrom,amount,cloudType){
  return apiRequest({
    password,
    email,
    amount,
    id: userId,
    convertfrom: currencyFrom,
    convertto: cloudType,
  });
};

exports.exchangeEstimate = function(hasExchangeFee,currencyFrom,amount,currencyTo){
  return apiRequest({
    amount,
    convertfrom: currencyFrom,
    convertto: currencyTo,
    exchangefee: hasExchangeFee,
  });
};
