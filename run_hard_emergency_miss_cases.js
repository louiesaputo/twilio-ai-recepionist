/**
 * Deterministic regression for missed hard-emergency phrases and
 * "this is an emergency" issue-wipe on already-dispatchable hazards.
 * Loads server.js in test mode (BLUE_CALLER_TEST_HARD_EMERGENCY_MISS=1).
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_HARD_EMERGENCY_MISS: "1" },
  stdio: "inherit",
  cwd: __dirname
});

process.exit(typeof result.status === "number" ? result.status : 1);
