export class HelloWorldResponseDto {
  constructor({ helloWorld }: { helloWorld: string }) {
    this.helloWorld = helloWorld;
    this.status = 'success';
    this.date = new Date();
  }
  helloWorld: string;
  status: string;
  date: Date;
}
