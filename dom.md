# Document Object Model

Every web page resides inside a browser window which can be considered as an object.

A Document object represents the HTML document that is displayed in that window. The Document object has various properties that refer to other objects which allow access to and modification of document content.

The way a document content is accessed and modified is called the Document Object Model, or DOM. The Objects are organized in a hierarchy. This hierarchical structure applies to the organization of objects in a Web document.

* Window object − Top of the hierarchy. It is the outmost element of the object hierarchy.
* Document object − Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page.
* Form object − Everything enclosed in the < form>...< /form> tags sets the form object.
* Form control elements − The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes.

#### The getElementById Method:

The most common way to access an HTML element is to use the id of the element.
In the example above the getElementById method used id="demo" to find the element.

#### The innerHTML Property:

The easiest way to get the content of an element is by using the innerHTML property.<br/>
The innerHTML property is useful for getting or replacing the content of HTML elements.

### Finding elements

Navigating these links among parents, children, and siblings is often useful, as in the previous function, which runs through the whole document. But if we want to find a specific node in the document, reaching it by starting at document.body and blindly following a hard-coded path of links is a bad idea. Doing so bakes assumptions into our program about the precise structure of the document—a structure we might want to change later. Another complicating factor is that text nodes are created even for the whitespace between nodes. The example document’s body tag does not have just three children (< h1> and two < p> elements) but actually has seven: those three, plus the spaces before, after, and between them.

So if we want to get the href attribute of the link in that document, we don’t want to say something like “Get the second child of the sixth child of the document body”. It’d be better if we could say “Get the first link in the document”. And we can.

```
var link = document.body.getElementsByTagName("a")[0];
console.log(link.href);
```
All element nodes have a getElementsByTagName method, which collects all elements with the given tag name that are descendants (direct or indirect children) of the given node and returns them as an array-like object.

To find a specific single node, you can give it an id attribute and use document.getElementById instead.
```
<p><img id="gertrude" src="img/ostrich.png"></p>
<script>
  var ostrich = document.getElementById("gertrude");
  console.log(ostrich.src);
</script>
```
A third, similar method is getElementsByClassName, which, like getElementsByTagName, searches through the contents of an element node and retrieves all elements that have the given string in their class attribute.

### Changing the document:

Almost everything about the DOM data structure can be changed. Element nodes have a number of methods that can be used to change their content. The removeChild method removes the given child node from the document. To add a child, we can use appendChild, which puts it at the end of the list of children, or insertBefore, which inserts the node given as the first argument before the node given as the second argument.
```
<p>One</p>
<p>Two</p>
<p>Three</p>
<script>
  var paragraphs = document.body.getElementsByTagName("p");
  document.body.insertBefore(paragraphs[2], paragraphs[0]);
</script>
```
A node can exist in the document in only one place. Thus, inserting paragraph “Three” in front of paragraph “One” will first remove it from the end of the document and then insert it at the front, resulting in “Three/One/Two”. All operations that insert a node somewhere will, as a side effect, cause it to be removed from its current position (if it has one).

The replaceChild method is used to replace a child node with another one. It takes as arguments two nodes: a new node and the node to be replaced. The replaced node must be a child of the element the method is called on. Note that both replaceChild and insertBefore expect the new node as their first argument.

### Creating nodes:

In the following example, we want to write a script that replaces all images (< img> tags) in the document with the text held in their alt attributes, which specifies an alternative textual representation of the image.

This involves not only removing the images but adding a new text node to replace them. For this, we use the document.createTextNode method.
```
<p>The <img src="img/cat.png" alt="Cat"> in the
  <img src="img/hat.png" alt="Hat">.</p>

<p><button onclick="replaceImages()">Replace</button></p>
<script>
  function replaceImages() {
    var images = document.body.getElementsByTagName("img");
    for (var i = images.length - 1; i >= 0; i--) {
      var image = images[i];
      if (image.alt) {
        var text = document.createTextNode(image.alt);
        image.parentNode.replaceChild(text, image);
      }
    }
  }
</script>
```
Given a string, createTextNode gives us a type 3 DOM node (a text node), which we can insert into the document to make it show up on the screen.

