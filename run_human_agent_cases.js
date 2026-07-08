/**
 * Deterministic regression for human/AI acknowledgement handling.
 * Loads server.js in test mode so handlePrompt stays in sync with production.
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_HUMAN_AGENT: "1" },
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(typeof result.status === "number" ? result.status : 1);
