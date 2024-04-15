<script setup lang="ts">
//---------------------
// Reusable interfaces
//---------------------
interface hasQuantity {
  quantity: number;
}

const something: hasQuantity = { quantity: 50 };

function printQuantity(item: hasQuantity): void {
  console.log(
    "Reusable interfaces: printQuantity\n",
    `The quantity of this item is ${item.quantity}`,
  );
}

const fruit = {
  name: "mango",
  quantity: 50,
};
const vehicle = {
  type: "car",
  quantity: 3,
};
const person = {
  name: "Mario",
  age: 30,
};

printQuantity(fruit);
printQuantity(vehicle);
//printQuantity(person);

//printQuantity({quantity: 50, title: 'hello'})
//object literal directly not allowed

//---------------------
// Extending interfaces
//---------------------
interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: string | number;
  amount: number;
  server: string;
}

const bill = {
  id: 2,
  amount: 50,
  server: "Mario",
  format(): string {
    return `Bill with id ${this.id} has $${this.amount} to pay`;
  },
};

function printFormattedBill(val: HasFormatter): void {
  console.log("Extending interfaces: printFormattedBill\n", val.format());
}

function printBill(bill: Bill): void {
  console.log("Extending interfaces: printBill\n", "server: ", bill.server);
  console.log("Extending interfaces: printBill\n", bill.format());
}

printFormattedBill(bill);
//printBill(User);
printBill(bill);

//---------------------
// Extending type aliases
//---------------------

type Person = {
  id: string | number;
  firstName: string;
};

type User = Person & {
  email: string;
};

const personOne = {
  id: 1,
  firstName: "Mario",
};
const personTwo = {
  id: "2",
  firstName: "Luigi",
  email: "luigi@dev.com",
};
const personThree = {
  email: "peach@dev.com",
};

function printUser(user: User) {
  console.log(
    "Extending type aliases: printUser\n",
    user.id,
    user.firstName,
    user.email,
  );
}

//printUser(personOne);
printUser(personTwo);
//printUser(personThree);

//---------
// Classes
//---------
type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}
abstract class MenuItem implements HasFormatter {
  constructor(
    private title: string,
    private price: number,
  ) {}
  get details(): string {
    return `${this.title} - $${this.price}`;
  }
  abstract format(): string;
}
class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }
  format(): string {
    let formatted = this.details + "\n";
    //base
    formatted += `Pizza on a ${this.base} base `;
    //toppings
    if (this.toppings.length < 1) {
      formatted += "with no toppings";
    }
    if (this.toppings.length > 0) {
      formatted += `with ${this.toppings.join(", ")}`;
    }
    return formatted;
  }
}

const pizzaOne: Pizza = new Pizza("Mario special", 15);
const pizzaTwo = new Pizza("Mario special", 15);

pizzaOne.selectBase("thin");
pizzaOne.addTopping("mushrooms");
pizzaOne.addTopping("olives");
pizzaOne.removeTopping("mushrooms");

console.log("Classes\n", pizzaOne);

function printFormattedPizza(val: HasFormatter): void {
  console.log("Classes: printFormattedPizza\n", val.format());
}

printFormattedPizza(pizzaOne);
printFormattedPizza(pizzaTwo);

function addMushroomsToPizzas(pizzas: Pizza[]): void {
  for (const p of pizzas) {
    p.addTopping("mushrooms");
  }
}

console.log("Classes\n", pizzaOne, pizzaTwo);

addMushroomsToPizzas([pizzaOne, pizzaTwo]);

function printMenuItem(item: MenuItem): void {
  console.log("Classes: printMenuItem\n", item.details);
}

printMenuItem(pizzaOne);

//-----------------
// Generic Classes
//-----------------

