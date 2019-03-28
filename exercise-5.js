//1. Let's Form a Sentence
console.log("NO.1 - LET'S FORM A SENTENCE");
var first = "Javacript";
var second = " is";
var third = " awesome";
var fourth = " and";
var fifth = " I";
var sixth = " love";
var seventh = " it!";

console.log(first + second + third + fourth + fifth + sixth + seventh);

//2. Index Accessing -1 by 1
console.log("------------------------------------------------------------------------------");
console.log("NO.2 - INDEX ACCESING 1 BY 1");
var sentence = "Wow Javascript is so cool";
var firstWord = sentence[0] + sentence[1] + sentence[2];
var secondWord = sentence[4] + sentence[5] + sentence[6] + sentence[7];
var thirdWord = sentence[24] + sentence[23] + sentence[22] + sentence[13];
var fourthWord = sentence[8] + sentence[9] + sentence[10] + sentence[11] + sentence[12] + sentence[13];
var fifthWord = sentence[18] + sentence[19] + sentence[18] + sentence[15] + sentence[18];

console.log("First Word : " + firstWord);
console.log("Second Word : " + secondWord);
console.log("Third Word : " + thirdWord);
console.log("Fourth Word : " + fourthWord);
console.log("Fifth Word : " + fifthWord);

//3. Breaking Sentence (Again) using Substring
console.log("------------------------------------------------------------------------------");
console.log("NO.3 - BREAKING SENTENCE (AGAIN) USING SUBSTRING");
var sentence2 = "Wow JavaScript is very amazing.";
var firstWord3 = sentence2.substring(0, 3);
var secondWord3 = sentence2.substring(4, 14);
var thirdWord3 = sentence2.substring(15, 17);
var fourthWord3 = sentence2.substring(18, 22);
var fifthWord3 = sentence2.substring(23, 30);

console.log("First Word : " + firstWord3);
console.log("Second Word : " + secondWord3);
console.log("Third Word : " + thirdWord3);
console.log("Fourth Word : " + fourthWord3);
console.log("Fifth Word : " + fifthWord3);

//4. Breaking Sentence (yet Again) and Count Each Length
console.log("------------------------------------------------------------------------------");
console.log("NO.4 - BREAKING SENTENCE (YET AGAIN) AND COUNT EACH LENGTH");
var sentence4 = "Wow JavaScript is very amazing.";
var firstWord4 = sentence4.substring(0, 3);
var secondWord4 = sentence4.substring(4, 14);
var thirdWord4 = sentence4.substring(15, 17);
var fourthWord4 = sentence4.substring(18, 22);
var fifthWord4 = sentence4.substring(23, 30);

var firstWord4Length = firstWord4.length;
var secondWord4Length = secondWord4.length;
var thirdWord4Length = thirdWord4.length;
var fourthWord4Length = fourthWord4.length;
var fifthWord4Length = fifthWord4.length;

console.log("First Word : " + firstWord4 + ", with length : " + firstWord4Length);
console.log("Second Word : " + secondWord4 + ", with length : " + secondWord4Length);
console.log("Third Word : " + thirdWord4 + ", with length : " + thirdWord4Length);
console.log("Fourth Word : " + fourthWord4 + ", with length : " + fourthWord4Length);
console.log("Fifth Word : " + fifthWord4 + ", with length : " + fifthWord4Length);