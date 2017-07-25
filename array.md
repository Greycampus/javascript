# Arrays

JavaScript arrays are used to store multiple values in a single variable, and the values can be accessed by referring to an index number.

### Creating an Array

Using an array literal is the easiest way to create a JavaScript Array.

Syntax:
```
var array_name = [item1, item2, ...]; 
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
</script>
</body>
</html>
```
**Output:**
```
Saab,Volvo,BMW
```
### Using the JavaScript Keyword new

The following example also creates an Array, and assigns values to it:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var cars = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo").innerHTML = cars;
</script>
</body>
</html>
```
**Output**
```
Saab,Volvo,BMW
```
### Access the Elements of an Array

You refer to an array element by referring to the index number.

This statement accesses the value of the first element in cars:
```
var name = cars[0];
```
This statement modifies the first element in cars:
```
cars[0] = "Opel";
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];
</script>
</body>
</html>
```
**Output:**
```
Saab
```
### Access the Full Array

With JavaScript, the full array can be accessed by referring to the array name:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<script>
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;
</script>
</body>
</html>
```
**Output:**
```
Saab,Volvo,BMW
```
### Array Elements Can Be Objects

JavaScript variables can be objects. Arrays are special kinds of objects.
Because of this, you can have variables of different types in the same Array.
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
```
	myArray[0] = Date.now;
	myArray[1] = myFunction;
	myArray[2] = myCars;
```
### Adding Array Elements

The easiest way to add a new element to an array is using the push method.

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits);
document.write("</br>");
myFunction();
function myFunction() {
    fruits.push("Lemon");
   document.write(fruits);
}
</script>
</body>
</html>
```
**Output:**
```
Banana,Orange,Apple,Mango
Banana,Orange,Apple,Mango,Lemon 
```



