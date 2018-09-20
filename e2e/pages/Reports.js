let I;
let tablinks;
let inflowchart;
let categorychart;
let reportsFrag;

reportsFrag = {
  _init() {
    I = actor();

    // Navigation link locators, sub link locators
    tablinks = {
      budget: { xpath: "//a[text()='Budget']" },
      reports: { xpath: "//a[text()='Reports']" },
      logo: { xpath: "//img[@alt='Modus Create']" },
      inflowoutflow: { xpath: "//div/a[text()='Inflow vs Outflow']" },
      spending: { xpath: "//div/a[text()='Spending by Category']" },
    };

    // Locators for inflow outflow chart headers, blocs and legends,
    inflowchart = {
      inflowblc: { css: 'svg > g > g:nth-child(1)' },
      inflowtxt: { css: 'svg > g > g > g:nth-child(1) > text:nth-child(2)' },
      inflowval: { css: 'svg > g > g > g:nth-child(1) > text:nth-child(3)' },
      outflowblc: { css: 'svg > g > g:nth-child(2)' },
      outflowtxt: { css: 'svg > g > g > g:nth-child(2) > text:nth-child(2)' },
      outflowval: { css: 'svg > g > g > g:nth-child(2) > text:nth-child(3)' },
    };

    // locators for group by category chart
    categorychart = {
      category: { css: 'svg > g' },
    };
  },

  // insert methods here for Reports page fragment
  // Check for the Links and URL
  checkTheReportsPage: async () => {
    I.see('Budget', tablinks.budget);
    I.see('Reports', tablinks.reports);
    I.seeElement(tablinks.logo);
    I.seeElement(tablinks.inflowoutflow);
    I.seeElement(tablinks.spending);
    I.dontSeeInCurrentUrl('/budget');
    I.seeInCurrentUrl('/reports');
  },

  // Check for Inflow v/s Outflow chart- blocs, text legends and values
  checkInflowOutflowChartInPage: () => {
    I.seeElement(inflowchart.inflowblc);
    I.seeElement(inflowchart.inflowtxt);
    I.seeElement(inflowchart.inflowval);
    I.seeElement(inflowchart.outflowblc);
    I.seeElement(inflowchart.outflowtxt);
    I.seeElement(inflowchart.outflowval);
  },

  // Navigate to Spending by Category
  checkSoendingByCategoryChart: async () => {
    I.wait(5);
    I.click('Spending by Category', tablinks.spending);
    I.wait(5);
    I.see('Inflow vs Outflow', tablinks.inflowoutflow);
    I.see('Spending by Category', tablinks.spending);
    I.seeElement(categorychart.category);
    I.dontSeeInCurrentUrl('/budget');
    I.wait(2);
  },
};

module.exports = reportsFrag;
