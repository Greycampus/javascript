# Object-Oriented

JavaScript is an Object Oriented Programming (OOP) language. A programming language can be called object-oriented if it provides four basic capabilities to developers:
* Encapsulation − the capability to store related information, whether data or methods, together in an object.
* Aggregation − the capability to store one object inside another object.
* Inheritance − the capability of a class to rely upon another class (or number of classes) for some of its properties and methods.
* Polymorphism − the capability to write one function or method that works in a variety of different ways.

Objects are composed of attributes. If an attribute contains a function, it is considered to be a method of the object, otherwise the attribute is considered a property.

### Object Properties

Object properties can be any of the three primitive data types, or any of the abstract data types, such as another object. Object properties are usually variables that are used internally in the object's methods, but can also be globally visible variables that are used throughout the page.

Syntax:
```
objectName.objectProperty = propertyValue;
```
**Example:**
```
var str = document.title;
```
#### Accessing JavaScript Properties:

The syntax for accessing the property of an object is:
```
objectName.property          // person.age
objectName["property"]       // person["age"]
objectName[expression]       // x = "age"; person[x]
```
**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p>There are two different ways to access an object property:</p>
<p>You can use .property or ["property"].</p>
<p id="demo"></p>
<script>
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
document.getElementById("demo").innerHTML =
person.firstname+ " is " + person.age + " years old.";
</script>
</body>
</html>
```
**Output:**
```
There are two different ways to access an object property:
You can use .property or ["property"].
John is 50 years old.
```
#### Adding and deleting Properties:

* You can add new properties to an existing object by simply giving it a value.
Assume that the person object already exists - you can then give it new properties
* The delete keyword deletes a property from an object

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p>You can add new properties to existing objects.</p>
<p id="demo1"></p>
<p id="demo2"></p>
<script>
var person = {
    firstname:"John",
    lastname:"Doe",
    age:50,
    eyecolor:"blue"
};
person.nationality = "English";
document.getElementById("demo1").innerHTML =
person.firstname + " is " + person.nationality + ".";
delete person.age;
document.getElementById("demo2").innerHTML =
person.firstname + " is " + person.age + " years old.";
</script>
</body>
</html>
```
**Output:**
```
You can add new properties to existing objects.
John is English.
John is undefined years old.
```
### Object Methods:

Methods are the functions that let the object do something or let something be done to it. There is a small difference between a function and a method – at a function is a standalone unit of statements and a method is attached to an object and can be referenced by the this keyword.

Methods are useful for everything from displaying the contents of the object to the screen to performing complex mathematical operations on a group of local properties and parameters.

For example − Following is a simple example to show how to use the write() method of document object to write any content on the document.
```
document.write("This is test");
```
#### Accessing Object Methods:

You create an object method with the following syntax:
```
methodName : function() { code lines }
```
You access an object method with the following syntax:
```
objectName.methodName()
```
You will typically describe fullName() as a method of the person object, and fullName as a property.
The fullName property will execute (as a function) when it is invoked with ().

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p>Creating and using an object method.</p>
<p>A method is actually a function definition stored as a property value.</p>
<p id="demo"></p>
<script>
var person = {
    firstName: "Ram",
    lastName : "kiran",
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullName();
</script>
</body>
</html>
```
**Output:**
```
Creating and using an object method.
A method is actually a function definition stored as a property value.
Ram kiran
```
### The Object() Constructor:

A constructor is a function that creates and initializes an object. JavaScript provides a special constructor function called Object() to build the object. The return value of the Object() constructor is assigned to a variable.
The variable contains a reference to the new object. The properties assigned to the object are not variables and are not defined with the var keyword.

**Example:**
```
<html>
   <head>
      <title>User-defined objects</title>      
      <script type="text/javascript">
         var book = new Object();   // Create the object
         book.subject = "Perl"; // Assign properties to the object
         book.author  = "Mohtashim";
      </script>      
   </head>   
   <body>   
      <script type="text/javascript">
         document.write("Book name is : " + book.subject + "<br>");
         document.write("Book author is : " + book.author + "<br>");
      </script>   
   </body>
</html>
```
**Output:**
```
Book name is : Perl 
Book author is : Mohtashim
```

### The 'with' Keyword:

The ‘with’ keyword is used as a kind of shorthand for referencing an object's properties or methods.
The object specified as an argument to with becomes the default object for the duration of the block that follows. The properties and methods for the object can be used without naming the object.

Syntax:
```
with (object){
   properties used without the object name and dot
}
```
**Example:**
```
<html>
   <head>
   <title>User-defined objects</title>   
      <script type="text/javascript">
         // Define a function which will work as a method
         function addPrice(amount){
            with(this){
               price = amount;
            }
         }         
         function book(title, author){
            this.title = title;
            this.author  = author;
            this.price = 0;
            this.addPrice = addPrice; // Assign that method as property.
         }
      </script>      
   </head>
   <body>   
      <script type="text/javascript">
         var myBook = new book("Perl", "Mohtashim");
         myBook.addPrice(100);
         
         document.write("Book title is : " + myBook.title + "<br>");
         document.write("Book author is : " + myBook.author + "<br>");
         document.write("Book price is : " + myBook.price + "<br>");
      </script>      
   </body>
</html>
```
**Output:**
```
Book title is : Perl 
Book author is : Mohtashim 
Book price is : 100
```
### Subclasses and Superclasses

In Java and C++, there is an explicit concept of the class hierarchy. i.e. Every class can have a super class from which it inherits properties and methods. Any class can be extended, or sub-classed so the resulting subclass can inherit its parent's behavior. As we have seen, JavaScript supports prototype inheritance instead of class based. It's possible for inheritance to happen other ways, however.

The following is an example of inheritance through functions.
```
<script language="javascript" type="text/javascript">
function superClass() {
  this.supertest = superTest; //attach method superTest
}
function subClass() {
  this.inheritFrom = superClass;
  this.inheritFrom();
  this.subtest = subTest; //attach method subTest
}
function superTest() {
  return "superTest";
}   
function subTest() {
  return "subTest";
}
var newClass = new subClass();
  alert(newClass.subtest()); // yields "subTest"
  alert(newClass.supertest()); // yields "superTest"
</script>
```
