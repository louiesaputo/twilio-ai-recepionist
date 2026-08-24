/**
 * Deterministic regression for demo vs demolition/demolish issue routing.
 * Loads server.js in test mode (BLUE_CALLER_TEST_DEMO_INTENT=1) so matchers stay in sync with production.
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_DEMO_INTENT: "1" },
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(typeof result.status === "number" ? result.status : 1);
