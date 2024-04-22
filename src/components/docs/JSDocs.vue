<script setup lang="ts"></script>

<template>
  <!-- Control Flow Basics -->
  <div class="pb-10">
    <div class="pb-6">
      <h3 class="text-2xl mb-2 text-slate-800" id="control-flow-basics">
        Control Flow Basics
      </h3>
      <p class="text-slate-700 pb-2" id="for-loops">For loops</p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const names = ['Mario',
          'Luigi'];
        </p>
        <p><span class="pr-6 text-slate-400">2</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>for(let i = 0; i <
          names.length; i++) { let html = `&lt;div&gt;${names[i]}&lt;/div&gt;`;
          }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">4</span>
          <span class="text-green-400 italic"
            >&lt;div&gt;Mario&lt;/div&gt;</span
          >
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">5</span>
          <span class="text-green-400 italic"
            >&lt;div&gt;Luigi&lt;/div&gt;</span
          >
        </p>
      </div>
      <p class="text-slate-700 pb-2" id="while-loops">While loops</p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const names = ['Mario',
          'Luigi'];
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">2</span>let i = 0;
        </p>
        <p><span class="pr-6 text-slate-400">3</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">4</span>while(i < names.length) {
          i++ }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">5</span>
          <span class="text-green-400 italic">Mario</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">6</span>
          <span class="text-green-400 italic">Luigi</span>
        </p>
      </div>
      <p class="text-slate-700 pb-2" id="do-while-loops">Do while loops</p>
      <ul class="pb-5 text-slate-800">
        <li>
          - Run the 'do' block once, regardless of the condition being true or
          not
        </li>
        <li>- While the condition is true, run the 'do' block again</li>
      </ul>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>let i = 5;
        </p>
        <p><span class="pr-6 text-slate-400">2</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>do { console.log('val of i
          is ', i); i++; } while(i < 5);
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">4</span>
          <span class="text-green-400 italic">val of i is 5</span>
        </p>
      </div>
      <p class="text-slate-700 pb-2" id="if-and-else-statements">
        if & else statements
      </p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const password = p@ss;
        </p>
        <p><span class="pr-6 text-slate-400">2</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>if(password.length >= 12) {
          console.log('Strong')}
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">4</span>
          else if(password.length >= 8) { console.log('Long enough') }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">5</span>
          else { console.log('Not long enough') }
        </p>
        <p><span class="pr-6 text-slate-400">6</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">7</span>
          <span class="text-green-400 italic">Not long enough</span>
        </p>
      </div>
      <p class="text-slate-700 pb-2" id="logical-operators">
        Logical operators
      </p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const password = p@ss;
        </p>
        <p><span class="pr-6 text-slate-400">2</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>if(password.length >= 12 &&
          password.includes('@')) { console.log('Strong')}
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">4</span>
          else if(password.length >= 8 || password.includes('@')) {
          console.log('Strong enough') }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">5</span>
          else { console.log('Not strong enough') }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">6</span>
          <span class="text-green-400 italic">Strong enough</span>
        </p>
        <p><span class="pr-6 text-slate-400">7</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">8</span>let user = false
        </p>
        <p><span class="pr-6 text-slate-400">9</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">10</span>if(!user) {
          console.log('You must be logged in to continue') }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">11</span>
          <span class="text-green-400 italic">true</span>
        </p>
      </div>
      <p class="text-slate-700 pb-2" id="break-and-continue">
        Break & continue
      </p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const scores = [50, 0, 100,
          25, 40]
        </p>
        <p><span class="pr-6 text-slate-400">2</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>for(let i = 0; i <
          scores.length; i++) {
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">4</span>
          if(scores[i] === 0) { continue; }
          <span class="text-green-400 italic">50, 100, 25, 40</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">5</span>
          if(scores[i] === 100) { break; }
          <span class="text-green-400 italic">50, 100</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">6</span>}
        </p>
      </div>
      <p class="text-slate-700 pb-2" id="switch-statement">Switch statement</p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const grade = 'D'
        </p>
        <p><span class="pr-6 text-slate-400">2</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>switch(grade) {
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">4</span>
          case 'A':
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">5</span>
          console.log('You got an A')
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">6</span>
          break;
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">7</span>
          case 'B':
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">8</span>
          console.log('You got a B')
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">9</span>
          break;
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">10</span>
          case 'C':
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">11</span>
          console.log('You got a C')
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">12</span>
          break;
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">13</span>
          case 'D':
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">14</span>
          console.log('You got a D')
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">15</span>
          break;
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">16</span>
          case 'F':
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">17</span>
          console.log('You got an F')
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">18</span>
          break;
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">19</span>
          default:
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-8 text-slate-400">20</span>
          console.log('Not a valid grade')
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">21</span>}
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">22</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">23</span>
          <span class="text-green-400 italic">You got a D</span>
        </p>
      </div>
      <p class="text-slate-700 pb-2" id="block-scope">Block scope</p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const age = 30
        </p>
        <p><span class="pr-6 text-slate-400">2</span></p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>if(true) { const age = 40;
          console.log(age) }
          <span class="text-green-400 italic">outside code block: 40</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">4</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-4 text-slate-400">5</span>
          console.log(age)
          <span class="text-green-400 italic">outside code block: 30</span>
        </p>
      </div>
    </div>
    <hr />
  </div>

  <!-- Functions & Methods -->
  <div class="pb-10">
    <div class="pb-6">
      <h3 class="text-2xl mb-2 text-slate-800" id="functions-and-methods">
        Functions & Methods
      </h3>
      <p class="text-slate-700 pb-2" id="function-declarations-and-expressions">
        Function declarations & expressions
      </p>
      <ul class="pb-5 text-slate-800">
        <li class="italic">
          - "A function expression produces a value, while a function statement
          performs an action."
        </li>
        <li>
          - Function statements are hoisted, meaning they can be (in most cases)
          invoked over the function statements themselves
        </li>
      </ul>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>function greet() {
          console.log('hello') }
          <span class="text-green-400 italic">function declaration</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">2</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>const speak = function() {
          console.log('hello again') };
          <span class="text-green-400 italic">function expression</span>
        </p>
      </div>

      <p class="text-slate-700 pb-2" id="arguments-and-parameters">
        Arguments & parameters
      </p>
      <ul class="pb-5 text-slate-800">
        <li>- Uses strict order for arguments</li>
      </ul>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const speak = function(name
          = 'Luigi', time = 'night') { console.log(`good ${time}, ${name}`); }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">2</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>speak('Mario');
          <span class="text-green-400 italic">good night, Mario</span>
        </p>
      </div>

      <p class="text-slate-700 pb-2" id="returning-values">Returning values</p>
      <ul class="pb-5 text-slate-800">
        <li>- Use/reuse a value that a function returns</li>
      </ul>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const calcArea =
          function(radius) { return 3.14 * radius**2; };
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">2</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>const area = calcArea(5);
          <span class="text-green-400 italic">78.5</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">4</span>
        </p>
      </div>

      <p class="text-slate-700 pb-2" id="arrow-functions">Arrow functions</p>
      <ul class="pb-5 text-slate-800">
        <li>
          - Arrow functions are different than regular functions when refering
          to 'this':....
        </li>
      </ul>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const calcArea = radius =>
          3.14 * radius**2;
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">2</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>const area = calcArea(5);
          <span class="text-green-400 italic">78.5</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">4</span>
        </p>
      </div>

      <p class="text-slate-700 pb-2" id="functions-vs-methods">
        Functions vs methods
      </p>
      <ul class="pb-5 text-slate-800">
        <li>
          - Methods are functions which are associated with an object or data
          type
        </li>
      </ul>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const name = 'mario'
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">2</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>const greet = () => 'hello';
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">4</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">5</span>let resultOne = greet();
          <span class="text-green-400 italic">(function) hello</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">6</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">7</span>name.toUppercase()
          <span class="text-green-400 italic">(Method) 'Mario'</span>
        </p>
      </div>

      <p class="text-slate-700 pb-2" id="callback-functions-and-foreach">
        Callback functions & forEach
      </p>
      <div class="bg-gray-700 rounded p-4 mb-6 font-mono">
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">1</span>const myFunc =
          (callbackFunc) => { let value = 50; callbackFunc(value) }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">2</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">3</span>myFunc(value => {
          console.log(value) })
          <span class="text-green-400 italic">Callback function defined</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">4</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">5</span>let people = ['Mario',
          'Luigi', 'Peach']
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">6</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">7</span>const logPerson = (person,
          index) => { console.log(`${index} - hello ${person}`) }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">8</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">9</span>const logPerson = (person,
          index) => { console.log(`${index}, - hello ${person}`) }
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">10</span>
        </p>
        <p class="text-slate-50 indent">
          <span class="pr-6 text-slate-400">11</span>people.forEach(logPerson)
        </p>
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
