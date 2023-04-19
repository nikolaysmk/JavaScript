**Reflect** - это встроенный объект, который предоставляет методы для перехватываемых JavaScript операций. Эти методы аналогичны методам [[Proxy]]. `Reflect` - это не функциональный, а простой объект, он не является сконструированным.

use -> new Proxy [[Proxy]]

```js
const person = {
  name: "John Doe",
  age: 42,
  email: "john@doe.com",
  country: "Canada",
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop} is ${target[prop]}`);
    return target[prop];
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
    return true;
  },
});
```