/**
 * Deterministic regression for address corrections during the confirmation turn.
 * Loads server.js in test mode so the matcher and state update stay in sync with production.
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_ADDRESS_CORRECTION: "1" },
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(typeof result.status === "number" ? result.status : 1);
