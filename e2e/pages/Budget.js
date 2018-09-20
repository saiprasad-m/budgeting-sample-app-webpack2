'use strict';
let I;
let urllinks;
let cattable;
let catform;
let catbalance;
let budgetFrag;

budgetFrag = {

  _init() {
    I = actor();

    // Locators for navigation links and sub links
    urllinks = {
      budget: { xpath: "//a[text()='Budget']" },
      reports: { xpath: "//a[text()='Reports']" },
      logo: { xpath: "//img[@alt='Modus Create']" },
      inflowoutflow: { xpath: "//div/a[text()='Inflow vs Outflow']" },
      spending: { xpath: "//div/a[text()='Spending by Category']" }
    };

    // Locators for Budgeting table headers 
    cattable = {
      category: { css: "table > thead > tr > th:nth-child(1)" },
      description: { css: "table > thead > tr > th:nth-child(2)" },
      amount: { css: "table > thead > tr > th:nth-child(3)" }
    };

    // Locators for category add form
    catform = {
      category: { name: "categoryId" },
      description: { name: "description" },
      amount: { name: "value" },
      add: { xpath: "//button[text()='Add']" }

    };

    // Locators for working balance section
    catbalance = {
      inflow: { xpath: "//div[following-sibling::div[contains(., 'Total Inflow')]]" },
      outflow: { xpath: "//div[child::div[contains(., 'Total Outflow')]]" },
      working: { xpath: "//div[child::div[contains(., 'Working Balance')]]" }
    };


  },

  // insert methods here for Budget page fragment
  // Check for the Links and URL
  checkThePage: async () => {
    I.see('Budget', urllinks.budget);
    I.see('Reports', urllinks.reports);
    I.seeElement(urllinks.logo);
    I.dontSeeInCurrentUrl('/reports');
  },

  // Check for table headers UI, form elements for Add category
  checkTableInPage: () => {
    I.seeElement(cattable.category);
    I.seeElement(cattable.description);
    I.seeElement(cattable.amount);
    I.seeElement(catform.category);
    I.seeElement(catform.description);
    I.seeElement(catform.amount);
    I.seeElement(catform.add);
  },

  // Function used to add category using Data table
  addCategory(cat, desc, val) {
    I.fillField(catform.category, cat); 
    I.fillField(catform.description, desc);
    I.fillField(catform.amount, val);
    I.wait(2);
    I.click(catform.add);
    I.wait(2);
  },

  // Check for working balance UI elements
  checkWorkingBalance: () => {
    I.seeElement(catbalance.inflow);
    I.seeElement(catbalance.outflow);
    I.seeElement(catbalance.working);
  },

  // Calculate the working balance by grab
  calculateBalance: async () => {
    let balance;
    let inflow;
    let outflow;
    let working;
    let finalBalance;
    var v1, v2, v0;
    let assert = require('assert');
    within(catbalance.working, async () => {
      inflow = await I.grabTextFrom(catbalance.inflow);
      outflow = await I.grabTextFrom(catbalance.outflow);
      working = await I.grabTextFrom(catbalance.working);
      finalBalance = [inflow, outflow[outflow.length - 1], working[working.length - 1]];
      
      v0 = await I.stripFloat(finalBalance[0]);
      v1 = await I.stripFloat(finalBalance[1]);
      v2 = await I.stripFloat(finalBalance[2]);
      console.log("lhs " +v0 + " " + v1 );
      console.log("rhs " + v2);
      assert((v0 - v1).toFixed(2) == v2, "Working balance tally and test passed");
      return finalBalance;

    });

    return finalBalance;
  },


  // Check the report page
  checkReportPage: async () => {
    I.wait(5);
    I.click('Reports', urllinks.reports);
    I.wait(5);
    I.see('Inflow vs Outflow', urllinks.inflowoutflow);
    I.see('Spending by Category', urllinks.spending);
    I.seeElement(urllinks.logo);
    I.dontSeeInCurrentUrl('/budget');
    I.wait(2);
  }

};


module.exports = budgetFrag;