The loop that goes over the images starts at the end of the list of nodes. This is necessary because the node list returned by a method like getElementsByTagName (or a property like childNodes) is live. That is, it is updated as the document changes. If we started from the front, removing the first image would cause the list to lose its first element so that the second time the loop repeats, where i is 1, it would stop because the length of the collection is now also 1.

If you want a solid collection of nodes, as opposed to a live one, you can convert the collection to a real array by calling the array slice method on it.
```
var arrayish = {0: "one", 1: "two", length: 2};
var real = Array.prototype.slice.call(arrayish, 0);
real.forEach(function(elt) { console.log(elt); });
```
To create regular element nodes (type 1), you can use the document.createElement method. This method takes a tag name and returns a new empty node of the given type.

The following example defines a utility elt, which creates an element node and treats the rest of its arguments as children to that node. This function is then used to add a simple attribution to a quote.
```
<blockquote id="quote">
  No book can ever be finished. While working on it we learn
  just enough to find it immature the moment we turn away
  from it.
</blockquote>
<script>
  function elt(type) {
    var node = document.createElement(type);
    for (var i = 1; i < arguments.length; i++) {
      var child = arguments[i];
      if (typeof child == "string")
        child = document.createTextNode(child);
      node.appendChild(child);
    }
    return node;
  }
  document.getElementById("quote").appendChild(
    elt("footer", "—",
        elt("strong", "Karl Popper"),
        ", preface to the second editon of ",
        elt("em", "The Open Society and Its Enemies"),
        ", 1950"));
</script>
```
### Attributes:

Some element attributes, such as href for links, can be accessed through a property of the same name on the element’s DOM object. This is the case for a limited set of commonly used standard attributes.

But HTML allows you to set any attribute you want on nodes. This can be useful because it allows you to store extra information in a document. If you make up your own attribute names, though, such attributes will not be present as a property on the element’s node. Instead, you’ll have to use the getAttribute and setAttribute methods to work with them.
```
<p data-classified="secret">The launch code is 00000000.</p>
<p data-classified="unclassified">I have two feet.</p>
<script>
  var paras = document.body.getElementsByTagName("p");
  Array.prototype.forEach.call(paras, function(para) {
    if (para.getAttribute("data-classified") == "secret")
      para.parentNode.removeChild(para);
  });
</script>
```
As a simple example, we’ll write a “syntax highlighter” that looks for < pre> tags (“preformatted”, used for code and similar plaintext) with a data-language attribute and crudely tries to highlight the keywords for that language.
```
function highlightCode(node, keywords) {
  var text = node.textContent;
  node.textContent = ""; // Clear the node
  var match, pos = 0;
  while (match = keywords.exec(text)) {
    var before = text.slice(pos, match.index);
    node.appendChild(document.createTextNode(before));
    var strong = document.createElement("strong");
    strong.appendChild(document.createTextNode(match[0]));
    node.appendChild(strong);
    pos = keywords.lastIndex;
  }
  var after = text.slice(pos);
  node.appendChild(document.createTextNode(after));
}
```
The function highlightCode takes a < pre> node and a regular expression (with the “global” option turned on) that matches the keywords of the programming language that the element contains.

The textContent property is used to get all the text in the node and is then set to an empty string, which has the effect of emptying the node. We loop over all matches of the keyword expression, appending the text between them as regular text nodes, and the text matched (the keywords) as text nodes wrapped in < strong> (bold) elements.

We can automatically highlight all programs on the page by looping over all the < pre> elements that have a data-language attribute and calling highlightCode on each one with the correct regular expression for the language.
```
var languages = {
  javascript: /\b(function|return|var)\b/g /* … etc */
};
function highlightAllCode() {
  var pres = document.body.getElementsByTagName("pre");
  for (var i = 0; i < pres.length; i++) {
    var pre = pres[i];
    var lang = pre.getAttribute("data-language");
    if (languages.hasOwnProperty(lang))
      highlightCode(pre, languages[lang]);
  }
}
```
Here is an example:
```
<p>Here it is, the identity function:</p>
<pre data-language="javascript">
function id(x) { return x; }
</pre>
<script>highlightAllCode();</script>
```
There is one commonly used attribute, class, which is a reserved word in the JavaScript language. For historical reasons, some old JavaScript implementations could not handle property names that matched keywords or reserved words the property used to access this attribute is called className. You can also access it under its real name, "class", by using the getAttribute and setAttribute methods.

