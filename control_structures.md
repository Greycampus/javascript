# Decision Making:

Very often when you write code, you want to perform different actions for different decisions.
You can use conditional statements in your code to do this.
In JavaScript we have the following conditional statements:
* Use if to specify a block of code to be executed, if a specified condition is true
* Use else to specify a block of code to be executed, if the same condition is false
* Use else if to specify a new condition to test, if the first condition is false
* Use switch to specify many alternative blocks of code to be executed

## The if Statement

Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax:
```
if (condition) {
    block of code to be executed if the condition is true
}
```
**Example**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo">a is greater than b</p>
<script>
var a=10;
var b=20;
if (a<b) {
    document.getElementById("demo").innerHTML = "a is less than b";
}
</script>
</body>
</html>
```
**Output**
```
a is less than b
```
## The if else statement:

The 'if...else' statement is the next form of control statement that allows JavaScript to execute statements in a more controlled way.

Syntax:
```
if (expression){
   Statement(s) to be executed if expression is true
}
else{
   Statement(s) to be executed if expression is false
}
```
**Example:**
```
<html>
<body>
<script>
var a=10;
var b=20;
if (a>b) {
    document.write("a is less than b");
}
else{
	document.write("a is greater than b");
}
</script>
</body>
</html>
```
**Output:**
```
a is greater than b 
```
## The else if Statement

Use the else if statement to specify a new condition if the first condition is false.

Syntax:
```
if (condition1) {
    block of code to be executed if condition1 is true
} else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
} else {
    block of code to be executed if the condition1 is false and condition2 is false
}
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<script>
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
document.write(greeting);
</script>
</body>
</html>
```
**Output:**
```
Good day
```
## The Switch Statement

Use the switch statement to select one of many blocks of code to be executed.

Syntax:
```
switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        code block
}
```
This is how it works:
* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.

**Example:**
```
<!DOCTYPE html>
<html>
<body>

<script>
var i=2;
switch(i){
	case 0:
       document.write("i equals to 0");
       break;
    case 1:
       document.write("i equals to 1");
       break;
    case 2:
       document.write("i equals to 2");
       break;
    default:
    	document.write("i equals to 0 or 1 or 2");
}
</script>
</body>
</html>
```
**Output:**
```
i equals to 2 
```
# Loops types

JavaScript supports different kinds of loops:

* for - loops through a block of code a number of times
* for/in - loops through the properties of an object
* while - loops through a block of code while a specified condition is true
* do/while - also loops through a block of code while a specified condition is true

## The For Loop

The for loop is often the tool you will use when you want to create a loop.

Syntax:
```
for (statement 1; statement 2; statement 3) {
    code block to be executed
}
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var text = "";
var i;
for (i = 0; i < 5; i++) {
    text +=  i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>
```
**Output:**
```
0
1
2
3
4
```
## The For/In Loop

The JavaScript for/in statement loops through the properties of an object:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo").innerHTML = txt;
</script>
</body>
</html>
```
**Output:**
```
John Doe 25 
```
## The while loop

The while loop loops through a block of code as long as a specified condition is true.

Syntax:
```
while (condition) {
    code block to be executed
}
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
	<script>
	var text = "";
	var i = 0;
	while (i < 5) {
	    text += "<br>" + i;
	    i++;
	}
document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>
```
**Output:**
```
0
1
2
3
4
```
The condition is first evaluated. If true, the block of statements following the while statement is executed. This is repeated until the condition becomes false. This is known as a pre-test loop because the condition is evaluated before the block is executed.

The number++ statement is called the updater. Removing it will result in an infinite loop. You must always include a statement in a loop that guarantees the termination of the loop or else you'll run into this problem. 

## The Do/While Loop

The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax:
```
do {
    code block to be executed
}
while (condition);
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
	var text = ""
	var i = 0;
	do {
	    text += "<br>" + i;
	    i++;
	}
	while (i < 5);  
	document.getElementById("demo").innerHTML = text;
</script>
</body>
</html>
```
**Output:**
```
0
1
2
3
4
```
The block following do is executed first and then the condition is evaluated. If the while condition is true, the block is executed again and repeats until the condition becomes false. This is known as a post-test loop as the condition is evaluated after the block has executed.

The do-while loop is executed at least once whereas the while loop may not execute at all. The do-while is typically used in a situation where the body of a loop contains a statement that generates a value that you want to use in your conditional expression.

### Break statement

When JavaScript encounters a break statement in a loop it immediately exits the loop without executing any other statements in the loop. Control is immediately transferred to the statement following the loop body. 

Example:

var sum = 0;
for (var i = 1; i <= 10000; i++) {
   sum += i;
   if (i === 50) {
       break;    // immediately transfers control outside the for block
   }
}
alert("Sum = " + sum);       // => Sum = 1275

### Continue statement

When JavaScript encounters a continue statement in a loop it stops the execution of the current iteration and goes back to the beginning of the loop to begin the next iteration. 

**Example:**
```
for (var i = 1; i <= 10; i++)
{
   if ((i % 2) != 0) {
      continue;
   }
   alert(i);           // => 2, 4, 6, 8, 10
}
```

