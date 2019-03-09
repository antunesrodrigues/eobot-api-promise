const objectToQuery = (object) => {
  const arrayDePesquisa = []
  Object.keys(object).forEach((prop) => {
    const value = String(object[prop]);

    arrayDePesquisa.push(`${prop}=${value}`);
  });


  return arrayDePesquisa.join('&');
}

module.exports = objectToQuery;

