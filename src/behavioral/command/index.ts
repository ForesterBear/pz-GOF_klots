import { Receiver } from './receiver';
import { TurnOnCommand, TurnOffCommand } from './command';
import { Invoker } from './invoker';

export function runCommand(): void {
  console.log('\n--- Command pattern demo ---');

  const receiver = new Receiver();
  const turnOn = new TurnOnCommand(receiver);
  const turnOff = new TurnOffCommand(receiver);
  const invoker = new Invoker();

  invoker.setCommand(turnOn);
  invoker.executeCommand();

  invoker.setCommand(turnOff);
  invoker.executeCommand();
}

export default runCommand;
