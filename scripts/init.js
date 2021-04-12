(async () => {
  let OxipngNode;

  try {
    OxipngNode = require("../dist/index");
  } catch (e) {
    // build didn't run = we on CI
    console.log("CI: skip init");
    return;
  }

  try {
    await OxipngNode.run({ version: true });
    console.error("oxipng-node inited");
  } catch (e) {
    console.error("ERROR: oxipng-node failed to init");
    console.error(e);
  }
})();
