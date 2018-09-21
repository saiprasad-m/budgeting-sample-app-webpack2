### End to End automation 

These tests are being implemented using codeceptJs, puppeteer and mochawesome node modules.
Prior to starting the installation of these libraries is necessary as a pre-requisite. 

The Project followed select few automation practises:

1. Page object model for the Budget and Reports. 
2. Data table approach used to seed the test data for tests.
3. Helper or Util approach followed for calculating Working Balance via grabText api
4. Test reports are rendered via mochawesome.
5. Essential info about Test Automation: 

      Environment | Version
      ----------- | -------------
      Tested on | Win8.1 SL 64bit 
      Node  | v8.12.0
      NPM  | v6.4.1
      CodeceptJs | v1.4.1
      Puppeteer | v1.8.0
      Mochawesome | v3.0.3

6. The Tests, Helpers, PageObjects are arranged in the following hierarchy
 
 
      Test artefacts | Codebase Location
      ----------- | -------------
      Page Objects | e2e\Budget.js , e2e\Reports.js 
      Helper / Utils  | e2e\utils_helper.js
      Test scripts  | e2e\budget_test.js, e2e\reports_test.js
      Reports (HTML)| e2e\reports

7. CodeceptJs config file


```json
{
  "output": "./e2e/reports",
  "helpers": {
    "Puppeteer": {
      "url": "http://localhost:8000",
      "show": true,
      "restart": false,
      "waitForNavigation": "networkidle0",
      "waitForAction": 500,
      "smartWait": 5000
    },
    "Mochawesome": {
      "uniqueScreenshotNames": "true"
    },
    "Utils": {
      "require": "./e2e/helpers/utils_helper.js"
    }
  },
  "include": {
    "budgetPage": "./e2e/pages/Budget.js",
    "reportsPage": "./e2e/pages/Reports.js"
  },
  "mocha": {
    "reporterOptions": {
      "reportDir": "./e2e/reports"
    }
  },
  "bootstrap": false,
  "teardown": null,
  "hooks": [],
  "gherkin": {},
  "plugins": {
    "screenshotOnFail": {
      "enabled": true
    }
  },
  "tests": "./e2e/*_test.js",
  "timeout": 10000,
  "name": "budgeting-sample-app-webpack2"
}
```

#### Pre-requisite: Setup the npm modules using following command.

```bash
npm install codeceptjs puppeteer mochawesome --save-dev
```

#### One-time setup/configuration: to initialise codeceptjs codebase and create blank tests and reports folder
###### PS: 
These commands are required to be use only once when creating empty tests. When prompted, appropriately place all files (defn, helper, test, page object, support object, etc.) under *e2e\* folder

```bash
.\node_module\.bin\codeceptjs init

.\node_module\.bin\codeceptjs gt

.\node_module\.bin\codeceptjs def

.\node_module\.bin\codeceptjs gpo

.\node_module\.bin\codeceptjs go

.\node_module\.bin\codeceptjs gh

```

#### Execution of Tests: from npm / codecept

```bash
.\node_module\.bin\codeceptjs run --steps --reporter mochawesome
```

**or** 

you can also run the following commands in tandem (seperate cmd prompts) 

Cmd prompt 1:
```bash 
npm run prod
```

Cmd prompt 2:
```bash
npm run codecept-test
```

#### Test Plan, Test cases

##### 'Budgeting App' Test Plan

Testcase Id | Test Case | Expected Result | Result | Related Comment | Automated 
----------- | ------------- | -------------- | ----- | ----- | ------
|*Budgeting App - Budget Tab testcases*| 
Tc01 , Tc02| Launch Budgeting App in a browser (http://localhost:8000/) | Page is launched and rendered and redirected to (http://localhost:8000/budget) and 2 tabs are seen _Budget_ and _Reports_ |    | |
Tc03,Tc04 | Click on *Budget* Tab  | A Table is displayed with Headers: _Category_, _Description_, and _Amount_. A form to add categories is present below the table with _Category_ dropdown, _Description_ field, _Value_ field. A Summary of Total Inflow/Outflow and Working Balance is displayed in the lower half |    | |
Tc05,Tc06 | Add 2 category with relevant values: <br/><br/> _Category_: Misc<br/> _Description_: Miscellaneous expense<br/>_Value_: 1000, <br/><br/>Click _Add_ | New Category is updated in the list and the calculation reflects under Working Balance section after the new category addition |    | | Use Data Table to populate
Tc07 | Calculate the Working Balance from The Table | The Inflow amounts and Outflow amounts summed up from the table should be used to calculate the Working fund |    | |
Tc08 | Traverse to *Reports* Tab | Two sub tabs _"Inflow vs Outflow"_ and _"Spending by Category"_ and SVG images for reports are shown by default|    | |

Testcase Id | Test Case | Expected Result | Result | Related Comment | Automated 
----------- | ------------- | -------------- | ----- | ----- | ------
|*Budgeting App - Reports Tab testcases*| 
Tc01 | Navigate to Budgeting App and verify elements in Reports tab  | Page is launched and rendered and redirected to (http://localhost:8000/reports) and 2 aub tabs are seen _Inflow vs Outflow_ and _Spending.._ |    | |
Tc02 | Check the UI elements of Inflow vs Outflow charts  | A Bar chart is displayed with Legends: _Category_ and _Amount_. |    | | Perform SVG particular checks
Tc03 | Check the UI elements of Spending by Category charts | A Doughnut Chart with Speding by Category is shown |    | | Perform SVG particular checks
Tc04 | Failed Test intentionally done : Spending by Category charts | Failure done on purpose |    | |




#### Test Reports
For viewing Test Reports in HTML format, navigate to the following path after each Test execution: 
  ```bash
   budgeting-sample-app-webpack2/e2e/reports/mochawesome.html
  ```
