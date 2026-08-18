/**
 * Deterministic regression for over-broad "don't"/"do not" negative matching.
 * Loads server.js in test mode so matchers and confirm_address / leak
 * handlers stay in sync with production.
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_NEGATIVE_INTENT: "1" },
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(typeof result.status === "number" ? result.status : 1);
