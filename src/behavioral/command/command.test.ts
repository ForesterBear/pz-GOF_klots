import { Receiver } from './receiver';
import { TurnOnCommand, TurnOffCommand } from './command';
import { Invoker } from './invoker';

describe('Command', () => {
  test('invoker executes commands to change receiver state', () => {
    const receiver = new Receiver();
    const turnOn = new TurnOnCommand(receiver);
    const turnOff = new TurnOffCommand(receiver);
    const invoker = new Invoker();

    invoker.setCommand(turnOn);
    invoker.executeCommand();
    expect(receiver.isOn()).toBe(true);

    invoker.setCommand(turnOff);
    invoker.executeCommand();
    expect(receiver.isOn()).toBe(false);
  });
});
