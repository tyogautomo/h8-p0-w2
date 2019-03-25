/*
Nama harus diisi, boleh diisi apa saja

Peran harus diisi, terdapat tiga peran yaitu:
1. Ksatria
2. Tabib
3. Penyihir
*/

var nama = "nerdyNoobGuy27"; //isi nama dengan nama apa saja
var peran = ""; //isi 1 dari 3 peran yang telah tersedia

if (nama == false && peran == false) {
    console.log("\"Nama\" dan \"Peran\" harus diisi");
} else if (nama == true || peran == false) {
    console.log("Halo " + nama, ",\"Peran\" tidak boleh kosong.");
} else if (nama == false || peran == true) {
    console.log("Halo " + nama, ",\"Nama\" tidak boleh kosong.")
} else if (nama == true || peran == "Ksatria") {
    console.log("Selamat datang di dunia Proxytia, " + nama, ", peranmu saat ini adalah Ksatria yang sangat perkasa")
    console.log("Gunakan kekuatanmu untuk bertarung " + nama, "!")
} else if (nama == true || peran == "Tabib") {
    console.log("Selamat datang di dunia Proxytia, " + nama, ", peranmu saat ini adalah Tabib yang sangat pintar.")
    console.log("Gunakan kekuatanmu untuk menyembuhkan temanmu " + nama, "!")
} else if (nama == true || peran == "Penyihir") {
    console.log("Selamat datang di dunia Proxytia, " + nama, ", peranmu saat ini adalah Penyihir yang penuh dengan magic.")
    console.log("Gunakan kekuatanmu untuk menyihir musuhmu " + nama, "!")
} else {
    console.log("Pilih peran Ksatria, Tabib, atau Penyihir")
}
