<template>
  <DocsPage title="Typescript" :items="items">
    <TSDocs />
  </DocsPage>
</template>

<script setup lang="ts">
//-------------
// ts-docs.vue
//-------------
import DocsPage from "~/src/components/docs/DocsPage.vue";
import TSDocs from "~/src/components/docs/TSDocs.vue";

const items = [
  {
    name: "Inference",
    id: "inference",
  },
  {
    name: "Null & Undefined",
    id: "null-and-undefined",
  },
  {
    name: "Arrays & Object literals",
    id: "arrays-and-object-literals",
  },
  {
    name: "Functions",
    id: "functions",
  },
  {
    name: "Any",
    id: "any",
  },
  {
    name: "Tuples",
    id: "tuples",
  },
  {
    name: "Interfaces",
    id: "interfaces",
  },
  {
    name: "Function signatures",
    id: "function-signatures",
  },
  {
    name: "Type aliases",
    id: "type-aliases",
  },
  {
    name: "Union types",
    id: "union types",
  },
  {
    name: "Type guards",
    id: "type-guards",
  },
  {
    name: "Classes",
    id: "classes",
  },
  {
    name: "Generics",
    id: "generics",
  },
  {
    name: "Sets",
    id: "sets",
  },
  {
    name: "Enums",
    id: "enums",
  },
];

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
    `The quantity of this item is ${item.quantity}`
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
    user.email
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
    private price: number
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
