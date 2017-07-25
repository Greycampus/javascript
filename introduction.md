# Introduction

JavaScript is a very powerful client-side scripting language. JavaScript is used mainly for enhancing the interaction of a user with the webpage. In other words, you can make your webpage more lively and interactive, with the help of JavaScript. JavaScript is also being used widely in game development and Mobile application development. 

* JavaScript is a object-based scripting language.
* Giving the user more control over the browser.
* It Handling dates and time.
* It Detecting the user's browser and OS.
* JavaScript is case sensitive.
* JavaScript is object based language as it provides predefined objects.
* Every statement in javascript must be terminated with semicolon (;).
* Most of the javascript control statements syntax is same as syntax of control statements in C language.
* An important part of JavaScript is the ability to create new functions within scripts. 

## History

JavaScript was originally developed by Brendan Eich of Netscape Communications Corporation under the name Mocha, then LiveScript, and finally renamed to JavaScript. The change of name from LiveScript to JavaScript roughly coincided with Netscape adding support for Java technology in its Netscape Navigator web browser. JavaScript was first introduced and deployed in the Netscape browser version 2.0B3 in December of 1995. When JavaScript was added to Internet Explorer, it had to be officially called "JScript", because Netscape owns the name "JavaScript". The choice of name proved to be a source of much confusion.

As of 2006, the latest version of the language is JavaScript 1.7, which corresponds to ECMA-262 Edition 3 like JavaScript 1.5, except for Array extras, Array and String generics, and pythonic generators and array comprehensions. ECMAScript, in simple terms, is a standardized version of JavaScript. The ECMA-357 standard specifies E4X (ECMAscript For XML), a language extension dealing with XML.

## Features of JavaScript

* Giving the user more control over the browser
* Detecting the user's browser, OS, screen size: The ability to detect the user's browser and OS allows your script to perform platform-dependent operations, if necessary.
* Performing simple computations on the client side
* Validating the user's input: JavaScript helps the browser perform input validation without wasting the user's time by the Web server access. If the user makes a mistake in the input, the user will get an error message immediately! On the other hand, if the input information is validated only on the server, then the user would have to wait for the server response.
* Handling dates and time

## Tools needed

To start with, you need a text editor to write your code and a browser to display the web pages you develop. You can use text editor of your choice including Notepad++, Komodo Edit or any other text editor you are comfortable with. You can use any web browser including Internet Explorer, Google Chrome, Firefox etc.

## Running of JavaScript

Being a scripting language, JavaScript cannot run on its own. In fact, the browser is responsible for running JavaScript code. When a user requests an HTML page with JavaScript in it, the script is sent to the browser and it is up to the browser to execute it. The main advantage of JavaScript is that all modern web browsers support JavaScript. So, you do not have to worry whether your site visitor uses Internet Explorer, Google Chrome, Firefox or any other browser. JavaScript will be supported. Also, JavaScript runs on any operating system including Windows, Linux or Mac. Thus, JavaScript overcomes the main disadvantages of VBScript which is limited to just IE and Windows.  

## Commenting JavaScript code

A comment is the portion of a program that exists only for the human reader and stripped out before displaying the programs result. There are two commenting formats in JavaScript.

* Singleline comment:
Single line comments start with //.
Any text between // and the end of the line will be ignored by JavaScript (will not be executed).

* Multiline comment:
Multi-line comments start with /* and end with */.
Any text between /* and */ will be ignored by JavaScript.

## Display possibilities

JavaScript can "display" data in different ways:
* Writing into an HTML element, using innerHTML.
* Writing into the HTML output using document.write().
* Writing into an alert box, using window.alert().
* Writing into the browser console, using console.log().

### Using innerHTML

To access an HTML element, JavaScript can use the document.getElementById(id) method.
The id attribute defines the HTML element. The innerHTML property defines the HTML content:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p>innerHTML</p>
<p id="demo"></p>
<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>
</body>
</html> 
```
**Output:**
```
innerHTML
11
```
### Using document.write()

For testing purposes, it is convenient to use document.write():

**Example:** 
```
<!DOCTYPE html>
<html>
<body>
<p>document.write</p>
<script>
document.write(5 + 6);
</script>
</body>
</html> 
```
**Output:**
```
document.write
11 
```
### Using window.alert()

You can use an alert box to display data:

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p>window.alert</p>
<script>
window.alert(5 + 6);
</script>	
</body>
</html> 
```
**Output:**
```
11 //Displays in a new window
```
### Using console.log()

For debugging purposes, you can use the console.log() method to display data.

**Example**
```
<!DOCTYPE html>
<html>
<body>
<script>
console.log(5 + 6);
</script>
</body>
</html> 
```
**Output:**
```
11 //Displays output in the console, press F12 to view the result
```
