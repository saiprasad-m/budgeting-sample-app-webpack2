// / <reference path=".\steps.d.ts" />

Feature('Budgeting');

Before(I => {
  // or Background
  // I.amOnPage("http://localhost:8000");
  I.say('The Budgeting App is currently served via nodejs/webpack');
});

Scenario('Navigate to Budgeting App and verify elements in general', I => {
  I.amOnPage('http://localhost:8000/Budget');
  I.see('Budget', { xpath: "//a[starts-with(text(),'Budget')]" });
  I.see('Reports', { xpath: "//a[starts-with(text(),'Reports')]" });
  I.dontSeeInCurrentUrl('/reports');
});

Scenario('Navigate to Budgeting App and verify elements under Reports', I => {
  I.click('Reports');
  I.see('Budget', { xpath: "//a[starts-with(text(),'Budget')]" });
  I.see('Reports', { xpath: "//a[starts-with(text(),'Reports')]" });
  I.dontSeeInCurrentUrl('/budget');
});
