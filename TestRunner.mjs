class TestRunner {
  static runTests(config) {

    const testResults = [];

    const runTest = (input, expectedOutput) => {
      const inputJSON = JSON.stringify(input);
      const expectedOutputJSON = JSON.stringify(expectedOutput);
      const startMS = Date.now();
      const actualOutput = config.spreadInput ? config.testFunction(...input) : config.testFunction(input);
      const endMS = Date.now();
      const elapsedMS = endMS - startMS;
      const actualOutputJSON = JSON.stringify(actualOutput);
      const passed = actualOutputJSON === expectedOutputJSON;

      if (config.showAllOutput || !passed) {
        console.log('Test summary:')
        console.log(`            input: ${inputJSON}`);
        console.log(`  expected output: ${expectedOutputJSON}`);
        console.log(`    actual output: ${actualOutputJSON}`);
      }

      if (!passed) {
        console.log('********************** FAIL **********************');
      }

      console.log('');

      testResults.push({
        input: input,
        expectedOutput: expectedOutput,
        expectedOutputJSON: JSON.stringify(expectedOutput),
        actualOutput: actualOutput,
        actualOutputJSON: JSON.stringify(actualOutput),
        passed: passed,
        elapsedMS: elapsedMS,
      });
    };

    config.testScenarios.forEach(t => {
      runTest(t.input, t.expectedOutput);
      //console.log(testResults.at(-1).elapsedMS);
    });

    console.log(`\n${testResults.filter(x => x.passed).length} tests passed` +
      `\n${testResults.filter(x => !x.passed).length} tests failed`);
  }
}

export { TestRunner };