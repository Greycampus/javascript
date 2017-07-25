# Functions

A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. Functions allow a programmer to divide a big program into a number of small and manageable functions.
JavaScript functions are defined with the function keyword.
You can use a function declaration or a function expression.

### Function Declarations

Earlier in this tutorial, you learned that functions are declared with the following syntax:
```
function functionName(parameters) {
  code to be executed
}
```
Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
</script>
</body>
</html>
```
**Output:**
```
12
```
### Calling a Function

To invoke a function somewhere later in the script, you would simply need to write the name of that function as shown in the following code.

**Example:**
```
<html>
   <head>
   
      <script type="text/javascript">
         function sayHello()
         {
            document.write ("Hello there!");
         }
      </script>      
   </head>
   <body>
      <p>Click the following button to call the function</p>      
      <form>
         <input type="button" onclick="sayHello()" value="Say Hello">
      </form>      
      <p>Use different text in write method and then try...</p>
   </body>
</html>
```
**Output:**
```
Click the following button to call the function
say hello //button
Use different parameters inside the function and then try...

Hello there.
```
### Function Parameters

Till now, we have seen functions without parameters. But there is a facility to pass different parameters while calling a function. These passed parameters can be captured inside the function and any manipulation can be done over those parameters. A function can take multiple parameters separated by comma.

Parameter Rule:
* JavaScript function definitions do not specify data types for parameters.
* JavaScript functions do not perform type checking on the passed arguments.
* JavaScript functions do not check the number of arguments received.

**Example**
```
<html>
   <head>
   
      <script type="text/javascript">
         function sayHello(name, age)
         {
            document.write (name + " is " + age + " years old.");
         }
      </script>      
   </head>
   <body>
      <p>Click the following button to call the function</p>      
      <form>
         <input type="button" onclick="sayHello('Zara', 7)" value="Say Hello">
      </form>      
      <p>Use different parameters inside the function and then try...</p>
   </body>
</html>
```
**Example:**
```
Click the following button to call the function
sayHello //button
Use different parameters inside the function and then try...

Zara is 7 years old.
```
### Arguments are Passed by Value:

The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.

### Objects are Passed by Reference:

In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.

### The JavaScript call() Method

The call() method is a predefined JavaScript function method.
It can be used to invoke (call) a function with an owner object as the first argument (parameter).
With call(), you can use a method belonging to another object.

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
x = person.fullName.call(myObject); 
document.getElementById("demo").innerHTML = x; 
</script>
</body>
</html>
```
**Output:**
```
Mary Doe
```
### The JavaScript apply() Method

The apply() method is similar to the call() method:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var myObject = {
    firstName:"Mary",
    lastName: "Doe",
}
x = person.fullName.apply(myObject); 
document.getElementById("demo").innerHTML = x; 
</script>
</body>
</html>
```
**Output:**
```
Mary Doe
```
### JavaScript Nested Functions

All functions have access to the global scope.  
In fact, in JavaScript, all functions have access to the scope "above" them.
JavaScript supports nested functions. Nested functions have access to the scope "above" them.
In this example, the inner function plus() has access to the counter variable in the parent function:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p>Counting with a local variable.</p>
<p id="demo">0</p>
<script>
document.getElementById("demo").innerHTML = add();
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}
</script>
</body>
</html>
```
**Output:**
```
Counting with a local variable.
1
```



