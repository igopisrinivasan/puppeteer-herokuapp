import * as reporter from "cucumber-html-reporter";
import * as path from "path";
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/cucumber_report.json";

const cucumberReporterOptions = {
  jsonFile: targetJson,
  output: htmlReports + "/cucumber_reporter.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  theme: "simple",
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome  54.0.2840.98",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

function createHTMLReport() {
  try {
    reporter.generate(cucumberReporterOptions); // invoke cucumber-html-reporter
    console.log("HTML report generated successfully!");
  } catch (err) {
    if (err) {
      throw new Error("Failed to save cucumber test results to json file.");
    }
  }
}
createHTMLReport();