## Layout

You might have noticed that different types of elements are laid out differently. Some, such as paragraphs (< p>) or headings (< h1>), take up the whole width of the document and are rendered on separate lines. These are called block elements. Others, such as links (< a>) or the < strong> element used in the previous example, are rendered on the same line with their surrounding text. Such elements are called inline elements.

For any given document, browsers are able to compute a layout, which gives each element a size and position based on its type and content. This layout is then used to actually draw the document.

The size and position of an element can be accessed from JavaScript. The offsetWidth and offsetHeight properties give you the space the element takes up in pixels. A pixel is the basic unit of measurement in the browser and typically corresponds to the smallest dot that your screen can display. Similarly, clientWidth and clientHeight give you the size of the space inside the element, ignoring border width.
```
<p style="border: 3px solid red">
  I'm boxed in
</p>
<script>
  var para = document.body.getElementsByTagName("p")[0];
  console.log("clientHeight:", para.clientHeight);
  console.log("offsetHeight:", para.offsetHeight);
</script>
```
The most effective way to find the precise position of an element on the screen is the getBoundingClientRect method. It returns an object with top, bottom, left, and right properties, indicating the pixel positions of the sides of the element relative to the top left of the screen. If you want them relative to the whole document, you must add the current scroll position, found under the global pageXOffset and pageYOffset variables.

Laying out a document can be quite a lot of work. In the interest of speed, browser engines do not immediately re-layout a document every time it is changed but rather wait as long as they can. When a JavaScript program that changed the document finishes running, the browser will have to compute a new layout in order to display the changed document on the screen. When a program asks for the position or size of something by reading properties such as offsetHeight or calling getBoundingClientRect, providing correct information also requires computing a layout.

A program that repeatedly alternates between reading DOM layout information and changing the DOM forces a lot of layouts to happen and will consequently run really slowly. The following code shows an example of this. It contains two different programs that build up a line of X characters 2,000 pixels wide and measures the time each one takes.
```
<p><span id="one"></span></p>
<p><span id="two"></span></p>
<script>
  function time(name, action) {
    var start = Date.now(); // Current time in milliseconds
    action();
    console.log(name, "took", Date.now() - start, "ms");
  }

  time("naive", function() {
    var target = document.getElementById("one");
    while (target.offsetWidth < 2000)
      target.appendChild(document.createTextNode("X"));
  });
  // → naive took 32 ms

  time("clever", function() {
    var target = document.getElementById("two");
    target.appendChild(document.createTextNode("XXXXX"));
    var total = Math.ceil(2000 / (target.offsetWidth / 5));
    for (var i = 5; i < total; i++)
      target.appendChild(document.createTextNode("X"));
  });
</script>
```
## Styling:

We have seen that different HTML elements display different behavior. Some are displayed as blocks, others inline. Some add styling, such as < strong> making its content bold and  < a> making it blue and underlining it.

The way an < img> tag shows an image or an < a> tag causes a link to be followed when it is clicked is strongly tied to the element type. But the default styling associated with an element, such as the text color or underline, can be changed by us. Here is an example using the style property:
```
<p><a href=".">Normal link</a></p>
<p><a href="." style="color: green">Green link</a></p>
```
A style attribute may contain one or more declarations, which are a property (such as color) followed by a colon and a value (such as green). When there is more than one declaration, they must be separated by semicolons, as in "color: red; border: none".

There are a lot of aspects that can be influenced by styling. For example, the display property controls whether an element is displayed as a block or an inline element.

