export class HelloWorldQuery {
  constructor({ helloWorld }: { helloWorld: string }) {
    this.helloWorld = helloWorld;
  }

  helloWorld: string;
}
