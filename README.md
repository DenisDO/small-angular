# My Small Angular implementation
---

There are some methods in the module:
- **`directive`** - accepts a  name and a callback and registers a directive
- **`compile`** - accepts a node, checks directives on it and applies them
- **`bootstrap`** - initializes the application start. Accepts a node or has the default node with attribute `ng-app`

compile - принимает дом узел проверяет есть ли на нем диррективы зарегистрированные и применяет все по очереди

bootstrap - при вызове этого метода мы инициализируем старт нашего приложения - цепляясь либо к ноде что передали либо к ноде с атрибутом ng-app после чего вызываем compile для всех дом узлов внутри этой ноды

## 🚩 Getting Started!
---
```sh
npm i
```