# Form Fields

A web form consists of any number of input fields grouped in a < form> tag. HTML allows a number of different styles of fields, ranging from simple on/off checkboxes to drop-down menus and fields for text input. 

A lot of field types use the < input> tag. This tag’s type attribute is used to select the field’s style. These are some commonly used < input> types:

* text	-A single-line text field
* password	-Same as text but hides the text that is typed
* checkbox	-An on/off switch
* radio	-(Part of) a multiple-choice field
* file	-Allows the user to choose a file from their computer

Form fields do not necessarily have to appear in a < form> tag. You can put them anywhere in a page. Such fields cannot be submitted (only a form as a whole can), but when responding to input with JavaScript, we often do not want to submit our fields normally anyway.
```
<p><input type="text" value="abc"> (text)</p>
<p><input type="password" value="abc"> (password)</p>
<p><input type="checkbox" checked> (checkbox)</p>
<p><input type="radio" value="A" name="choice">
<input type="radio" value="B" name="choice" checked>
<input type="radio" value="C" name="choice"> (radio)</p>
<p><input type="file"> (file)</p>
```
The JavaScript interface for such elements differs with the type of the element. We’ll go over each of them later in the chapter.

Multiline text fields have their own tag, < textarea>, mostly because using an attribute to specify a multiline starting value would be awkward. The < textarea> requires a matching < /textarea> closing tag and uses the text between those two, instead of using its value attribute, as starting text.
```
<textarea>
one
two
three
</textarea>
```
Finally, the < select> tag is used to create a field that allows the user to select from a number of predefined options.
```
<select>
  <option>Pancakes</option>
  <option>Pudding</option>
  <option>Ice cream</option>
</select>
```
Whenever the value of a form field changes, it fires a "change" event.

### Focus

Unlike most elements in an HTML document, form fields can get keyboard focus. When clicked—or activated in some other way—they become the currently active element, the main recipient of keyboard input.

If a document has a text field, text typed will end up in there only when the field is focused. Other fields respond differently to keyboard events. For example, a < select> menu tries to move to the option that contains the text the user typed and responds to the arrow keys by moving its selection up and down.

We can control focus from JavaScript with the focus and blur methods. The first moves focus to the DOM element it is called on, and the second removes focus. The value in document.activeElement corresponds to the currently focused element.
```
<input type="text">
<script>
  document.querySelector("input").focus();
  console.log(document.activeElement.tagName);
  // → INPUT
  document.querySelector("input").blur();
  console.log(document.activeElement.tagName);
  // → BODY
</script>
```
For some pages, the user is expected to want to interact with a form field immediately. JavaScript can be used to focus this field when the document is loaded, but HTML also provides the autofocus attribute, which produces the same effect but lets the browser know what we are trying to achieve. This makes it possible for the browser to disable the behavior when it is not appropriate, such as when the user has focused something else.
```
<input type="text" autofocus>
```
Browsers traditionally also allow the user to move the focus through the document by pressing the Tab key. We can influence the order in which elements receive focus with the tabindex attribute. The following example document will let focus jump from the text input to the OK button, rather than going through the help link first:
```
<input type="text" tabindex=1> <a href=".">(help)</a>
<button onclick="console.log('ok')" tabindex=2>OK</button>
```
By default, most types of HTML elements cannot be focused. But you can add a tabindex attribute to any element, which will make it focusable.

## Disabled fields:

All form fields can be disabled through their disabled attribute, which also exists as a property on the element’s DOM object.
```
<button>I'm all right</button>
<button disabled>I'm out</button>
```
Disabled fields cannot be focused or changed, and unlike active fields, they usually look gray and faded.

When a program is in the process of handling an action caused by some button or other control, which might require communication with the server and thus take a while, it can be a good idea to disable the control until the action finishes. That way, when the user gets impatient and clicks it again, they don’t accidentally repeat their action.

### The form as a whole:

When a field is contained in a < form> element, its DOM element will have a property form linking back to the form’s DOM element. The < form> element, in turn, has a property called elements that contains an array-like collection of the fields inside it.

The name attribute of a form field determines the way its value will be identified when the form is submitted. It can also be used as a property name when accessing the form’s elements property, which acts both as an array-like object (accessible by number) and a map (accessible by name).
```
<form action="example/submit.html">
  Name: <input type="text" name="name"><br>
  Password: <input type="password" name="password"><br>
  <button type="submit">Log in</button>
</form>
<script>
  var form = document.querySelector("form");
  console.log(form.elements[1].type);
  // → password
  console.log(form.elements.password.type);
  // → password
  console.log(form.elements.name.form == form);
  // → true
</script>
```
A button with a type attribute of submit will, when pressed, cause the form to be submitted. Pressing Enter when a form field is focused has the same effect.

