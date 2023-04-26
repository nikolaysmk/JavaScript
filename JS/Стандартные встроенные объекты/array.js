let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.at()
// Методы Array.At() принимает значение и возвращает элемент массива по индексу
const At = (newArr, at) => {
  console.log(`At: ${newArr.at(at)}`)
}
At(someArray, 3) // 4

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.copyWithin()
// Метод Array.copyWithin() копирует последовательность элементов массива внутрь массива
const CopyWithin = (newArr, target, start, end) => {
  console.log(`CopyWithin: ${newArr.copyWithin(target, start, end)}`)
}
CopyWithin(someArray, 0, 3, 6) // [4, 5, 6, 4, 5, 6, 7, 8, 9, 10]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.concat()
// Метод Array.concat() объединяет два или более массивов и возвращает новый массив
const Concat = (newArr, ...args) => {
  console.log(`Concat: ${newArr.concat(...args)}`)
}
Concat(someArray, [11, 12, 13], [14, 15, 16]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.entries()
// Метод Array.entries() возвращает новый объект Array Iterator, который содержит пары ключ/значение для каждого индекса в массиве
const Entries = newArr => {
  console.log(`Entries: ${newArr.entries()}`) // Array Iterator {} - возвращает объект итератора
}
Entries(someArray) //[Object Iterator] {}

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.every()
// Метод Array.every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции
const Every = (newArr, callback) => {
  console.log(`Every: ${newArr.every(callback)}`)
}
Every(someArray, item => item > 0) // true

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.fill()
// Метод Array.fill() заполняет все элементы массива от начального индекса до конечного индекса статическим значением
const Fill = (newArr, value, start, end) => {
  console.log(`Fill: ${newArr.fill(value, start, end)}`)
}
Fill(someArray, 0, 3, 6) // [1, 2, 3, 0, 0, 0, 7, 8, 9, 10]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.filter()
// Метод Array.filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
const Filter = (newArr, callback) => {
  console.log(`Filter: ${newArr.filter(callback)}`)
}
Filter(someArray, item => item > 5) // [6, 7, 8, 9, 10]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.find()
// Метод Array.find() возвращает первый найденный элемент массива, который удовлетворяет условию, заданному в передаваемой функции
const Find = (newArr, callback) => {
  console.log(`Find: ${newArr.find(callback)}`)
}
Find(someArray, item => item > 5) // 6

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.findIndex()
// Метод Array.findIndex() возвращает индекс первого найденного элемента массива, который удовлетворяет условию, заданному в передаваемой функции
const FindIndex = (newArr, callback) => {
  console.log(`FindIndex: ${newArr.findIndex(callback)}`)
}
FindIndex(someArray, item => item > 5) // 5

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.flat()
// Метод Array.flat() создаёт новый массив с рекурсивно поднятыми элементами вложенных подмассивов заданной глубины
const Flat = (newArr, depth) => {
  console.log(`Flat: ${newArr.flat(depth)}`)
}
Flat(someArray, 1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.flatMap()
// Метод Array.flatMap() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
const FlatMap = (newArr, callback) => {
  console.log(`FlatMap: ${newArr.flatMap(callback)}`)
}
FlatMap(someArray, item => item * 2)

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.forEach()
// Метод Array.forEach() выполняет указанную функцию один раз для каждого элемента в массиве
const ForEach = (newArr, callback) => {
  console.log(`ForEach: ${newArr.forEach(callback)}`)
}
ForEach(someArray, item => console.log(item)) // 1 2 3 4 5 6 7 8 9 10

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.includes()
// Метод Array.includes() определяет, содержит ли массив заданное значение среди своих элементов, возвращая соответствующий ответ
const Includes = (newArr, value, fromIndex) => {
  console.log(`Includes: ${newArr.includes(value, fromIndex)}`)
}
Includes(someArray, 5, 3) // true

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.indexOf()
// Метод Array.indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет
const IndexOf = (newArr, value, fromIndex) => {
  console.log(`IndexOf: ${newArr.indexOf(value, fromIndex)}`)
}
IndexOf(someArray, 5, 3) // 4

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.join()
// Метод Array.join() объединяет все элементы массива (или массивоподобного объекта) в строку
const Join = (newArr, separator) => {
  console.log(`Join: ${newArr.join(separator)}`)
}
Join(someArray, '-') // 1-2-3-4-5-6-7-8-9-10

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.keys()
// Метод Array.keys() возвращает новый объект Array Iterator, который содержит ключи каждого индекса в массиве
const Keys = newArr => {
  console.log(`Keys: ${newArr.keys()}`)
}
Keys(someArray) // Array Iterator {}

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.lastIndexOf()
// Метод Array.lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет
const LastIndexOf = (newArr, value, fromIndex) => {
  console.log(`LastIndexOf: ${newArr.lastIndexOf(value, fromIndex)}`)
}
LastIndexOf(someArray, 5, 3) // -1

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.map()
// Метод Array.map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
const Map = (newArr, callback) => {
  console.log(`Map: ${newArr.map(callback)}`)
}
Map(someArray, item => item * 2) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.pop()
// Метод Array.pop() удаляет последний элемент из массива и возвращает его
const Pop = newArr => {
  console.log(`Pop: ${newArr.pop()}`)
}
Pop(someArray) // 10

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.push()
// Метод Array.push() добавляет один или более элементов в конец массива и возвращает новую длину массива
const Push = (newArr, ...items) => {
  console.log(`Push: ${newArr.push(...items)}`)
}
Push(someArray, 11, 12, 13) // 13

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.reduce()
// Метод Array.reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение
const Reduce = (newArr, callback, initialValue) => {
  console.log(`Reduce: ${newArr.reduce(callback, initialValue)}`)
}
Reduce(someArray, (accumulator, currentValue) => accumulator + currentValue, 0) // 55

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.reduceRight()
// Метод Array.reduceRight() применяет функцию reducer к каждому элементу массива (справа-налево), возвращая одно результирующее значение
const ReduceRight = (newArr, callback, initialValue) => {
  console.log(`ReduceRight: ${newArr.reduceRight(callback, initialValue)}`)
}
ReduceRight(
  someArray,
  (accumulator, currentValue) => accumulator + currentValue,
  0,
) // 55

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.reverse()
// Метод Array.reverse() на месте обращает порядок следования элементов в массиве
const Reverse = newArr => {
  console.log(`Reverse: ${newArr.reverse()}`)
}
Reverse(someArray) // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.shift()
// Метод Array.shift() удаляет первый элемент из массива и возвращает его
const Shift = newArr => {
  console.log(`Shift: ${newArr.shift()}`)
}
Shift(someArray) // 1

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.slice()
// Метод Array.slice() возвращает новый массив, содержащий копию части исходного массива
const Slice = (newArr, begin, end) => {
  console.log(`Slice: ${newArr.slice(begin, end)}`)
}
Slice(someArray, 2, 5) // [3, 4, 5]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.some()
// Метод Array.some() проверяет, удовлетворяет ли хотя бы один элемент массива условию, заданному в передаваемой функции
const Some = (newArr, callback) => {
  console.log(`Some: ${newArr.some(callback)}`)
}
Some(someArray, item => item > 5) // true

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.sort()
// Метод Array.sort() сортирует элементы массива на месте и возвращает отсортированный массив
const Sort = (newArr, callback) => {
  console.log(`Sort: ${newArr.sort(callback)}`)
}
Sort(someArray, (a, b) => a - b) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.splice()
// Метод Array.splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые
const Splice = (newArr, start, deleteCount, ...items) => {
  console.log(`Splice: ${newArr.splice(start, deleteCount, ...items)}`)
}
Splice(someArray, 2, 3, 11, 12, 13) // [3, 4, 5]

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.unshift()
// Метод Array.unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива
const Unshift = (newArr, ...items) => {
  console.log(`Unshift: ${newArr.unshift(...items)}`)
}
Unshift(someArray, 11, 12, 13) // 13

someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Array.prototype.values()
// Метод Array.values() возвращает новый объект Array Iterator, содержащий значения для каждого индекса в массиве
const Values = newArr => {
  console.log(`Values: ${newArr.values()}`)
}
Values(someArray) // Array Iterator {}

//Array.prototype[@@iterator]()
// Метод Array[@@iterator]() возвращает новый объект Array Iterator, содержащий значения для каждого индекса в массиве
const Iterator = newArr => {
  console.log(`Iterator: ${newArr[Symbol.iterator]()}`)
}
Iterator(someArray) // Array Iterator {}

//Array.prototype[@@unscopables]()
// Метод Array[@@unscopables]() возвращает объект, содержащий имена свойств, которые не должны быть доступны в блоке with
const Unscopables = newArr => {
  const obj = newArr[Symbol.unscopables]
  console.log(
    `Unscopables: ${obj.copyWithin}, ${obj.entries}, ${obj.fill}, ${obj.find}, ${obj.findIndex}, ${obj.includes}, ${obj.keys}, ${obj.values}`,
  )
}
Unscopables(someArray) // {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, includes: true, keys: true, values: true}

//Array.prototype[@@species]()
// Метод Array[@@species]() возвращает функцию конструктора, используемую для создания производных объектов
const Species = newArr => {
  console.log(`Species: ${newArr[Symbol.species]}`)
}
Species(someArray) // function Array() { [native code] }

//Array.prototype[@@toStringTag]()
// Метод Array[@@toStringTag]() возвращает строку, которая будет использоваться в качестве имени объекта
const ToStringTag = newArr => {
  const obj = newArr[Symbol.toStringTag]
  console.log(`ToStringTag: ${obj}`)
}
ToStringTag(someArray) // Array

//Array.prototype.length
// Свойство Array.length возвращает число элементов в массиве
const Length = newArr => {
  console.log(`Length: ${newArr.length}`)
}
Length(someArray) // 10
