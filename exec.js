console.log("Movimento é vida");

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Qual seu nome?\n", function(answer) {
    var resp = answer;
    console.log("\nBoa tarde " + resp );
    leitor.close();
});