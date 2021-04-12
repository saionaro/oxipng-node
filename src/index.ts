import { resolve } from "path";
import BinWrapper from "bin-wrapper";

const OXIPNG_VERSION = "4.0.3";
const BASE_URL = "https://github.com/shssoichiro/oxipng/releases/download";
const VENDOR_DIR = resolve(__dirname, "..", "vendor");

const bin = new BinWrapper()
  .src(
    `${BASE_URL}/v${OXIPNG_VERSION}/oxipng-${OXIPNG_VERSION}-x86_64-apple-darwin.tar.gz`,
    "darwin"
  )
  .src(
    `${BASE_URL}/v${OXIPNG_VERSION}/oxipng-${OXIPNG_VERSION}-x86_64-unknown-linux-musl.tar.gz`,
    "linux",
    "x64"
  )
  .src(
    `${BASE_URL}/v${OXIPNG_VERSION}/oxipng-${OXIPNG_VERSION}-x86_64-pc-windows-msvc.zip`,
    "win32",
    "x64"
  )
  .dest(VENDOR_DIR)
  .use(process.platform === "win32" ? "oxipng.exe" : "oxipng")
  .version(`>=${OXIPNG_VERSION}`);

export interface Options {
  version?: boolean;
  path?: string;
  out?: string;
  alpha?: boolean;
  optimization?: 1 | 2 | 3 | 4 | 5 | 6;
  interlacing?: boolean;
  strip?: "safe" | "all";
}

function transformOptions(params: Options): string[] {
  const args = [];

  if (params.optimization) {
    let optimization = Number(params.optimization);
    optimization = Number.isNaN(optimization) ? 2 : optimization;
    optimization = Math.max(params.optimization, 1);
    optimization = Math.min(params.optimization, 6);

    args.push("-o", String(optimization));
  }

  if (params.interlacing) {
    args.push("-i", String(Boolean(params.interlacing)));
  }

  if (params.strip) {
    args.push("--strip", params.strip);
  }

  if (params.out) {
    args.push("--out", params.out);
  }

  if (params.alpha) {
    args.push("--alpha", String(Boolean(params.alpha)));
  }

  if (params.version) {
    args.push("--version");
  }

  if (params.path) {
    args.push(params.path);
  }

  return args;
}

export function run(params: Options): Promise<void> {
  return bin.run(transformOptions(params));
}
