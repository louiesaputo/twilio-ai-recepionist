/**
 * Deterministic regression for inability "no way" phrases that were treated
 * as a universal no (standard leak dispatch, wiped addresses, wrap-up hangup).
 * Loads server.js in test mode (BLUE_CALLER_TEST_NO_WAY_CONSTRAINT=1).
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_NO_WAY_CONSTRAINT: "1" },
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(typeof result.status === "number" ? result.status : 1);
