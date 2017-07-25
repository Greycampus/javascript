# Variables

Like many other programming languages, JavaScript has variables. Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container.

Before you use a variable in a JavaScript program, you must declare it. Variables are declared with the var keyword as follows:
```
<script type="text/javascript">
   <!--
      var money;
      var name;
   //-->
</script>
```
You can also declare multiple variables with the same var keyword as follows:
```
<script type="text/javascript">
   <!--
      var money, name;
   //-->
</script>
```
## Rules for JavaScript variables:

* You should not use any of the JavaScript reserved keywords as a variable name. These keywords are mentioned in the next section. For example, break or boolean variable names are not valid.
* JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or an underscore character. For example, 123test is an invalid variable name but _123test is a valid one.
* JavaScript variable names are case-sensitive. For example, Name and name are two different variables.

JavaScript variables have only two scopes.

* Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.

* Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

Within the body of a function, a local variable takes precedence over a global variable with the same name. If you declare a local variable or function parameter with the same name as a global variable, you effectively hide the global variable. Take a look into the example:

**Example:**
```
<html>
   <body>
      <script type = "text/javascript">
            var myVar = "global"; // Declare a global variable
            checkscope( ); 
            function checkscope( ) {
               var myVar = "local";  // Declare a local variable
               document.write(myVar); // displays local
            }
             document.write("\n");
             document.write(myVar); // displays global
      </script>
   </body>
</html>
```
**Output:**
```
local global
```


