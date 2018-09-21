#!/usr/local/bin/node

let fs = require("fs");
let Phrase = require("felipeparreira-palindrome");

let text = fs.readFileSync("phrases.txt", "utf-8");
let fileContent = "";
text.split("\n").forEach(function(line) {
  let phrase = new Phrase(line);
  if (phrase.palindrome()) {
    console.log("palindrome detected:", line);
    fileContent += line + "\n";
  }
});
fs.writeFile("./palindromes.txt", fileContent, function(err) {
if(err) {
    return console.log(err);
}

console.log("The file was saved!");
});
