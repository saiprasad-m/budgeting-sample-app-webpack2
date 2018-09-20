// / <reference path=".\steps.d.ts" />

let budgetPage = require("./pages/Budget.js");


Feature('Budgeting App Testplan - Budgeting Testcases');

Before(I => {
  // or Background
  //I.say('The Budgeting App is currently served via nodejs/webpack & tested using codecptjs');
});

// Launch the Budgeting App Url in browser
Scenario('Launch Budgeting App Url @all', (I) => {
  I.amOnPage("http://localhost:8000");
 
});

// Check the Navigational links and Logo
Scenario('Navigate to Budgeting App and verify elements in default Budget tab @all', (I, budgetPage) => {
  budgetPage.checkThePage();
});

// Check the Table headers and Addition form elements
Scenario('Check the UI elements of Budgeting table @all', (I, budgetPage) => {
  budgetPage.checkTableInPage();
});

// Check the UI 3 labels and corresponding values of Working Balance section
Scenario('Check the UI elements of Working Balance section @all',  (I, budgetPage) => {
  budgetPage.checkWorkingBalance();
});


// Create a Data Table for use with Add Category
// Dropdown options: Groceries, School, Entertainment, Utensils, Kids, Travel, Commute, Insurance, Clothing, Car, Taxes, Health, Home, Beauty, Income, Misc, Gifting
let categories = new DataTable(['category', 'description', 'value']); 
categories.add(['Home', 'Home repairs', "250"]); // adding category records to a table
categories.add(['Income', 'Extra hours', "250"]);

// Add 2 categories from above Datatable to Budgeting
Data(categories).Scenario('Add catergories to Budgeting', async (I, current) => { // current!
  await budgetPage.addCategory(current.category, current.description, current.value);
});

// Calculate the Working Fund by scraping
Scenario('Calculate the Working Balance via script @all', async(I, budgetPage) => {
  let working = await budgetPage.calculateBalance();
});

// Navigate to Reports Tab and verify the sub tabs.
Scenario('Navigate to Budgeting App and verify elements under Reports @all',  async(I, budgetPage) => {
  await budgetPage.checkReportPage();
});
