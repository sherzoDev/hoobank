const navbar = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close");
// var mrgn = document.querySelector(".space-x-16");
var lstt = document.getElementById("lst");
var nav = document.getElementById("nav");
var head = document.querySelector(".header");
var list = document.querySelector(".sitenav");
var lnks = nav.getElementsByClassName("sitenav__link")[0];
navbar.addEventListener("click" , function(){
  head.classList.toggle("sitenav-on");
  
  document.body.classList.toggle("overflow");
    });

  // closeBtn.addEventListener("click" , function(){
  //   head.classList.remove("sitenav-on");
  //   document.body.classList.remove("overflow");
  //   lstt.classList.add("space-x-16");

  // window.onclick = function(event) {
  //   if (event.target == nav) {
  //     nav.style.display = "none";
  //   }
  // };
// });

// var username  = prompt("Enter your name: ");
// var lastname = prompt("Enter your last name: ");
// var user_age = prompt("Enter your age: ");
// var user_passport = prompt("Enter your passport series: ");
// var user_currency = prompt("Enter your currency: ");

// var currency_result = user_currency * 11000;

// console.log(username + " " + lastname + "\n" + user_age + "\n" + user_passport + "\n" + currency_result + " " +  "so'm");





/* 5 - masala:  Ikki sonni bir biriga bo'lganda qoldiqning kvadratini hisoblang*/

// var first_division = prompt("Birinchi bo'linadigan sonni kiriting: ");
// var second_division = prompt("Ikkinchi bo'linadigan sonni kiriting: ");

// var result = (first_division % second_division)**2;

// console.log(result);




/* 10 - masala:  Bo'yingizni yoshingizga bo'lib natijani chiqaring! Bo'y = smda*/

// var user_height = prompt("Enter your height: ");
// var user_age = prompt("Enter your age: ");

// var result = user_height / user_age;
// console.log(result);




/* 17 - masala:  Berilgan sonni kvadratga oshirib, 5 ga ko'paytirib, ildiz oling*/

// var user_number = prompt("Enter random number: ");
// var result = (user_number * user_number) *5;
// console.log(result);
// console.log(Math.sqrt(result));




/* 19 - masala:  doiraning yuzini hisoblang. S=pi kvadrat*/

// var user_circle = prompt("Enter your cirlce's radius: ");
// var result = user_circle * user_circle; 

// console.log(Math.PI * result);




/* 20 - masala: Berilgan sonni yaxlitlang */

// var random_number = prompt("Random number: ");

// console.log(Math.ceil(random_number));




/* 2 - masala: Og'irligi M kg da berilgan Uning to'liq tonnalar sonini aniqlang. 1t = 1000kg */

// var weights = prompt("Enter weights in kilogramm:");

// var result = weights / 1000;

// console.log(result);




/* 3 - masala: Ikki sonning yig'indisini 3ga ko'paytirib beradigan dastur tuzing */

// var first_number = prompt("Enter first number: ");
// var second_number = prompt("Enter second number: ");

// var x = parseInt(first_number);
// var y = parseInt(second_number);

// var result = (x + y) *3;

// console.log(result);





/* 4 - masala: kki sonni bir biriga bo'lganda qoldiq nechi ekanini aniqlang. Birinchi son ikkinchisidan katta */

// var x = prompt("Katta son kiriting: ");
// var y = prompt("Kichik son kiriting: ");

// var a = parseInt(x);
// var b = parseInt(y);

// var result = (a % b);
// console.log(result);




/* 5 - masala: Ikki sonni bir biriga bo'lganda, qoldiqni kvadratini hisoblang */

// var x = prompt("Birinchi son kiriting: ");
// var y = prompt("ikkinchi son kiriting: ");

// var a = parseInt(x);
// var b = parseInt(y);

// var result = (a % b) * 2;
// console.log(result);



/* 6 - masala: Berilgan sonning kvadratini hisoblaydigan dastur tuzing */

// var x = prompt("Son kiriting: ");

// var y = parseInt(x) ** 2;

// console.log(y);




/* 7 - masala: Berilgan sonning kvadratini hisoblaydigan dastur tuzing */

// Boshida ishlangan




/* 8 - masala: 4 ta son berilgan, ularning birinchi ushtasini yig'indisidan keyingi 4 chisi ayrilsin */

// var a = prompt("Birinchi son kiriting: ");
// var b = prompt("Ikkinchi son kiriting: ");
// var c = prompt("Uchinchi son kiriting: ");
// var d = prompt("To'rtinchi son kiriting: ");

// var aa = parseInt(a);
// var bb = parseInt(b);
// var cc = parseInt(c);
// var dd = parseInt(d);

// var result = (aa + bb + cc) - dd;

// console.log(result);


// 9 masala ham boshidigia o'xshash

//  10 masala tepada ishlangan




/* 11 - masala: Ismingizni kiritganingizda siz bilan quyuuuq salomlashadigan dastur tuzing */

// var good_sentence = prompt("Enter your name: ");

// console.log("Assalomu alaykum" + " " +  good_sentence + " " + "oka. Charchamayapsizmi?");




/* 12 - masala: Ismingizni kiritganingizda ismingizdagi harflar uzunligini sanaydigan dastur tuzing */

// var user_name = prompt("Enter your name: ");

// console.log("Ismingiz" + " " + user_name.length + "ta harfdan iborat");




/* 13 - masala: Ismingizni kiritganingizda, ismingizdagi harflar uzunligini sanab, yoshingizga qo'shib chiqaring */

// var user_name = prompt("Enter your name: ");
// var user_age = prompt("Enter your age: ");

// console.log("Ismingiz" + " " + user_name.length + "ta harfdan iborat. Yoshingiz" + " " + user_age + "da");





/* 14 - masala: Familiyangiz orqali siz bilan salomlashadigan dastur tuzing! */

// var user_name = prompt("Enter your name: ");
// var user_lastname = prompt("Enter your last name: ");

// console.log("Assalomu alaykum" + " " + user_lastname);







/* 15 - masala: Berilgan sonni kichigi bo'yicha yaxlitlang */

// var random_number = prompt("Random number: ");

// var x = parseInt(random_number);
// console.log(Math.floor(x));




/* 16 - masala: Berilgan sondan ildiz olib, so'ngra oddiy xolatda yaxlitlang */

// var random_number = prompt("Random number: ");
// var x = parseInt(random_number);
// var y = Math.sqrt(x)
// console.log(y);
// console.log(Math.round(y));




// 17 - masala ishlangan

/* 18 - masala: Kvadratning yuzini hisoblaydigan dastur tuzin. S=kakvadrat */
// var first_square = prompt("Enter first length of square: ");
// var second_square = prompt("Enter second length of square: ");
// var x = parseInt(first_square);
// var y = parseInt(second_square);
// var result = x + y;
// console.log(result);


// 19 masala ishlangan



/* 20 - masala: Berilgan sonni kattasi bo'yicha yaxlitlang */

// var random_number = prompt("Random number: ");

// console.log(Math.ceil(random_number));



/* 21 - masala: 0 dan 10 gacha butun sonlar orasidan random son chiqaring */

// console.log(Math.floor(Math.random() * 10));



/* 22 - masala: 0 dan 10 gacha sonlar orasidan random son oling va uni kvadratga oshirib 3ga bo'lgandagi qoldiqni chiqaring */


// var x = Math.floor(Math.random() * 10);
// var y = (x * x) % 3;

// console.log(y);