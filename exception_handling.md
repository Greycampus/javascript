# Exception Handling

* The try statement lets you test a block of code for errors.
* The catch statement lets you handle the error.
* The throw statement lets you create custom errors.
* The finally statement lets you execute code, after try and catch, regardless of the result.

When executing JavaScript code, different errors can occur. 

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
</script>
</body>
</html>
```
**Output:**
```
adddlert is not defined
```
### JavaScript try and catch

* The try statement allows you to define a block of code to be tested for errors while it is being executed.
* The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:
```
try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
}
```
### JavaScript Throws Errors

When an error occurs, JavaScript will normally stop and generate an error message.<br/>
The technical term for this is: JavaScript will  throw an exception (throw an error).<br/>
JavaScript will actually create an Error object with two properties: name and message.

**The throw Statement:**

The throw statement allows you to create a custom error.<br/>
Technically you can throw an exception (throw an error).<br/>
The exception can be a JavaScript String, a Number, a Boolean or an Object:
```
throw "Too big";    // throw a text
throw 500;          // throw a number
```
If you use throw together with try and catch, you can control program flow and generate custom error messages.

### The finally Statement

The finally statement lets you execute code, after try and catch, regardless of the result:
```
try {
    Block of code to try
}
catch(err) {
    Block of code to handle errors
}
finally {
    Block of code to be executed regardless of the try / catch result
}
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}
finally{
document.write("finally");
}
</script>
</body>
</html>
```
**Output:**
```
adddlert is not defined
finally 
```
### Error Name Values

Six different values can be returned by the error name property:

EvalError	-An error has occurred in the eval() function
RangeError	-A number "out of range" has occurred
ReferenceError	-An illegal reference has occurred
SyntaxError	-A syntax error has occurred
TypeError	-A type error has occurred
URIError	-An error in encodeURI() has occurred

#### Eval Error

An EvalError indicates an error in the eval() function.

#### Range Error

A RangeError is thrown if you use a number that is outside the range of legal values.

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo">
<script>
var num = 1;
try {
    num.toPrecision(500);
}
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}
</script>
</body>
</html>
```
**Output:**
```
RangeError 
```
#### Reference Error

A ReferenceError is thrown if you use (reference) a variable that has not been declared:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var x;
try {
    x = z + 1;
}
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}
</script>
</body>
</html>
```
**Output:**
```
ReferenceError
```
#### Syntax Error

A SyntaxError is thrown if you try to evaluate code with a syntax error.

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
try {
    eval("alert('Hello)");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}
</script>
</body>
</html>
```
**Output:**
```
SyntaxError
```
#### Type Error

A TypeError is thrown if you use a value that is outside the range of expected types:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var num = 1;
try {
    num.toUpperCase();
}
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}
</script>
</body>
</html>
```
**Output:**
```
TypeError
```
#### URI Error

A URIError is thrown if you use illegal characters in a URI function:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
try {
    decodeURI("%");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}
</script>
</body>
</html>
```
**Output:**
```
URIError
```

