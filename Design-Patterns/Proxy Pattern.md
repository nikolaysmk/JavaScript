Паттерн **Proxy Pattern** использует **Proxy** для перехвата и управления взаимодействием с целевыми объектами.

Допустим, у нас есть объект. Мы можем получить доступ к свойствам с помощью точечной или скобочной нотации, `person`.

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

```js
new Proxy (person, {
		get: (target, property) =>  Reflect.get(target, property),
		set: (target, property, value) => Reflect.set(target, property, value)
		}
	)
```



[[Reflect]]
[[Proxy]]