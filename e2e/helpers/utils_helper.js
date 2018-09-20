let categories;

class Utils extends Helper {
  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  stripFloat(currency) {
    let partcurr = '';
    if (currency.length >= 9) partcurr = currency.split('\n')[0];
    else partcurr = currency;
    partcurr = partcurr.substring(1, partcurr.length);
    partcurr = partcurr.replace(',', '');
    console.log(`>${parseFloat(partcurr)}`);
    return parseFloat(partcurr);
  }

  populateDataTable() {
    categories = new DataTable(['category', 'description', 'value']); //
    // Groceries, School, Entertainment, Utensils, Kids, Travel, Commute, Insurance, Clothing, Car, Taxes, Health, Home, Beauty, Income, Misc, Gifting

    categories.add(['Home', 'Home repairs', 250]); // adding category records to a table
    categories.add(['Income', 'Extra hours', 300]);

    // You can skip some data. But add them to report as skipped (just like with usual scenarios):
    // categories.xadd(['admin', '23456'])
  }
}

module.exports = Utils;
