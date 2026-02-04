import { Receiver } from './receiver';

export interface Command {
  execute(): void;
}

export class TurnOnCommand implements Command {
  constructor(private receiver: Receiver) {}
  execute(): void {
    this.receiver.turnOn();
  }
}

export class TurnOffCommand implements Command {
  constructor(private receiver: Receiver) {}
  execute(): void {
    this.receiver.turnOff();
  }
}
