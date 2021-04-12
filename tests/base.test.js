const { run } = require("../dist");
const path = require("path");

const IN_FILE_PATH = path.join(__dirname, "./fixtures/biscuit.png");
const OUT_FILE_PATH = path.join(__dirname, "./fixtures/biscuit.compressed.png");

jest.setTimeout(1000 * 60 * 3); // 3 mins

test("oxipng works without errors", async () => {
  await run({
    path: IN_FILE_PATH,
    out: OUT_FILE_PATH,
    compression: 3,
  });
});
