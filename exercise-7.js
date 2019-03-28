console.log("===MENYUSUN BARISAN BINTANG===");
var rows1 = ""

for (var x = 1; x <= 5; x++) {
    console.log(rows1 = "*");
}

console.log("-------------------------------------------------")

console.log("===MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING===")
var rows2 = ""

for (var a = 1; a <= 5; a++) {
    var line = "";
    for (var b = 1; b <= 5; b++) {
        line += "*";
    }
    if (a == 5) {
        rows2 += line;
    } else {
        rows2 += line + "\n"
    }
}

console.log(rows2);

console.log("-------------------------------------------------")

console.log("===MENYUSUN BARISAN TANGGA BINTANG DENGAN NESTED LOOPING===");
var rows3 = "";

for (var z = 1; z <= 5; z++) {
    var asterix = "*"
    console.log(rows3 += asterix);
}