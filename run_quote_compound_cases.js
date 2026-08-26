/**
 * Deterministic regression for quote-keyword false friends (quoted / under-overestimate).
 * Loads server.js in test mode (BLUE_CALLER_TEST_QUOTE_COMPOUND=1).
 */

const { spawnSync } = require("child_process");
const path = require("path");

const result = spawnSync(process.execPath, [path.join(__dirname, "server.js")], {
  env: { ...process.env, BLUE_CALLER_TEST_QUOTE_COMPOUND: "1" },
  stdio: "inherit",
  cwd: __dirname,
});

process.exit(typeof result.status === "number" ? result.status : 1);
