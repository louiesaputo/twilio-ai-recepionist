/**
 * Deterministic regression for human-agent / AI-identity acknowledgement handling.
 * Loads server.js in test mode so the cases exercise handlePrompt and caller state.
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_HUMAN_AGENT: "1", RESPONSE_THINK_DELAY_MS: "0" },
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(typeof result.status === "number" ? result.status : 1);
