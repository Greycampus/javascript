# Cookies

Cookies are data, stored in small text files, on your computer.
When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
Cookies were invented to solve the problem "how to remember information about the user":
* When a user visits a web page, his name can be stored in a cookie.
* Next time the user visits the page, the cookie "remembers" his name.

When a browser requests a web page from a server, cookies belonging to the page is added to the request. This way the server gets the necessary data to "remember" information about users.

### Create a Cookie with JavaScript

JavaScript can create, read, and delete cookies with the document.cookie property.

With JavaScript, a cookie can be created like this:
```
  document.cookie = "username=John Doe";
```
You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
```
  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2017 12:00:00 UTC";
```
With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.
```
  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/";
```
### Read a Cookie

With JavaScript, cookies can be read like this:
```
var x = document.cookie;
```
### Delete a Cookie

You don't have to specify a cookie value when you delete a cookie.<br/>
Just set the expires parameter to a passed date:
```
document.cookie = "username=; expires=Thu, 01 Jan 2018 00:00:00 UTC; path=/;";
```
### A Function to Set a Cookie

First, we create a function that stores the name of the visitor in a cookie variable:

**Example**
```
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
```
Example explained:

The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).<br/>
The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.

### A Function to Get a Cookie

Then, we create a function that returns the value of a specified cookie:

**Example**
```
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
```
Function explained:

Take the cookiename as parameter (cname).<br/>
Create a variable (name) with the text to search for (cname + "=").<br/>
Decode the cookie string, to handle cookies with special characters, e.g. '$'<br/>
Split document.cookie on semicolons into an array called ca (ca = decodedCookie.split(';')).<br/>
Loop through the ca array (i = 0; i < ca.length; i++), and read out each value c = ca[i]).<br/>
If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).<br/>
If the cookie is not found, return "".

### A Function to Check a Cookie

Last, we create the function that checks if a cookie is set.<br/>
If the cookie is set it will display a greeting.<br/>
If the cookie is not set, it will display a prompt box, asking for the name of the user, and stores the username cookie for 365 days, by calling the setCookie function:

**Example**
```
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
```