Submitting a form normally means that the browser navigates to the page indicated by the form’s action attribute, using either a GET or a POST request. But before that happens, a "submit" event is fired. This event can be handled by JavaScript, and the handler can prevent the default behavior by calling preventDefault on the event object.
```
<form action="example/submit.html">
  Value: <input type="text" name="value">
  <button type="submit">Save</button>
</form>
<script>
  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    console.log("Saving value", form.elements.value.value);
    event.preventDefault();
  });
</script>
```
Intercepting "submit" events in JavaScript has various uses. We can write code to verify that the values the user entered make sense and immediately show an error message instead of submitting the form when they don’t. Or we can disable the regular way of submitting the form entirely, as in the previous example, and have our program handle the input, possibly using XMLHttpRequest to send it over to a server without reloading the page.

## Text fields

Fields created by < input> tags with a type of text or password, as well as textarea tags, share a common interface. Their DOM elements have a value property that holds their current content as a string value. Setting this property to another string changes the field’s content.

The selectionStart and selectionEnd properties of text fields give us information about the cursor and selection in the text. When nothing is selected, these two properties hold the same number, indicating the position of the cursor. For example, 0 indicates the start of the text, and 10 indicates the cursor is after the 10th character. When part of the field is selected, the two properties will differ, giving us the start and end of the selected text. Like value, these properties may also be written to.

As an example, imagine you are writing an article about Khasekhemwy but have some trouble spelling his name. The following code wires up a < textarea> tag with an event handler that, when you press F2, inserts the string “Khasekhemwy” for you.
```
<textarea></textarea>
<script>
  var textarea = document.querySelector("textarea");
  textarea.addEventListener("keydown", function(event) {
    // The key code for F2 happens to be 113
    if (event.keyCode == 113) {
      replaceSelection(textarea, "Khasekhemwy");
      event.preventDefault();
    }
  });
  function replaceSelection(field, word) {
    var from = field.selectionStart, to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word +
                  field.value.slice(to);
    // Put the cursor after the word
    field.selectionStart = field.selectionEnd =
      from + word.length;
  }
</script>
```
The replaceSelection function replaces the currently selected part of a text field’s content with the given word and then moves the cursor after that word so that the user can continue typing.

The "change" event for a text field does not fire every time something is typed. Rather, it fires when the field loses focus after its content was changed. To respond immediately to changes in a text field, you should register a handler for the "input" event instead, which fires for every time the user types a character, deletes text, or otherwise manipulates the field’s content.

The following example shows a text field and a counter showing the current length of the text entered:
```
<input type="text"> length: <span id="length">0</span>
<script>
  var text = document.querySelector("input");
  var output = document.querySelector("#length");
  text.addEventListener("input", function() {
    output.textContent = text.value.length;
  });
</script>
```
## Checkboxes and radio buttons:

A checkbox field is a simple binary toggle. Its value can be extracted or changed through its checked property, which holds a Boolean value.
```
<input type="checkbox" id="purple">
<label for="purple">Make this page purple</label>
<script>
  var checkbox = document.querySelector("#purple");
  checkbox.addEventListener("change", function() {
    document.body.style.background =
      checkbox.checked ? "mediumpurple" : "";
  });
</script>
```
The < label> tag is used to associate a piece of text with an input field. Its for attribute should refer to the id of the field. Clicking the label will activate the field, which focuses it and toggles its value when it is a checkbox or radio button.

A radio button is similar to a checkbox, but it’s implicitly linked to other radio buttons with the same name attribute so that only one of them can be active at any time.
```
Color:
<input type="radio" name="color" value="mediumpurple"> Purple
<input type="radio" name="color" value="lightgreen"> Green
<input type="radio" name="color" value="lightblue"> Blue
<script>
  var buttons = document.getElementsByName("color");
  function setColor(event) {
    document.body.style.background = event.target.value;
  }
  for (var i = 0; i < buttons.length; i++)
    buttons[i].addEventListener("change", setColor);
</script>
```
The document.getElementsByName method gives us all elements with a given name attribute. The example loops over those (with a regular for loop, not forEach, because the returned collection is not a real array) and registers an event handler for each element. Remember that event objects have a target property referring to the element that triggered the event. This is often useful in event handlers like this one, which will be called on different elements and need some way to access the current target.

