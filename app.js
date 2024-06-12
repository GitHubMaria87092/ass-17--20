// question 1
let mulDimArr =[[]]

// question 2
let multiDimeArra = [[1, 2, 3] , [4, 5, 6] , [7, 8, 9]]
for(let i = 0; i<multiDimeArra.length; i++){
    for(let j = 0; j<multiDimeArra.length; j++){
        document.write(multiDimeArra[i][j])
    }
    document.write("<br>")
}

// question 3
for(var i = 1; i<=10; i++){
    document.write( i + "<br>");
}

// question 4

// let table = +prompt("Enter a Number you want to show table on it");
// let minNum = +prompt("Enter a Number you want to start table on it");
// let maxNum = +prompt("Enter a Number you want to end table on it");


// for(var i = minNum; i<=maxNum; i++){
//     document.write(table + " " + "x" + " " + i + " " + "=" + table*i + "<br>")
// }

// question 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"]

for(var i = 0; i<fruits.length; i++){
    document.write(fruits[i] + "<br>")
}

// question 6
for(var i = 1; i<=10; i++){
    document.write( i + " , ");
}

document.write("<br>")

for(var j = 10; j>=1; j--){
    document.write( j + " , ");
}

document.write("<br>")

for(var k = 2; k<=20; k += 2){
    document.write( k + " , ");
}

document.write("<br>")

for(var l = 1; l<=20; l++)
{
    if(l % 2 !== 0){
        document.write(l + " , ")
    }
}

document.write("<br>")

for(var k = 2; k<=20; k += 2){
    document.write( k+"k" + " , ");
}
document.write("<br>" + "<br>")


// question 7
var menue = ["cake", "apple pie", "cookie", "chips", "patties"];
var kiaKhanaHe = prompt("Welcome to our Bakery Order what you want sir / Mam");
var matchFound = false;

for(var i=0; i<menue.length; i++){
    if(menue[i]===kiaKhanaHe){
        matchFound=true
        alert("Yes it's available")
        break;
    }
}
if(matchFound==false){
    alert("Sorry it's not available")
}

// question 8
let num = [24, 53, 78, 91, 12];
let numLarge = [91]

document.write("Array items is ")

for(var i = 0; i<num.length; i++){
    document.write(num[i] + " , " )
}
document.write("<br>" + "Largest Number is " + numLarge + "<br>" + "<br>")

// question 9
let num1 = [24, 53, 78, 91, 12];
let numSmall = [12]

document.write("Array items is ")

for(var i = 0; i<num.length; i++){
    document.write(num1[i] + " , " )
}
document.write("<br>" + "Smallest Number is " + numSmall)

// question 10

document.write("<br>" + "<br>")
for(var k = 5; k<=100; k += 5){
    document.write( k + " , ");
}