interface HasId {
  id: number;
}
class DataCollection<T extends HasId> {
  constructor(private data: T[]) {}
  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }
  loadAll(): T[] {
    return this.data;
  }
  add(val: T): T[] {
    this.data.push(val);
    return this.data;
  }
  deleteOne(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

interface GenericClassUser {
  name: string;
  score: number;
  id: number;
}

const users = new DataCollection<GenericClassUser>([
  { name: "Mario", score: 100, id: 1 },
  { name: "Luigi", score: 50, id: 2 },
  { name: "Peach", score: 150, id: 3 },
]);

users.add({ name: "Yoshi", score: 20, id: 4 });

console.log("Generics\n", "Load one - ", users.loadOne());
console.log("Generics\n", "Load all - ", users.loadAll());
</script>

<template>
  <div>
    <h2 class="text-3xl my-6 text-slate-900">Docs</h2>

    <ul class="mb-7">
      <li><NuxtLink to="#inference">Inference</NuxtLink></li>
      <li>
        <NuxtLink to="#null-and-undefined">Null & Undefined</NuxtLink>
      </li>
      <li>
        <NuxtLink to="#arrays-and-object-literals"
          >Arrays & Object literals</NuxtLink
        >
      </li>
      <li><NuxtLink to="#functions">Functions</NuxtLink></li>
      <li><NuxtLink to="#any">Any</NuxtLink></li>
      <li><NuxtLink to="#tuples">Tuples</NuxtLink></li>
      <li><NuxtLink to="#interfaces">Interfaces</NuxtLink></li>
      <li>
        <NuxtLink to="#function-signatures">Function signatures</NuxtLink>
      </li>
      <li><NuxtLink to="#type-aliases">Type aliases</NuxtLink></li>
      <li><NuxtLink to="#union-types">Union types</NuxtLink></li>
      <li><NuxtLink to="#type-guards">Type guards</NuxtLink></li>
      <li><NuxtLink to="#classes">Classes</NuxtLink></li>
      <li><NuxtLink to="#generics">Generics</NuxtLink></li>
      <li><NuxtLink to="#sets">Sets</NuxtLink></li>
      <li><NuxtLink to="#enums">Enums</NuxtLink></li>
    </ul>

    <!-- Inference -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="inference">Inference</h3>
        <div class="bg-gray-700 rounded p-4 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let age: number = 30
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>let age = 30
            <span class="pl-2 text-green-400 italic">number</span>
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>let age = '30'
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Null & Undefined -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="null-and-undefined">
          Null & Undefined
        </h3>
        <div class="bg-gray-700 rounded p-4 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let something: null
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>let something: 1
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p><span class="pr-6 text-slate-400">3</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>let somethingElse:
            undefined
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>let somethingElse:
            'something'
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Arrays & Object literals -->
    <div class="pb-10">
      <div class="pb-6">
        <h3
          class="text-2xl mb-2 text-slate-800"
          id="arrays-and-object-literals"
        >
          Arrays & Object literals
        </h3>
        <p class="text-slate-700 pb-2">Arrays</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let names: string[] =
            ['Mario', 'Luigi']
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>let ages: number[] = [1,
            2]
          </p>
          <p><span class="pr-6 text-slate-400">3</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>names.push('Peach')
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>ages.push(3):
          </p>
        </div>

        <p class="text-slate-700 pb-2">Type inference with arrays</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let fruits = ['apples',
            'pears', 'bananas', 'mangos']
            <span class="pl-2 text-green-400 italic">let fruits: string[]</span>
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>fruits.push(25)
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>const f = fruits[3]
            <span class="pl-2 text-green-400 italic">const f: string</span>
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>let things = [1, true,
            'hello']
            <span class="pl-2 text-green-400 italic"
              >let things: (string | number | boolean)[]</span
            >
          </p>
          <p><span class="pr-6 text-slate-400">8</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>const t = things[0]
            <span class="pl-2 text-green-400 italic"
              >const t: string | number | boolean</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Object literals</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let user: { firstName:
            string, age: number, id: number } = { firstName: 'Mario', age: 30,
            id: 1 }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>user.firstName = 25
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>user.firstName = '25'
          </p>
        </div>

        <p class="text-slate-700 pb-2">Type inference with object literals</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let person: { name:
            'Mario', score: 30 }
            <span class="pl-2 text-green-400 italic"
              >let person: {name: string score: number;}</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Functions -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="functions">Functions</h3>
        <p class="text-slate-700 pb-2">Functions and type inference</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function addTwoNumbers(a,
            b) { return a + b }
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>function addTwoNumbers(a:
            number, b:number): number { return a + b }
            <span class="pl-2 text-green-400 italic">returns a number</span>
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>function
            subtractTwoNumbers(a: number, b: number): number => { return a - b }
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>addTwoNumbers(10, 7)
          </p>
          <p><span class="pr-6 text-slate-400">8</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>function
            addAllNumbers(items: number[]) { const total = items.reduce((a, c)
            => a + c, 0)} }
          </p>
          <p><span class="pr-6 text-slate-400">10</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">11</span>addAllNumbers([1, 2, 3,
            4])
            <span class="pl-2 text-green-400 italic"
              >function addAllNumbers(items: number[]): void</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Return type inference</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function
            formatGreeting(name: string, greeting: string) { return
            `${greeting}, ${name}` }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const result =
            formatGreeting('mario', 'hello')
            <span class="pl-2 text-green-400 italic">const result: string</span>
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Any -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="any">Any</h3>
        <p class="text-slate-700 pb-2">Any type</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let age: any
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>let title
            <span class="pl-2 text-green-400 italic">let title: any</span>
          </p>
        </div>

        <p class="text-slate-700 pb-2">Any type in arrays</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let things: any[] =
            ['hello', null]
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>things.push({id: 1, name:
            'Mario'})
          </p>
        </div>

        <p class="text-slate-700 pb-2">Functions & any</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function
            addTogether(value: any): any { return value + value }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const resultOne =
            addTogether('hello')
            <span class="pl-2 text-green-400 italic">'hellohello'</span>
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>const resultOne =
            addTogether(3)
            <span class="pl-2 text-green-400 italic">6</span>
          </p>
          <p><span class="pr-6 text-slate-400">5</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">6</span>
            <span class="text-green-400 italic"
              >Useful when migrating from js to ts because using 'any' won't
              cause errors initially</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Tuples -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="tuples">Tuples</h3>
        <p class="text-slate-700 pb-2">Tuples</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let person: [string,
            number, boolean] = ['mario', 30, false]
            <span class="pl-2 text-green-400 italic"
              >strict order of values</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Tuples examples</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let hsla: [number, string,
            string, number]
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>hsla = [200, '100%',
            '50%', 1]
            <span class="pl-2 text-green-400 italic"
              >hue, saturation, lightness, alpha</span
            >
          </p>
          <p><span class="pr-6 text-slate-400">3</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>let xy: [number, number]
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>xy = [94.7, 20.1]
            <span class="pl-2 text-green-400 italic">coordinates</span>
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>function useCoords():
            [number, number] { const lat = 100 const long = 50 return [lat,
            long] }
          </p>
          <p><span class="pr-6 text-slate-400">8</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>const [lat, long] =
            useCoords()
          </p>
        </div>

        <p class="text-slate-700 pb-2">Named tuples</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let user: [name: string,
            age: number]
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>user = ['Peach', 25]
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>console.log(user[0])
            <span class="pl-2 text-green-400 italic"
              >(property) 0: string (name)</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Interfaces -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="interfaces">Interfaces</h3>
        <ul class="pb-5 text-slate-900">
          <li>- An object has to match the structure of its interface type</li>
          <li>
            - A variable that adheres to a given interface can be used as an
            implementation of that interface
          </li>
          <li>
            - Passing in an object literal that matches the interface type
            object directly into the function call
            <i>is allowed</i>
          </li>
          <li>
            - Passing in an object literal that includes and adds to the
            interface type object directly into the function call
            <i>is NOT allowed</i>
          </li>
          <li>
            - Interfaces that extends other interfaces inherits their properties
          </li>
          <li>
            - Objects using an interface that extends an existing interface
            <i>must</i> include the extended interface type
          </li>
        </ul>
        <p class="text-slate-700 pb-2">Interfaces</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>interface Author { name:
            string, avatar: string }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const authorOne: Author =
            {name: 'Mario', avatar: '/img/mario.png'}
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>interface Post { title:
            string, body: string, tags: string[], created_at: Date, author:
            Author }
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>const newPost: Post = {
            title: 'First post', body: 'Something interesting', tags: ['gaming',
            'tech'], created_at: new Date(), author: authorOne }
          </p>
        </div>

        <p class="text-slate-700 pb-2">Interfaces as function argument types</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function createPost(post:
            Post): void { console.log(`Created ${post.created_at} by
            ${post.author.name}`) }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>createPost(newPost)
            <span class="pl-2 text-green-400 italic"
              >Created First post by Mario</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Interfaces with arrays</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let posts: Post[] = []
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>posts.push({title:
            'Hello', body: 'Hello again'})
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p><span class="pr-6 text-slate-400">3</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>posts.push({ title: 'First
            post', body: 'Something interesting', tags: ['gaming', 'tech'],
            created_at: new Date(), author: authorOne })
            <span class="pl-2 text-green-400 italic"
              >same as posts.push(newPost)</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Function signatures -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="function-signatures">
          Function signatures
        </h3>

        <p class="text-slate-700 pb-2">Function signatures</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>type Calculator = (numOne:
            number, numTwo: number) =>
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>function addTwoNumbers(a:
            number, b: number) { return a + b }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>function
            multiplyTwoNumbers(first: number, second: number) { return first *
            second }
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>function
            squareTwoNumbers(num: number) { return num * num }
          </p>
          <p><span class="pr-6 text-slate-400">8</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>function
            joinTwoNumbers(numOne: number, numTwo: number) { return
            `${numOne}${numTwo}` }
          </p>
          <p><span class="pr-6 text-slate-400">10</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">11</span>let calcs: Calculator[] =
            []
          </p>
          <p><span class="pr-6 text-slate-400">12</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">13</span>calcs.push(addTwoNumbers)
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">14</span
            >calcs.push(multiplyTwoNumbers)
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">15</span
            >calcs.push(joinTwoNumbers)
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">16</span
            >calcs.push(squareTwoNumbers)
            <span class="pl-2 text-green-400 italic"
              >None or one argument will still match the function
              signature</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Function signatures in interfaces</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>interface HasArea { name:
            string calcArea: (a: number) => number }
            <span class="pl-2 text-green-400 italic"
              >calcArea(a: number): number</span
            >
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const shapeOne: HasArea =
            { name: 'square' calcArea(1: number) { return 1 * 1 } }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>const shapeTwo: HasArea =
            { name: 'circle' calcArea(1: number) { return Math.PI * r^2 } }
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>shapeOne.calcArea(3)
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">8</span>shapeTwo.calcArea(10)
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Type Aliases -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="type-aliases">
          Type aliases
        </h3>
        <p class="text-slate-700 pb-2">Tuple example</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>type Rgb = [number,
            number, number]
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>function getRandomColor():
            Rgb { const r = Math.floor(Math.random() * 255) const g =
            Math.floor(Math.random() * 255) const b = Math.floor(Math.random() *
            255) return [r, g, b] }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>const colorOne =
            getRandomColor()
            <span class="pl-2 text-green-400 italic">const colorOne: Rgb</span>
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>console.log(colorOne)
            <span class="pl-2 text-green-400 italic">[ 214, 2, 78 ]</span>
          </p>
        </div>

        <p class="text-slate-700 pb-2">Object literal</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>type User = { name: string
            score: number }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const userOne: User = {
            name: 'Mario', score: 75 }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400" style="text-indent: 40px"
              >5</span
            >function formatUser(user: User): void { console.log(`${user.name}
            has a score of ${user.score}`) }
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>formatUser(userOne)
            <span class="pl-2 text-green-400 italic"
              >Mario has a score of 75</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Extending type aliases</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>type Person = { id: string
            | number; firstName: string; };
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>type User = Person & {
            email: string; };
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400" style="text-indent: 40px"
              >5</span
            >const personOne = { id: 1, firstName: "Mario", };
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>const personTwo = { id:
            "2", firstName: "Luigi", email: "luigi@dev.com", };
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">8</span>const personThree = {
            email: "peach@dev.com", };
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>function printUser(user:
            User) { console.log(user.id, user.firstName, user.email); }
          </p>
          <p><span class="pr-6 text-slate-400">10</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">11</span>printUser(personOne);
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">12</span>printUser(personTwo);
            <span class="pl-2 text-green-400 italic"
              >2 Luigi luigi@dev.com</span
            >
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">13</span>printUser(personThree);
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Union types -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="union-types">
          Union types
        </h3>

        <p class="text-slate-700 pb-2">Union type</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>let email: string | null =
            null
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>type Id = number | string
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>let anotherId: Id
          </p>
          <p><span class="pr-6 text-slate-400">5</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">6</span>anotherId = '2=|[fSJEFI?'
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>anotherId = 6
          </p>
        </div>

        <p class="text-slate-700 pb-2">Union type pitfall</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function swapIdType(id:
            Id): Id { parseInt(id) return id }
            <span class="pl-2 text-pink-400 italic">error</span>
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>
            <span class="pl-2 text-green-400 italic"
              >Can only use props and methods common to both number and string
              types</span
            >
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>
            <span class="pl-2 text-green-400 italic"
              >parseInt(id) => not allowed</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Type guards -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="type-guards">
          Type guards
        </h3>

        <p class="text-slate-700 pb-2">Type guards</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>type Id = number | string
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>function swapIdType(id:
            Id): { if (typeof id === string) { return parseInt(id) } else {
            return id.toString() } }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>const idOne =
            swapIdType(1)
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>const idTwo =
            swapIdType('2')
          </p>
          <p><span class="pr-6 text-slate-400">8</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>console.log(idOne, idTwo)
            <span class="pl-2 text-green-400 italic">'1' 2</span>
          </p>
        </div>

        <p class="text-slate-700 pb-2">Tagged interfaces</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>interface User { type:
            'user' username: string email: string id: Id }
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">2</span>interface Person { type:
            'person' firstname: string age: number id: Id }
          </p>
          <p><span class="pr-6 text-slate-400">3</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>function logDetails(value:
            User | Person): void { if(value.type) === 'user' {
            console.log(value.email) } if (value.type === 'person) {
            console.log(value.age) } }
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span
            ><span class="text-green-400 italic"
              >Typescript knows which interface we refer to due to tagged
              interface type guard</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Classes -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="classes">Classes</h3>
        <ul class="mb-6 text-slate-900">
          <li>- A way to create objects with a certain structure</li>
          <li>
            - Typescript classes allows us to create new class objects, whereas
            an interface does not
          </li>
          <li>- Access modifiers for property protection</li>
          <li>- Access modifiers for property protection</li>
        </ul>
      </div>
      <hr />
    </div>

    <!-- Generics -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="generics">Generics</h3>
        <ul class="mb-6 text-slate-900">
          <li>
            - A way to make generic, reusable structures by passing in the data
            types themselves into those structures
          </li>
        </ul>
        <p class="text-slate-700 pb-2">Example 1</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function
            functionlogAndReturnValue&lt;T&gt;(val: T): T { console.log(val)
            return val }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const resultOne =
            logAndReturnValue&lt;string&gt;('Peach')
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>const resultTwo =
            logAndReturnValue&lt;number&gt;(25)
          </p>
        </div>

        <p class="text-slate-700 pb-2">Example 2</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function
            getRandomArrayValue&lt;T&gt;(values: T[]): T { const i =
            Math.floor(Math.random() * values.length return values[i] }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>interface User { name:
            string score: number }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>const users: User[] = [ {
            name: 'Mario', score: 100 }, { name: 'Luigi', score: 50 }, { name:
            'Peach', score: 150 }, { name: 'Yoshi', score: 20 } ]
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>const randomUser =
            getRandomArrayValue&lt;User&gt;(users)
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">8</span>console.log(randomUser)
            <span class="pl-2 text-green-400 italic"
              >{ name: 'Peach', score: 150 }</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Intersection type with generics</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>interface HasID { id:
            number }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>function
            addIdToValue&lt;T&gt;(val: T): T & HasID { const id = Math.random()
            return { ...val, id } }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>interface Post { title:
            string thumbsUp: number }
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>const post =
            addIdToValue&lt;Post&gt;( { title: 'Hello, Mario', thumbsUp: 250 } )
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">8</span>console.log(post.id,
            post.title, post.thumbsUp)
            <span class="pl-2 text-green-400 italic"
              >72835 Hello, Mario 250</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Generic interfaces</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>interface
            Collection&lt;T&gt; { data: T[] name: string }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const collectionOne:
            Collection&lt;string&gt; = { data: ['Mario', 'Luigi', 'Peach'] name:
            'Mario characters' }
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">4</span>const collectionTwo:
            Collection&lt;number&gt; = { data: [10, 15, 24, 33, 35, 3, 7] name:
            'Winning lottery numbers' }
          </p>
          <p><span class="pr-6 text-slate-400">5</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">6</span>function
            randomCollectionItem&lt;T&gt;(c: Collection&lt;T&gt;): T { const i =
            Math.floor(Math.random() * c.data.length) return c.data[i] }
          </p>
          <p><span class="pr-6 text-slate-400">7</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">8</span>const resultOne =
            randomCollectionItem&lt;string&gt;(collectionOne)
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>const resultTwo =
            randomCollectionItem(collectionTwo)
            <span class="pl-2 text-green-400 italic"
              >Invoking the function infers the value type</span
            >
          </p>
          <p><span class="pr-6 text-slate-400">10</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">11</span>console.log(resultOne,
            resultTwo)
            <span class="pl-2 text-green-400 italic">Luigi, 35</span>
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Sets -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="sets">Sets</h3>
        <p class="text-slate-700 pb-2">Sets in typescript</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>const names = new
            Set&lt;string&gt;()
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>names.add('Mario')
            names.add('Luigi') names.add('Peach') names.add('Mario')
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>console.log(names)
            <span class="pl-2 text-green-400 italic"
              >{ 'Mario', 'Luigi', 'Peach'}</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Sets with custom types</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>interface User { email:
            string score: number }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>const user1: User = {
            email: 'mario@dev.com', score: 1 } user2: User = { email:
            'luigi@dev.com', score: 2 }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>const users = new
            Set&lt;User&gt;()
          </p>
          <p><span class="pr-6 text-slate-400">6</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">7</span>users.add(user1)
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">8</span>users.add(user2)
          </p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">9</span>users.add(user1)
          </p>
          <p><span class="pr-6 text-slate-400">10</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">11</span>console.log(users)
            <span class="pl-2 text-green-400 italic"
              >{ email: 'mario@dev.com', score 1 }, { email: 'luigi@dev.com',
              score 2 },</span
            >
          </p>
        </div>

        <p class="text-slate-700 pb-2">Sets as function arguments</p>
        <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>function
            logUserEmails(users: Set&lt;User&gt;): void { users.forEach{ (user)
            => console.log(user.email) } }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>
            <span class="pl-2 text-green-400 italic"
              >mario@dev.com luigi@dev.com</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>

    <!-- Enums -->
    <div class="pb-10">
      <div class="pb-6">
        <h3 class="text-2xl mb-2 text-slate-800" id="enums">Enums</h3>
        <div class="bg-gray-700 rounded p-4 font-mono">
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">1</span>enum Priority { Lowest = 0
            Medium = 1 High = 2 Urgent = 3 }
          </p>
          <p><span class="pr-6 text-slate-400">2</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">3</span>function
            addTicket(details: string, priority: Priority) { if (priority ===
            Priority.Lowest) { ... } ... }
          </p>
          <p><span class="pr-6 text-slate-400">4</span>&nbsp;</p>
          <p class="text-slate-50 indent">
            <span class="pr-6 text-slate-400">5</span>addTicket('fix computer',
            Priority.Urgent)
            <span class="pl-2 text-green-400 italic"
              >Will also accept a number from Priority</span
            >
          </p>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.indent {
  text-indent: -25px;
  margin-left: 25px;
}
</style>
