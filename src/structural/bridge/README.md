# Bridge Pattern (Приклад)

Коротко: патерн Bridge розділяє абстракцію і її реалізацію так, щоб вони могли змінюватися незалежно одна від одної.

Файли:
- `implementor.ts` — інтерфейс реалізатора
- `concreteImplementorA.ts` / `concreteImplementorB.ts` — конкретні реалізації
- `abstraction.ts` — базова абстракція
- `refinedAbstraction.ts` — розширена абстракція
- `index.ts` — приклад запуску (`runBridge()`)

Запуск прикладу: `npm start` → вивід демонструє операції для двох платформ.

Джерело й додаткова інформація: https://dev.to/jmalvarez/bridge-pattern-in-typescript-3hmj