This text is displayed < strong>inline< /strong>,
```
<strong style="display: block">as a block</strong>, and
<strong style="display: none">not at all</strong>.
```
The block tag will end up on its own line since block elements are not displayed inline with the text around them. The last tag is not displayed at all—display: none prevents an element from showing up on the screen. This is a way to hide elements. It is often preferable to removing them from the document entirely because it makes it easy to reveal them again at a later time.

JavaScript code can directly manipulate the style of an element through the node’s style property. This property holds an object that has properties for all possible style properties. The values of these properties are strings, which we can write to in order to change a particular aspect of the element’s style.
```
<p id="para" style="color: purple">
  Pretty text
</p>
<script>
  var para = document.getElementById("para");
  console.log(para.style.color);
  para.style.color = "magenta";
</script>
```
Some style property names contain dashes, such as font-family. Because such property names are awkward to work with in JavaScript (you’d have to say style["font-family"]), the property names in the style object for such properties have their dashes removed and the letters that follow them capitalized (style.fontFamily).

## Cascading styles:

The styling system for HTML is called CSS for Cascading Style Sheets. A style sheet is a set of rules for how to style elements in a document. It can be given inside a < style> tag.
```
<style>
  strong {
    font-style: italic;
    color: gray;
  }
</style>
<p>Now <strong>strong text</strong> is italic and gray.</p>
```
The cascading in the name refers to the fact that multiple such rules are combined to produce the final style for an element. In the previous example, the default styling for < strong> tags, which gives them font-weight: bold, is overlaid by the rule in the < style> tag, which adds font-style and color.

When multiple rules define a value for the same property, the most recently read rule gets a higher precedence and wins. So if the rule in the < style> tag included font-weight: normal, conflicting with the default font-weight rule, the text would be normal, not bold. Styles in a style attribute applied directly to the node have the highest precedence and always win.

It is possible to target things other than tag names in CSS rules. A rule for .abc applies to all elements with "abc" in their class attributes. A rule for #xyz applies to the element with an id attribute of "xyz" (which should be unique within the document).
```
.subtle {
  color: gray;
  font-size: 80%;
}
#header {
  background: blue;
  color: white;
}
/* p elements, with classes a and b, and id main */
p.a.b#main {
  margin-bottom: 20px;
}
```
The precedence rule favoring the most recently defined rule holds true only when the rules have the same specificity. A rule’s specificity is a measure of how precisely it describes matching elements, determined by the number and kind (tag, class, or ID) of element aspects it requires. For example, a rule that targets p.a is more specific than rules that target p or just .a, and would thus take precedence over them.

The notation p > a {…} applies the given styles to all < a> tags that are direct children of < p> tags. Similarly, p a {…} applies to all < a> tags inside < p> tags, whether they are direct or indirect children.

## Query selectors:

We won’t be using style sheets all that much in this book. Although understanding them is crucial to programming in the browser, properly explaining all the properties they support and the interaction among those properties would take two or three books.

The main reason to introduce selector syntax—the notation used in style sheets to determine which elements a set of styles apply to—is that we can use this same mini-language as an effective way to find DOM elements.

The querySelectorAll method, which is defined both on the document object and on element nodes, takes a selector string and returns an array-like object containing all the elements that it matches.
```
<p>And if you go chasing
  <span class="animal">rabbits</span></p>
<p>And you know you're going to fall</p>
<p>Tell 'em a <span class="character">hookah smoking
  <span class="animal">caterpillar</span></span></p>
<p>Has given you the call</p>
<script>
  function count(selector) {
    return document.querySelectorAll(selector).length;
  }
  console.log(count("p"));           // All <p> elements
  // → 4
  console.log(count(".animal"));     // Class animal
  // → 2
  console.log(count("p .animal"));   // Animal inside of <p>
  // → 2
  console.log(count("p > .animal")); // Direct child of <p>
  // → 1
</script>
```
Unlike methods such as getElementsByTagName, the object returned by querySelectorAll is not live. It won’t change when you change the document.

The querySelector method (without the All part) works in a similar way. This one is useful if you want a specific, single element. It will return only the first matching element or null if no elements match.


