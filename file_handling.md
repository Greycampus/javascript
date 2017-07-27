# File Handling

Node implements File I/O using simple wrappers around standard POSIX functions. The Node File System (fs) module can be imported using the following syntax:
```
var fs = require("fs")
```
Every method in the fs module has synchronous as well as asynchronous forms. Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error. It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.

## Create a file

Create a text file named input.txt with some content
```
hello javascript
```
**Example:**
```
var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
```
Now run the main.js

```
$ node main.js
```

**Output:**
```
Synchronous read:hello javascript 
Program Ended
Asynchronous read: hello javascript
```
## Open a File
Syntax:

Following is the syntax of the method to open a file in asynchronous mode:
```
fs.open(path, flags[, mode], callback)
```
Parameters:
* path − This is the string having file name including path.
* flags − Flags indicate the behavior of the file to be opened. All possible values have been mentioned below.
* mode − It sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.
* callback − This is the callback function which gets two arguments (err, fd).

|Flag| 	Description|
|---|---|
|r |	Open file for reading. An exception occurs if the file does not exist.|
|r+ |	Open file for reading and writing. An exception occurs if the file does not exist.|
|rs |	Open file for reading in synchronous mode.|
|rs+ |	Open file for reading and writing, asking the OS to open it synchronously. See notes for 'rs' about using this with caution.|
|w |	Open file for writing. The file is created (if it does not exist) or truncated (if it exists).|
|wx |	Like 'w' but fails if the path exists.|
|w+ |	Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).|
|wx+| 	Like 'w+' but fails if path exists.|
|a |	Open file for appending. The file is created if it does not exist.
|ax |	Like 'a' but fails if the path exists.|
|a+| 	Open file for reading and appending. The file is created if it does not exist.|
|ax+ |	Like 'a+' but fails if the the path exists.|

**Example:**
```
var fs = require("fs");
// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");     
});
```
Now run file
```
$ node main.js
```
**Output:**
Going to open file!
File opened successfully!

## Get File Information

Syntax:
```
fs.stat(path, callback)
```
Parameters:
* path − This is the string having file name including path.
* callback − This is the callback function which gets two arguments (err, stats) where stats is an object of fs.Stats type which is printed below in the example.

## Writing a File

Syntax:
```
fs.writeFile(filename, data[, options], callback)
```
This method will over-write the file if the file already exists. If you want to write into an existing file then you should use another method available.

Parameters:
* path − This is the string having the file name including path.
* data − This is the String or Buffer to be written into the file.
* options − The third parameter is an object which will hold {encoding, mode, flag}. By default. encoding is utf8, mode is octal value 0666. and flag is 'w'
* callback − This is the callback function which gets a single parameter err that returns an error in case of any writing error.

**Example:**
```
var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
```
Now run the file
```
$ node main.js
```
Output:
```
Going to write into existing file
Data written successfully!
Let's read newly written data
Asynchronous read: Simply Easy Learning!
```
## Reading a File

Syntax:
```
fs.read(fd, buffer, offset, length, position, callback)
```
This method will use file descriptor to read the file. If you want to read the file directly using the file name, then you should use another method available.

Parameters:
* fd − This is the file descriptor returned by fs.open().
* buffer − This is the buffer that the data will be written to.
* offset − This is the offset in the buffer to start writing at.
* length − This is an integer specifying the number of bytes to read.
* position − This is an integer specifying where to begin reading from in the file. If position is null, data will be read from the current file position.
* callback − This is the callback function which gets the three arguments, (err, bytesRead, buffer).

**Example**
```
var fs = require("fs");
var buf = new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");
   console.log("Going to read the file");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes read");
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});
```
Now run the file
```
$ node main.js
```
Output:
```
Going to open an existing file
File opened successfully!
Going to read the file
97 bytes read
```

## Closing a File

Syntax:
```
fs.close(fd, callback)
```
Parameters:
* fd − This is the file descriptor returned by file fs.open() method.
* callback − This is the callback function No arguments other than a possible exception are given to the completion callback.

## Delete a File

Syntax:
```
fs.unlink(path, callback)
```
Parameters:
* path − This is the file name including path.
* callback − This is the callback function No arguments other than a possible exception are given to the completion callback.

**Example:**
```
var fs = require("fs");
console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
```
Now run the file
```
$ node main.js
```
**Output:**
```
Going to delete an existing file
File deleted successfully!
```
