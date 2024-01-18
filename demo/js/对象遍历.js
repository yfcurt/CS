// const uid = Symbol('id')
// const p = {
//   position: 'south',
//   foods: ['rice', 'fruit']
// }
// const o = {
//   uid: '001',
//   name: 'ct',
//   age: 26,
//   gender: 'male',
//   married: false,
//   hobbies: ['football', 'swimming'],
//   langs: {
//     chinese: 8,
//     english: 2,
//     japanese: 0,
//   }
// }
// o[Symbol('finger')] = 'finger-xxxxxx'
// o[Symbol('skin')] = 'skin-xxxxxx'

// Object.setPrototypeOf(o, p)
// console.log('o--', o)

// Object.defineProperty(o, 'age', {
//   enumerable: false
// })

// console.log('Reflect.ownKeys(o)--', Reflect.ownKeys(o))

// console.log('Object.getOwnPropertyNames(o)--', Object.getOwnPropertyNames(o))

// console.log('Object.getOwnPropertySymbols(o)--', Object.getOwnPropertySymbols(o))

// console.log('Object.assign({}, order)--', Object.assign({}, o))

// for (const key in o) {
//   // if (Object.hasOwnProperty.call(o, key)) {
//   //   const value = o[key];
//   // }
//   const value = o[key]
//   console.log('for-in-', 'key--', key, 'value--', value)
// }

const order = {
  name: 'order',
  '6': 6,
  '5': 5,
  age: 26,
  '09': 9,
  '+9': '+9',
  '7.8': 7.8,
  '7': 7,
  3: 3,
  4: 4,
}
order[Symbol('order1')] = 'so1'
order['gender'] = 'male'
order[Symbol('order2')] = 'so2'

console.log('Reflect.ownKeys(order)--', Reflect.ownKeys(order))

console.log('Object.getOwnPropertyNames(order)--', Object.getOwnPropertyNames(order))

console.log('Object.getOwnPropertySymbols(order)--', Object.getOwnPropertySymbols(order))

console.log('Object.assign({}, order)--', Object.assign({}, order))