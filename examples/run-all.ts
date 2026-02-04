import { runBridge } from '../src/structural/bridge';
import { runAdapter } from '../src/structural/adapter';
import { runSingleton } from '../src/creational/singleton';
import { runPrototype } from '../src/creational/prototype';
import { runCommand } from '../src/behavioral/command';

console.log('✅ Запуск усіх прикладів:');

// Creational patterns
runSingleton();
runPrototype();

// Structural patterns
runBridge();

// Adapter
runAdapter();

// Behavioral
runCommand();
