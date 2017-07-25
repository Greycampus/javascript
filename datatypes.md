# Datatypes

JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.
* Primitive data type
* Non-primitive (reference) data type

JavaScript is a dynamic type language, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var here to specify the data type. It can hold any type of values such as numbers, strings etc.

There are five types of primitive data types in JavaScript. They are as follows:
* String- represents sequence of characters e.g. "hello"
* Number-	represents numeric values e.g. 100
* Boolean-	represents boolean value either false or true
* Undefined-	represents undefined value
* Null-	represents null i.e. no value at all

The non-primitive data types are as follows:
* Object- represents instance through which we can access members
* Array- represents group of similar values
* RegExp- represents regular expression

## Primitive data types:

### String:

A string (or a text string) is a series of characters.
Strings are written with quotes. You can use single or double quotes:
Example:
var carName = "Volvo";   // Using double quotes
var carName = 'Volvo';   // Using single quotes

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var carName = "Volvo";
var answer = 'Its alright';
document.getElementById("demo").innerHTML =
carName + "<br>" + 
answer;
</script>
</body>
</html>
```
**Output:**
```
Volvo
Its alright
```
### Number:

JavaScript has only one type of numbers.
Numbers can be written with, or without decimals:
Example
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals

Extra large or extra small numbers can be written with scientific (exponential) notation.

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var x1 = 34.00;
var x2 = 34;
var y = 123e5;
var z = 123e-5;
document.getElementById("demo").innerHTML = x1 + "<br>" + x2 + "<br>" + y + "<br>" + z
</script>
</body>
</html>
```
**Output:**
```
34
34
12300000
0.00123
```
### Boolean:

Booleans can only have two values: true or false.

**Example**
```
var x = true;
var y = false;
```
Booleans are often used in conditional testing.

## Non-primitive data types:

### Arrays

JavaScript arrays are written with square brackets.
Array items are separated by commas.

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var cars = ["Saab","Volvo","BMW"];
document.getElementById("demo").innerHTML = cars[0];
</script>
</body>
</html>
```
**Output:**
```
Saab
```
Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

### Objects

JavaScript objects are written with curly braces.
Object properties are written as name:value pairs, separated by commas.

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};
document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
</script>
</body>
</html>
```
**Output:**
```
John is 50 years old
```
The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

