declare module "bin-wrapper" {
  export default class BinWrapper {
    run(args: string[]): Promise<void>;

    src(
      path: string,
      platform?: "darwin" | "linux" | "win32",
      arch?: "x64" | "x86"
    ): BinWrapper;

    dest(path: string): BinWrapper;

    use(name: string): BinWrapper;

    version(ver: string): BinWrapper;
  }
}
