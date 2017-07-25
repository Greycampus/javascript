function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}
for (var i = 0; i < 3; i++) {
  prompt('Whats your name?', function (input) {
      console.log(input);
      process.exit();
  });

}