## Select fields:

Select fields are conceptually similar to radio buttons—they also allow the user to choose from a set of options. But where a radio button puts the layout of the options under our control, the appearance of a < select> tag is determined by the browser.

Select fields also have a variant that is more akin to a list of checkboxes, rather than radio boxes. When given the multiple attribute, a < select> tag will allow the user to select any number of options, rather than just a single option.
```
<select multiple>
  <option>Pancakes</option>
  <option>Pudding</option>
  <option>Ice cream</option>
</select>
```
This will, in most browsers, show up differently than a non-multiple select field, which is commonly drawn as a drop-down control that shows the options only when you open it.

The size attribute to the < select> tag is used to set the number of options that are visible at the same time, which gives you explicit control over the drop-down’s appearance. For example, setting the size attribute to "3" will make the field show three lines, whether it has the multiple option enabled or not.

Each < option> tag has a value. This value can be defined with a value attribute, but when that is not given, the text inside the option will count as the option’s value. The value property of a < select> element reflects the currently selected option. For a multiple field, though, this property doesn’t mean much since it will give the value of only one of the currently selected options.

The < option> tags for a < select> field can be accessed as an array-like object through the field’s options property. Each option has a property called selected, which indicates whether that option is currently selected. The property can also be written to select or deselect an option.

The following example extracts the selected values from a multiple select field and uses them to compose a binary number from individual bits. Hold Ctrl (or Command on a Mac) to select multiple options.
```
<select multiple>
  <option value="1">0001</option>
  <option value="2">0010</option>
  <option value="4">0100</option>
  <option value="8">1000</option>
</select> = <span id="output">0</span>
<script>
  var select = document.querySelector("select");
  var output = document.querySelector("#output");
  select.addEventListener("change", function() {
    var number = 0;
    for (var i = 0; i < select.options.length; i++) {
      var option = select.options[i];
      if (option.selected)
        number += Number(option.value);
    }
    output.textContent = number;
  });
</script>
```
## File fields:

File fields were originally designed as a way to upload files from the browser’s machine through a form. In modern browsers, they also provide a way to read such files from JavaScript programs. The field acts as a manner of gatekeeper. The script cannot simply start reading private files from the user’s computer, but if the user selects a file in such a field, the browser interprets that action to mean that the script may read the file.

A file field usually looks like a button labeled with something like “choose file” or “browse”, with information about the chosen file next to it.
```
<input type="file">
<script>
  var input = document.querySelector("input");
  input.addEventListener("change", function() {
    if (input.files.length > 0) {
      var file = input.files[0];
      console.log("You chose", file.name);
      if (file.type)
        console.log("It has type", file.type);
    }
  });
</script>
```
The files property of a file field element is an array-like object (again, not a real array) containing the files chosen in the field. It is initially empty. The reason there isn’t simply a file property is that file fields also support a multiple attribute, which makes it possible to select multiple files at the same time.

Objects in the files property have properties such as name (the filename), size (the file’s size in bytes), and type (the media type of the file, such as text/plain or image/jpeg).

What it does not have is a property that contains the content of the file. Getting at that is a little more involved. Since reading a file from disk can take time, the interface will have to be asynchronous to avoid freezing the document. You can think of the FileReader constructor as being similar to XMLHttpRequest but for files.
```
<input type="file" multiple>
<script>
  var input = document.querySelector("input");
  input.addEventListener("change", function() {
    Array.prototype.forEach.call(input.files, function(file) {
      var reader = new FileReader();
      reader.addEventListener("load", function() {
        console.log("File", file.name, "starts with",
                    reader.result.slice(0, 20));
      });
      reader.readAsText(file);
    });
  });
</script>
```
Reading a file is done by creating a FileReader object, registering a "load" event handler for it, and calling its readAsText method, giving it the file we want to read. Once loading finishes, the reader’s result property contains the file’s content.

The example uses Array.prototype.forEach to iterate over the array since in a normal loop it would be awkward to get the correct file and reader objects from the event handler. The variables would be shared by all iterations of the loop.

```
function readFile(file) {
  return new Promise(function(succeed, fail) {
    var reader = new FileReader();
    reader.addEventListener("load", function() {
      succeed(reader.result);
    });
    reader.addEventListener("error", function() {
      fail(reader.error);
    });
    reader.readAsText(file);
  });
}
```
It is possible to read only part of a file by calling slice on it and passing the result (a so-called blob object) to the file reader.
