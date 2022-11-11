
"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");
 
function print(x) {
  console.log(x);
}
let inputString = "";
let currentLine = 0;
 
process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n");
  main();
});
function readline() {
  return inputString[currentLine++];
}
 
// ********** Code Start **********

function main() {
    let firstLine= readline().split(' ');
    // 8 5.split(" ")
    // ['8', "5"]
    // firstLine=["8", '5']
    var people = +(firstLine[0]) ;
    var targated_person = +(firstLine[1]);
    var arr = readline().split(' ');
    // 10 4 3 2 6.split(" ")
    // ["10","4","5"]
    var ans = 0;
    for (let i = 0; i < people; i++) {
        if (+(arr[i]) > 0 && +(arr[i]) >= +(arr[targated_person - 1])) {
            ans++;
        }
    }
    console.log(ans);
}


