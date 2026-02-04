import { Command } from './command';

export class Invoker {
  private command?: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    if (!this.command) {
      console.log('Invoker: No command set');
      return;
    }
    this.command.execute();
  }
}
