# End to End automation 

These tests are being implemented using codeceptJs, puppeteer and mochawesome node modules.
Prior to starting the installation of these libraries is necessary as a pre-requisite. 

The Project followed some automation practises:

1. Page object model for the Budget and Reports, 
2. Test reports are rendered via mochawesome.
3. Data table approach used to seed the test data for the tests.

### Pre-requisite: Setup the 2 npm modules using following command.

```bash
npm install codeceptjs puppeteer mochawesome --save-dev
```

### To initialise and seed barebone tests and reports folder, and to place all files under e2e folder

```bash
.\node_module\.bin\codeceptjs init

.\node_module\.bin\codeceptjs gt

.\node_module\.bin\codeceptjs def

.\node_module\.bin\codeceptjs gpo

.\node_module\.bin\codeceptjs run --steps --reporter mochawesome
```

or you can directly start the script after npm run prod

by npm run codecept-test

## Test Plan, Test cases

### 'Budgeting App' Test Plan

Testcase Id | Test Case | Expected Result | Result | Related Comment | Automated 
----------- | ------------- | -------------- | ----- | ----- | ------
|*Budgeting App - Budget Tab testcases*| 
Tc01 | Launch Budgeting App in a browser (http://localhost:8000/) | Page is launched and rendered and redirected to (http://localhost:8000/budget) and 2 tabs are seen _Budget_ and _Reports_ | :construction:  | |
Tc02 | Click on *Budget* Tab  | A Table is displayed with Headers: _Category_, _Description_, and _Amount_. A Summary of Total Inflow/Outflow and Working Balance is displayed in the lower half | :construction:  | |
Tc03 | Add a category with relevant values: <br/><br/> _Category_: Misc<br/> _Description_: Miscellaneous expense<br/>_Value_: 1000, <br/><br/>Click _Add_ | New Category is updated in the list and the calculation reflects the new category addition | :construction:  | |
Tc04 | Calculate the Working Balance from The Table | The Inflow amounts and Outflow amounts summed up from the table should be used to calculate the Working fund | :construction:  | |
Tc05 | Traverse to *Reports* Tab | Two sub tabs _"Inflow vs Outflow"_ and _"Spending by Category"_ and SVG images for reports are shown by default| :construction:  | |
Tc06 | Update desktop client from a hardcoded URL server to a non hardcoded URL server (overrideServerUrl) | The URL should be updated and non hardcoded | :construction:  | |


## Test Reports
Navigate to the following path after each execution for Test reports: 
  ```bash
   budgeting-sample-app-webpack2/e2e/reports/mochawesome.html
  ```
