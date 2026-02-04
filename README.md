# Practical lesson pz-GOF  
# Реалізація GOF патернів проєктування  

> У цьому занятті студенти отримують практичний досвід імплементації класичних патернів проєктування (GoF — Gang of Four).  
> Мета — навчитися застосовувати породжувальні, структурні та поведінкові патерни для покращення архітектури програмних рішень.


## What need to do:
* Ознайомитися з основними групами патернів GoF:
  * Породжувальні (Creational)
  * Структурні (Structural)
  * Поведінкові (Behavioral)
* Реалізувати:
  * **2 породжувальні патерни** (наприклад: Factory Method, Abstract Factory, Builder, Singleton, Prototype)
  * **2 структурні патерни** (наприклад: Adapter, Facade, Decorator, Composite, Proxy, Bridge)
  * **1 поведінковий патерн** (наприклад: Strategy, Observer, Command, Iterator, Chain of Responsibility)
* Продемонструвати роботу кожного патерна (консольний приклад або простий сценарій)
* Пояснити, яку проблему вирішує кожен патерн
* Порівняти, як патерни покращують архітектуру коду порівняно з «анти-прикладами»
* Підготувати коротку документацію в README.md


## Acceptance criteria
* Використовуючи мову програмування Typescript
* Реалізовано **мінімум 5 патернів**:
  * 2 породжувальні
  * 2 структурні
  * 1 поведінковий
* Кожен патерн:
  * реалізований у окремій директорії  
  * має зрозумілий приклад застосування  
  * має коротке пояснення призначення  
  * демонструє очікувану роботу (через console.log або unit-тест)
* Код структурований за групами патернів
* README.md містить:
  * опис реалізованих патернів  
  * приклади запуску  
  * короткі висновки  
* Самостійна робота виконана:
  * додаткові патерни / додаткові приклади / альтернативні реалізації (опціонально)
* Проєкт успішно запускається

## Directory Structure

```
├── pz-GOF
│   ├── src
│   │   ├── creational
│   │   │   ├── factory-method
│   │   │   ├── builder
│   │   │   ├── singleton
│   │   │   └── prototype
│   │   ├── structural
│   │   │   ├── adapter
│   │   │   ├── facade
│   │   │   ├── decorator
│   │   │   └── bridge
│   │   ├── behavioral
│   │   │   ├── strategy
│   │   │   ├── observer
│   │   │   └── command
│   ├── examples
│   │   ├── run-all.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
└──

```
## Implemented patterns ✅

This repository includes working TypeScript examples and short explanations for the following patterns:

- **Creational**
  - `singleton` — guarantees a single instance and a global access point. (`src/creational/singleton`) ✅
  - `prototype` — create new objects by cloning existing ones. (`src/creational/prototype`) ✅
- **Structural**
  - `adapter` — adapts an incompatible interface to a client's expected interface. (`src/structural/adapter`) ✅
  - `bridge` — decouples abstraction from implementation so they can vary independently. (`src/structural/bridge`) ✅
- **Behavioral**
  - `command` — encapsulates requests as objects to parameterize clients and support queuing/undo. (`src/behavioral/command`) ✅

Each pattern lives in its own directory with:
- an implementation file(s),
- `index.ts` exposing a `runXxx()` demo function,
- `README.md` with a short explanation and run instructions.

## How to run ▶️

1. Install dependencies: `npm install`
2. Run all demos: `npm start` — this executes `examples/run-all.ts` and prints the demo outputs to the console.

Example output (trim):

```
✅ Запуск усіх прикладів:

--- Singleton pattern demo ---
First instance value: 0.21...
Second instance value (after set): 123

--- Prototype pattern demo ---
Original: Product{...}
Copy    : Product{...}

--- Adapter pattern demo ---
Adapter request (translated): Adapter: (translated) Special behavior of the Adaptee.

--- Command pattern demo ---
Receiver: turned ON
Receiver: turned OFF
```

## Short conclusions ✍️

- All required acceptance criteria are met: patterns are grouped by category, have runnable demos and short documentation.
- Next improvements (optional): add unit tests (Jest), additional patterns (Facade, Decorator, Strategy, Observer), and more detailed explanations/comments for each file.

## Useful links

[Refactoring Guru — Патерни проєктування](https://refactoring.guru/uk/design-patterns)

[Design Patterns in JavaScript](https://www.patterns.dev/posts/classic-design-patterns/)

[Head First Design Patterns (book)](https://www.oreilly.com/library/view/head-first-design/0596007124/)

[JavaScript Design Patterns — Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[Gang of Four (GoF) Patterns Overview](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns)
