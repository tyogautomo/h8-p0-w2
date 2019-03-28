// No.1 - Melakukan Looping Menggunakan While
console.log("NO.1 MELAKUKAN LOOPING MENGGUNAKAN WHILE")
console.log("LOOPING PERTAMA")
var x = 0;

while (x < 20) {
    x += 2;
    console.log(x + " - I love coding");
}
console.log("-------------------");

console.log("LOOPING KEDUA")
var y = 20;

while (y > 0) {
    console.log(y + " - I love coding");
    y -= 2;
}

// No.2 - Melakukan Looping Menggunakan For
console.log("----------------------------------------------------------------------------")
console.log("NO.2 MELAKUKAN LOOPING MENGGUNAKAN FOR")
console.log("LOOPING PERTAMAX");

for (var a = 1; a <= 20; a++) {
    console.log(a + " - I love coding");
}

console.log("----------------------------------------");
console.log("LOOPING KEDUA");

for (var b = 20; b > 0; b--) {
    console.log(b + " - I will become fullstack developer");
}

// No.3 - Angka Ganjil dan Genap
console.log("----------------------------------------------------------------------------")
console.log("NO.3 ANGKA GANJIL DAN GENAP")
console.log("LOOPING GANJIL - GENAP")

for (var c = 0; c <= 100; c++) {
    if (c % 2 == 0) {
        console.log("counter sekarang : " + c + " , GENAP");
    } else {
        console.log("counter sekarang : " + c + " , GAJIL");
    }
}

console.log("---------------------------------------------");
console.log("LOOPING PERTAMBAHAN COUNTER = 2");

for (var d = 0; d < 100; d += 2) {
    if (d % 3 == 0) {
        console.log("counter sekarang : " + d + " , dimana " + d + " adalah kelipatan 3");
    } else {
        console.log("counter sekarang : " + d);
    }
}

console.log("---------------------------------------------");
console.log("LOOPING PERTAMBAHAN COUNTER = 5");

for (var i = 0; i < 100; i += 5) {
    if (i % 6 == 0) {
        console.log("counter sekarang : " + i + " , dimana " + i + " adalah kelipatan 6");
    } else {
        console.log("counter sekarang : " + i);
    }
}

console.log("---------------------------------------------");
console.log("LOOPING PERTAMBAHAN COUNTER = 9");

for (var j = 0; j < 100; j += 9) {
    if (j % 10 == 0) {
        console.log("counter sekarang : " + j + " , dimana " + j + " adalah kelipatan 10");
    } else {
        console.log("counter sekarang : " + j);
    }
}

console.log("------------------- DONE -------------------");