export class Receiver {
  private on = false;

  turnOn(): void {
    this.on = true;
    console.log('Receiver: turned ON');
  }

  turnOff(): void {
    this.on = false;
    console.log('Receiver: turned OFF');
  }

  isOn(): boolean {
    return this.on;
  }
}
