#!/usr/local/bin/node

let request = require("request");
let Phrase = require("felipeparreira-palindrome");
let url = 'https://cdn.learnenough.com/phrases.txt'

request(url, function(error, response, body) {
  let lines = body.split("\n");
  let palindromes = lines.filter(line => new Phrase(line).palindrome());

  palindromes.forEach(function(palindrome) {
    console.log("palindrome detected:", palindrome);
  });
});
