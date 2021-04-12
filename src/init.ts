import { run } from "./index";

(async () => {
  try {
    await run({});
  } catch (e) {
    console.error("ERROR: oxipng-node failed to init");
    console.error(e);
  }
})();
