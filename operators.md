# Operators

JavaScript operators are symbols that are used to perform operations on operands.
These are following types of operators in JavaScript:

* Arithmetic operators
* comparison operators
* Assignment operators 
* Boolean operators
* Bitwise operators 

## Arithmetic Operators

Arithmetic operators perform basic computations on their operands (the variables they operate on). In the table below, variable a has a value of 2 before the operation is applied.

| Operator | Operation | Expression | Result |
| --- | --- | --- | --- |
| + |	Add| 	2 + a| 	4|
|- |	Substract| 	2 - a| 	0|
|* |	Multiply| 	3 * a |	6|
|/ |	Divide| 	3 / a| 	1.5|
|%| 	Modulus - division remainder| 	7 % a| 	1|
|++| 	Increment - increase by 1 |	a++| 	3|
|-- |	Decrement - decrease by 1 |	a--|	1|

**Examples:**
```
<html>
   <body>
      <script type="text/javascript">
            var a = 33;
            var b = 10;
            var c = "Test";
            var linebreak = "<br />";         
            document.write("a + b = ");
            result = a + b;
            document.write(result);
            document.write(linebreak);         
            document.write("a - b = ");
            result = a - b;
            document.write(result);
            document.write(linebreak);         
            document.write("a / b = ");
            result = a / b;
            document.write(result);
            document.write(linebreak);         
            document.write("a % b = ");
            result = a % b;
            document.write(result);
            document.write(linebreak);         
            document.write("a + b + c = ");
            result = a + b + c;
            document.write(result);
            document.write(linebreak);         
            a = ++a;
            document.write("++a = ");
            result = ++a;
            document.write(result);
            document.write(linebreak);
            b = --b;
            document.write("--b = ");
            result = --b;
            document.write(result);
            document.write(linebreak);
      </script>
   </body>
</html>
```
**Output**
```
a + b = 43
a - b = 23
a / b = 3.3
a % b = 3
a + b + c = 43Test
++a = 35
--b = 8
```
## Comparison Operators

Comparison operators compare the value of two operands. If the comparison is true, they return true, otherwise false. In the table below the variables are: a = 1 and b = 2.

|Operator| 	Operation |	Expression |	Result|
|--- |---|---|---|
|== |	Equal to |	a == b| false|
|!= |	Not equal to| 	a != b |	true|
|<= |	Less than equal to |	a <= b| 	true|
|>= |	Greater than or equal to |	a >= b| 	false|
|<| 	Less than 	|a < b |	true|
|>| 	Greater than| 	a > b| 	false|

**Example:**
```
<html>
   <body>
      <script type="text/javascript">
            var a = 10;
            var b = 20;
            var linebreak = "<br />";      
            document.write("(a == b) => ");
            result = (a == b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a < b) => ");
            result = (a < b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a > b) => ");
            result = (a > b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a != b) => ");
            result = (a != b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a >= b) => ");
            result = (a >= b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a <= b) => ");
            result = (a <= b);
            document.write(result);
            document.write(linebreak);
      </script>
	</body>
</html>
```
**Output**
```
(a == b) => false 
(a < b) => true 
(a > b) => false 
(a != b) => true 
(a >= b) => false 
a <= b) => true
```
## Assignment Operators

In an assignment operation the value of a variable is computed from the expression that lies to the right of an assignment operator. That value is assigned to the variable or property that is on the left side of the operator. In the table below the variables have the following values:
a = 1, b = 2, and c = 3.

|Operator |	Operation 	|Result|
|--- |--|--|
|=| 	a = b + c; |	a = 5|
|+=| 	a += b;    // equivalent to a = a + b }	|a = 3|
|-= |	a -= b;    // equivalent to a = a – b |	a = -1|
|/= |	a /= b;    // equivalent to a = a / b| 	a = 0.5|
|%= |	c %= b;   // equivalent to c = c % b| 	c = 1|
|*= |	a *= b;    // equivalent to a = a * b |	a = 2|

