С помощью шаблона Singleton мы ограничиваем создание экземпляров определенных классов одним экземпляром. Этот единственный экземпляр не подлежит изменению, и к нему можно получить глобальный доступ во всем приложении.

### Example 1 Class
```js
let instance;

// 1. Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// Within the constructor, we check to make sure the class hasn't already been instantiated.
class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    this.counter = counter;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}
const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
```

### Example 2 Object
```js
let counter = 0;

const counterObject = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

const singletonCounter = Object.freeze(counterObject);


export default singletonCounter;
```

### Example 3 Object
```js

let counter = 0;

export default Object.freeze({
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
});
```



