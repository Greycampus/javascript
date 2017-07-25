# Regular Expression

A regular expression is a sequence of characters that forms a search pattern.
When you search for data in a text, you can use this search pattern to describe what you are searching for.
A regular expression can be a single character, or a more complicated pattern.
Regular expressions can be used to perform all types of text search and text replace operations.

Syntax:
```
/pattern/modifiers; 
```
**Example:**
```
var patt = /abcd/i;
```
### Using String Methods

In JavaScript, regular expressions are often used with the two string methods: search() and replace().
* The search() method uses an expression to search for a match, and returns the position of the match.
* The replace() method returns a modified string where the pattern is replaced.

#### Using String search() With a Regular Expression

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<script>
    var str = "Visit abcd!"; 
    var n = str.search(/abcd/i);
    document.write("Position of match is:\t" + n);
</script>
</body>
</html>
```
**Output:**
```
Position of match is: 6 
```
### Use String replace() With a Regular Expression

**Example:**
```
<!DOCTYPE html>
<html>
<body>
<p>Replace "microsoft" with "company" in the paragraph below:</p>
<p id="demo">Please visit Microsoft and Microsoft!</p>
<script>
    var str = document.getElementById("demo").innerHTML; 
    var txt = str.replace(/microsoft/i,"company");
    document.write(txt);
</script>
</body>
</html>
```
**Output**
```
Replace "microsoft" with "company" in the paragraph below:
Please visit Microsoft and Microsoft!
Please visit company and Microsoft! 
```
### Regular Expression Modifiers

Modifiers can be used to perform case-insensitive more global searches:
|Modifier|	Description|
|---|---|
|i |	Perform case-insensitive matching|
|g |Perform a global match (find all matches rather than stopping after the first match)|
|m |Perform multiline matching|

#### Regular Expression Patterns

Brackets are used to find a range of characters:
|Pattern|Description|
|---|---|
|[abc]|Find any of the characters between the brackets|
|[0-9] |Find any of the digits between the brackets|
|(x|y)|Find any of the alternatives separated with |

Metacharacters are characters with a special meaning:

|Pattern|Description|
|---|---|
|\d|Find a digit|
|\s|Find a whitespace character|
|\b|Find a match at the beginning or at the end of a word|
|\uxxxx|Find the Unicode character specified by the hexadecimal number xxxx|

Quantifiers define quantities:
|Pattern|Description|
|---|---|
|n+|Matches any string that contains at least one n|
|n* |Matches any string that contains zero or more occurrences of n|
|n? 	|Matches any string that contains zero or one occurrences of n|

### Using the RegExp Object

In JavaScript, the RegExp object is a regular expression object with predefined properties and methods.

#### Using test()

The test() method is a RegExp expression method.
It searches a string for a pattern, and returns true or false, depending on the result.

### Using exec()

The exec() method is a RegExp expression method.
It searches a string for a specified pattern, and returns the found text.
If no match is found, it returns null.