**Example:**
```
<html>
   <body>
      <script type="text/javascript">
            var a = 33;
            var b = 10;
            var linebreak = "<br />";         
            document.write("Value of a => (a = b) => ");
            result = (a = b);
            document.write(result);
            document.write(linebreak);         
            document.write("Value of a => (a += b) => ");
            result = (a += b);
            document.write(result);
            document.write(linebreak);         
            document.write("Value of a => (a -= b) => ");
            result = (a -= b);
            document.write(result);
            document.write(linebreak);         
            document.write("Value of a => (a *= b) => ");
            result = (a *= b);
            document.write(result);
            document.write(linebreak);
            document.write("Value of a => (a /= b) => ");
            result = (a /= b);
            document.write(result);
            document.write(linebreak);         
            document.write("Value of a => (a %= b) => ");
            result = (a %= b);
            document.write(result);
            document.write(linebreak);
      </script>
    </body>
</html>
```
**Output**
```
Value of a => (a = b) => 10
Value of a => (a += b) => 20 
Value of a => (a -= b) => 10 
Value of a => (a *= b) => 100 
Value of a => (a /= b) => 10
Value of a => (a %= b) => 0
```
## Logical or Boolean Operators

Logical or Boolean operators compare Boolean expressions and then return true or false. The && and || ('and' and 'or') operators take two operands. The ! ('not') operator takes a single operand. In the table below the variables have the following values: a = 1 and b = 2.

|Operator |	Operation |	Expression |	Result|
|---|---|---|---|
|&&| 	Logical and, Returns true only if both its first and second operands are evaluated to true. |	a < 3 && b > 5 |	returns false as b > 5 is false|
| &#124; &#124;| 	Logical or. Returns true if one of the two operands are evaluated to true, returns false if both are evaluated to true. |	a < 3 &#124; &#124; b > 5 	|returns true as a < 3 is true
|!|	Logical not. Unary operator that simply inverts the Boolean value of its operand. |	!(b>5) |	returns true|

**Example:**
```
<html>
   <body>
      <script type="text/javascript">
            var a = true;
            var b = false;
            var linebreak = "<br />"; 
            document.write("(a && b) => ");
            result = (a && b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a || b) => ");
            result = (a || b);
            document.write(result);
            document.write(linebreak);         
            document.write("!(a && b) => ");
            result = (!(a && b));
            document.write(result);
            document.write(linebreak);
      </script>
    </body>
</html>
```
**Output:**
```
(a && b) => false 
(a || b) => true 
!(a && b) => true
```
## Bitwise operators in JavaScript

The table below summarizes the bitwise operators in JavaScript:

|Operator |	Usage| 	Result|
|---|---|---|
|Bitwise AND| 	a & b |	Returns 1 for each bit position where both operands are 1|
|Bitwise OR |	a &#124; b |	Returns 1 for each bit position where either operand is 1|
|Bitwise XOR| 	a ^ b |	Returns 1 for each bit position where either but not both are 1|
|Left shift |	a << b |	Shifts in binary fashion all bits one position to the left; discarding the left bit and filling the right bit with 0.|
|Right shift |	a >> b| 	Shifts in binary fashion all bits one position to the right, discarding the right bit. This operations maintains the original sign (+ or -).|

**Example:**
```
<html>
   <body>
      <script type="text/javascript">
            var a = 2; // Bit presentation 10
            var b = 3; // Bit presentation 11
            var linebreak = "<br />";         
            document.write("(a & b) => ");
            result = (a & b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a | b) => ");
            result = (a | b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a ^ b) => ");
            result = (a ^ b);
            document.write(result);
            document.write(linebreak);         
            document.write("(~b) => ");
            result = (~b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a << b) => ");
            result = (a << b);
            document.write(result);
            document.write(linebreak);         
            document.write("(a >> b) => ");
            result = (a >> b);
            document.write(result);
            document.write(linebreak);
      </script>
      <p>Set the variables to different values and different operators and then try...</p>
   </body>
</html>
```
**Output:**
```
(a & b) => 2 
(a | b) => 3 
(a ^ b) => 1 
(~b) => -4 
(a << b) => 16 
(a >> b) => 0
```
