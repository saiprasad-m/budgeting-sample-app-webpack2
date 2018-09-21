// / <reference path=".\steps.d.ts" />

const reportsPage = require('./pages/Reports.js');

Feature('Budgeting App Testplan - Reports Testcases');

Before(I => {
  // or Background
  // I.say('The Budgeting App is currently served via nodejs/webpack');
});

// Navigate to Budgeting App and verify elements in Reports tab
Scenario('Navigate to Budgeting App and verify elements in Reports tab @all', (I, reportsPage) => {
  reportsPage.checkTheReportsPage();
});

// Check the UI elements of Inflow vs Outflow charts
Scenario('Check the UI elements of Inflow vs Outflow charts @all', (I, reportsPage) => {
  reportsPage.checkInflowOutflowChartInPage();
});

// Check the UI elements of Spending by Category charts
Scenario('Check the UI elements of Spending by Category charts @all', (I, reportsPage) => {
  reportsPage.checkSoendingByCategoryChart();
});

// Graph or chart validation DataTable- to do
const categories = new DataTable(['category', 'description', 'value']); //
// Groceries, School, Entertainment, Utensils, Kids, Travel, Commute, Insurance, Clothing, Car, Taxes, Health, Home, Beauty, Income, Misc, Gifting
categories.add(['Home', 'Home repairs', '250']); // adding category records to a table
categories.add(['Income', 'Extra hours', '250']);

// Failed Test intentionally done : Spending by Category charts
Scenario('Failed Test intentionally done : Spending by Category charts @all', I => {
  I.seeElement('Element not found');
});
