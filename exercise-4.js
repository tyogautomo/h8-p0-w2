var tanggal = 100; //assign tanggal (1 sampai 31)
var bulan = 8; //assign bulan (1 sampai 12)
var tahun = 2030; //assign tahun (1900-2200)


if (tanggal > 0 && tanggal <= 31) {
    switch (bulan) {
        case 1:
            bulan = "Januari";
            break;
        case 2:
            bulan = "Februari"
            break;
        case 3:
            bulan = "Maret"
            break;
        case 4:
            bulan = "April"
            break;
        case 5:
            bulan = "Mei"
            break;
        case 6:
            bulan = "Juni"
            break;
        case 7:
            bulan = "Juli"
            break;
        case 8:
            bulan = "Agustus"
            break;
        case 9:
            bulan = "September"
            break;
        case 10:
            bulan = "Oktober"
            break;
        case 11:
            bulan = "November"
            break;
        case 12:
            bulan = "Desember"
            break;
    }
    console.log(tanggal + " " + bulan + " " + tahun);
} else {
    console.log("masukkan tanggal dengan benar")
}