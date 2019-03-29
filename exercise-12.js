// EXERCISE 12

function konversiMenit(menit) {
    if (menit % 60 >= 10) {
        return Math.floor((menit / 60)) + ":" + (menit % 60) + " jam";
    } else if (menit % 60 < 10) {
        return Math.floor((menit / 60)) + ":0" + (menit % 60) + " jam";
    }

}
console.log(konversiMenit(300));