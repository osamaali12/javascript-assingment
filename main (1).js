// Chapter 1 All Task:
//Task 1:

var d = new Date();
var time = d.getHours();

if (time < 12) {
  document.write("<b>Good morning!</b>" + "<br>");
}
if (time > 12) {
  document.write("<b>Good afternoon!</b>");
}
if (time == 12) {
  document.write("<b>Go eat lunch!</b>");
}

//Task 2:
alert('Error! Please a valid password');


//Task 3:
alert("Welcome to Js Land\n Happy Coding");

// Task 4:
alert("Welcome to Js Land");  // display string message

alert("Happy Coding!"); // display string message


//Task 5:
console.log("Hello... I can run JS through my web browser's console")

//Task 6:
function showAlert() {
    alert ("Hello world!"+"<br>");
}


// Chapter 2 All Task:
//Task 1:
var username= "john doe";
alert(username)


//Task 2:
var myname= "syed osama ali";
alert("My Full Name is " + myname);


//Task 3:
var message= "Hello World";
alert(message);


//Task 4:
var name="john doe";
var age= 15;
var designation="certified mobile application developer";

alert(name);
alert(age);
alert(designation);

//task 5:
for(var i=5;i>=1;i--)
{
for(var j=1;j<=i;j++)
{
document.write("Pizza");
}
document.write("<br>");
}


//Task 6:
var email= "syedusamaali2015@gmail.com";
alert("My Email Address is "+ email);

//Task 7:
var book= "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);


// task-8:
document.write("Yeah! I can write HTML content through Java Script"+ "<br>");


//task-9:
var a="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(a);


// Chapter 3 All Task:

// task 1:
var age = 15;
alert("I am " + age + " years old");

// task 2:
var track=14;
alert("You have visited" + track + "times")


// task 3:
var birthyear = 1995;
document.write("My birth year is "+ birthyear +"<br>");
document.write("Data type of my Declared variable is number" +"<br>");


// task 4:
var visitorname = "john doe";
var producttitle = "T-shirts";
var quantity = 5;
document.write(visitorname + " ordered " + quantity  +  producttitle + " on XYZ Clothing Stote "  + "<br>");



// Chapter 4 All Task:
 // Task 1:
 var name="Syed Osama ali", age = 25 , religion = "Islam";
 alert("my name is" + name + "my age is" + age + "my religion is" + religion);


 // Task 2:
 var _name="_name";
 var Age="Age";
 var $religion="$religion";
 var FatherName="FatherNamei";
 var _11= "_11";




 alert("Legal variable are " + _name + Age + $religion + FatherName + _11 + " illegal variable are  break do Alert var catch ");



 //Task 3:

 document.write("<b>Rules for naming JS variables</b>" + "<br>" + "<br>" + "<br>");
 document.write("variables names can only contain numbers, $ and _,for example $my_1st variable" + "<br>");
 document.write("Variables must begin with a letter, $ or _ . For example $name, _name or name"+ "<br>");
 document.write("Variables names are case sensative"+ "<br>");
 document.write("Variable names should not be JS Keywords"+ "<br>");



 // Chapter 5 All Task:
// Task 1:
var x=3, y=5;
var z= x + y;
document.write("sum of " +  x  + " and " +  y  + " is " +  z + "<br>");

// task 2:

var x=5, y=3;
var z= x - y;
document.write("subtraction of " +  x  + " and " +  y  + " is " +  z  + "<br>");


var x=5, y=3;
var z= x * y;
document.write("multiplication of " +  x  + " and " +  y  + " is " +  z  + "<br>");

var x=5, y=3;
var z= x / y;
document.write("division of " +  x  + " and " +  y  + " is " +  z  + "<br>");

var x=5, y=3;
var z= x % y;
document.write("modulus of " +  x  + " and " +  y  + " is " +  z  + "<br>" + "<br>" + "<br>");

// task 3:
var i = "undefined";
document.write("Value after variable declaration is:" + i + "<br>");

var c = 5;
document.write("Initial value is: " + c + "<br>");
var d = c + 1;
document.write("value after increment is:" + d + "<br>");
var e = d + 7;
document.write("value after addition is:" + e + "<br>");
var f = e - 1;
document.write("value after decrement is:" + f + "<br>");
var g = f / 3;
document.write("the remainder is:" + g + "<br>" + "<br>" + "<br>");



// task 4:
var g= 600, f=5;
var d = f*g;
document.write("Total cost to buy" + f + "tickets to a movie is " + d + "PKR" + "<br>" + "<br>" + "<br>");


// task -5:
for (var c=1; c<=10; c++){
    document.write("4" + "x" + c + "=" + 4*c + "<br>"+ "<br>"+ "<br>");
  }


//Task 6:
  var cTemp = 25;
  var ctoFahr = (cTemp * 9/5) + 32;
  document.write(cTemp + "C is "  + ctoFahr + "F"+ "<br>"+ "<br>")

  var ctoFahr = 70;
  var cTemp = (ctoFahr -32 ) * 5/9;
  document.write(ctoFahr + "F is "  + cTemp + "C" + "<br>"+ "<br>")

//Task 7:
var item1 = 650, item2 = 100, itemquantity1=3, itemquantity2=7, shippingcharges= 100;
var d = (item1 * itemquantity1)+(item2 * itemquantity2 )+shippingcharges;
document.write("<b>Shopping Cart</b>" + "<br>" + "<br>" + "<br>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + itemquantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + itemquantity1 + "<br>");
document.write("Shipping Charges is " + shippingcharges + "<br>");
document.write("Total Cost of your order is" + d + "<br>" + "<br>")

//Task 8:
var Totalmarks = 980, ObtainedMarks = 804;
var per = (ObtainedMarks/Totalmarks) * 100;
document.write("<b>Marks Sheet</b>" + "<br>" + "<br>" + "<br>");
document.write("Total Marks:" + Totalmarks + "<br>");
document.write("Obtained Marks:" + ObtainedMarks + "<br>");
document.write("Percentage:" + per + "<br>");



// task 9:
var Usdollars =10, saudiriyals = 25;
var currencyPKR = (104.80*Usdollars) + (28*saudiriyals);
document.write("<b>Currency in PKR</b>" + "<br>" + "<br>" + "<br>");
document.write("Total Currency in PKR " + currencyPKR + "<br>");   


// task 10:
var a = 10;
var b = ((a+5)*10)/2;
document.write("The Result is : " + b + "<br>");


// task 11:
var currentyear= 2020;
var birthyear = 1995;
var age = currentyear - birthyear;
document.write("<b>Age Calculator</b>" + "<br>" + "<br>" + "<br>");
document.write("Curret Year is :" + currentyear + "<br>");
document.write("Birth Year is :" + birthyear + "<br>");
document.write("Your Age is :" + age+ "<br>") ;

//task 12:
var radius= 20;
var circumference = 2*3.142*20;
var a = Math.pow(20, 2);  // for square root,
var area=3.142*a;
document.write("<b>The Geometrizer</b>" + "<br>" + "<br>" + "<br>");
document.write("Radius of circle is :" + radius + "<br>");
document.write("The Circumference  is :" + circumference + "<br>");
document.write("The Area is :" + area + "<br>") ;


// task 13:
var FavouriteSnack = "Chocolate Chip", currentage = 15, maximumage= 65, amountperday = 3;
var b = (maximumage * amountperday) - (currentage * amountperday);
document.write("<b>The Lifetime Supply Calculator</b>" + "<br>" + "<br>" + "<br>");
document.write("Favourite Snack :" + FavouriteSnack + "<br>");
document.write("Current Age :" + currentyear + "<br>");
document.write("Estimates Maximum Age:" + maximumage + "<br>") ;
document.write("Amount of Snacks per day:" + amountperday + "<br>");
document.write("You will need "  + b + " chocolate chip to last you until the ripe old age of " + maximumage + "<br>" + "<br>")



// Chapter 6 ("Alerts")

// task 1:
var a = 10;
var b = a + 1;
var c = b + 1;
var d = c - 1;
var e = d -1; 
document.write("Result"+ "<br>")
document.write("The value of a is: " + a +"<br>");
document.write("..........................................." + "<br>" + "<br>" + "<br>");
document.write("The value of ++a is " + b + "<br>");
document.write("Now the value of a is " + b + "<br>"+ "<br>");
document.write("The value of a++ is " + b + "<br>");
document.write("Now the value of a is " + c + "<br>"+ "<br>");
document.write("The value of --a is " + d + "<br>");
document.write("Now the value of a is " + b + "<br>"+ "<br>");
document.write("The value of a-- is " + d + "<br>");
document.write("Now the value of a is " + e + "<br>"+ "<br>");



// task-2:
var a = 2, b = 1;
var result = --a;
var result1 = --a - --b;
var result2 = --a - --b + ++b;
var result3 = --a - --b + ++b + b--;
document.write("The value of a is " + a + "<br>");
document.write("The value of b is " + b + "<br>");
document.write("The result --a is " + result + "<br>");
document.write("The result --a - --b is " + result1 + "<br>");
document.write("The result --a - --b + ++b is " + result2 + "<br>");
document.write("The result --a - --b + ++b + b-- is " + result3 + "<br>"+ "<br>");

// task -3 :
var x = prompt("Enter Your Name" + greet);
var greet = 'Good morning';
document.write(greet + x + "<br>");


// task-4:
var y = prompt("enter your number");
var no;
if(y == null){
  y = 5; 
}
for (var i=1; i<=10; i++){
  document.write(y + "x" + i + "=" + y*i + "<br>" + "<br>");
}

// else if(y != no){
//     for (var i=1; i<=10; i++){
//       document.write("5"+ "x" + i + "=" + 5*i + "<br>");
//     }
//   }

// task-5:
// var a = [1, 2, 3]
// for (var i=0; i<a.length ; i++)
// {
//   document.write(a[i]);
// }


// var inputArray = [];
// var size = 5; //Maximum Array size

// for(var i=0; i<size; i++) {
	
// 	//Taking Input from user
// 	inputArray[i] = prompt('Enter Element ' + (i+1));
// }
// //Print the array in the console.
// console.log(inputArray);


// Create one dimensional array 
// var a = new Array(4); 
  
// document.write("Subject" + "Total Marks" + "Obtained Marks" + "Percentage" + "<br>"); 
// // Loop to create 2D array using 1D array 
// for (var i = 0; i < a.length; i++) { 
//   a[i] = prompt("Enter Subject Name" + i);
//   a[i] = prompt("Enter Total Marks" + i);
//   a[i] = prompt("Enter Obtained Marks" + i);
//   a[i] = prompt("Enter Per" + i);
// }
// for(var j=0;j<a.length; j++){
//   document.write(a[j] + "<br/>");
// } 

// // Define a student object
// function Student(_name, _mark1, _mark2, _mark3) {
//   this.name = _name;
//   this.mark1 = _mark1;
//   this.mark2 = _mark2;
//   this.mark3 = _mark3;
// }

// // Define the array that will hold the students and their marks
// var TestResults = [];

// // Process HTML
// var Name = document.getElementById("Name").value;
// var Mark1 = document.getElementById("Mark1").value;
// var Mark2 = document.getElementById("Mark2").value;
// var Mark3 = document.getElementById("Mark3").value;

// // Add new student record
// TestResults.push(new Student(Name, Mark1, Mark2, Mark3));


// var rows = 4;
// var cols = 3;
// var a = new Array(rows);
// for (var i=0;i<rows; i++){
//   a[i]=new Array(cols);
// }
// for (var i=0;i<rows; i++){
//   for(var j=0; j<cols; j++){
//     a[i][j] = prompt("Enter Subject Name :")
//     a[i][j] = prompt("Enter Total Marks :")
//     a[i][j] = prompt("Enter Obtaines Marks :")
//   }
//   a[i]=new Array(cols);
// }
// for(var i=0; i<rows; i++){
//   for(var j=0; j<cols; j++){
//     document.write(i + " " + j + a[i][j] + " | ");
//   }
//   document.write("<br>");
// }
// var a = prompt("Enter first subject name");
// var b = prompt("Enter second subject name ");
// var c = prompt("Enter third subject name");
// var TotalMarks = prompt("Enter TotalMarks for subject 1");
// var TotalMarks1 = prompt("Enter TotalMarks for subject 2");
// var TotalMarks2 = prompt("Enter TotalMarks for subject 3");
// var obtainedmarks = prompt("Enter Obtained Marks for 1st Subject");
// var obtainedmarks1 = prompt("Enter Obtained Marks for 2nd Subject");
// var obtainedmarks2 = prompt("Enter Obtained Marks for 3rd Subject");
// var per = (obtainedmarks / 100) * TotalMarks;
// console.log(TotalMarks);
// console.log(TotalMarks1);
// console.log(TotalMarks2);

// document.write("Subject "  + "<br>" + "Total marks " + "<br>" + "Obtained Marks"   + "<br>" + "Percentage" + "<br");
// document.write("Subject "  + "<br>" + a   + "<br>" + b   + "<br>" + c + "<br");
// document.write("Total Marks " + TotalMarks + TotalMarks1 + TotalMarks2 + "<br");
// document.write("Obtained Marks " + obtainedmarks + obtainedmarks1 + obtainedmarks2 + "<br");
// document.write("Percentage " + per + "<br");

var a = prompt("Enter first subject name");
var b = prompt("Enter second subject name ");
var c = prompt("Enter third subject name");
var TotalMarks = 100;
var Marks1 = prompt("Enter Obtained Marks for subject 1");
var Marks2 = prompt("Enter Obtained Marks for subject 2");
var Marks3 = prompt("Enter Obtained Marks for subject 3");
// var obtainedmarks = prompt("Enter Obtained Marks for 1st Subject");
// var obtainedmarks1 = prompt("Enter Obtained Marks for 2nd Subject");
// var obtainedmarks2 = prompt("Enter Obtained Marks for 3rd Subject");
// var per = (obtainedmarks / 100) * TotalMarks;
// console.log(TotalMarks);
// console.log(TotalMarks1);
// console.log(TotalMarks2);
function myFunction() {
  document.getElementById("sb1").innerHTML = a;
  document.getElementById("sb2").innerHTML = b;
  document.getElementById("sb3").innerHTML = c;

  document.getElementById("ob1").innerHTML = Marks1;
  document.getElementById("ob2").innerHTML = Marks2;
  document.getElementById("ob3").innerHTML = Marks3;

  document.getElementById("per1").innerHTML = Marks1/TotalMarks*100;
  document.getElementById("per2").innerHTML = Marks2/TotalMarks*100;
  document.getElementById("per3").innerHTML = Marks3/TotalMarks*100;

  var i;
  for (i = 0; i <3; i++) {
    document.getElementsByClassName("tm")[i].innerHTML = TotalMarks;
  }



}



// document.write("Subject "  + "<br>" + "Total marks " + "<br>" + "Obtained Marks"   + "<br>" + "Percentage" + "<br");
// document.write("Subject "  + "<br>" + a   + "<br>" + b   + "<br>" + c + "<br");
// document.write("Total Marks " + "<br>" + TotalMarks + "<br>" + TotalMarks1 + "<br>" + TotalMarks2 + "<br");
// document.write("Obtained Marks " + obtainedmarks + obtainedmarks1 + obtainedmarks2 + "<br");
// document.write("Percentage " + per + "<br");


//chapter 9 -11:
//task 1:
var city= prompt("Enter city name");
if( city == null)
{
  city == "karachi";
}
document.write("Welcome to the city of lights" + "<br>");

//task 2:
var user = prompt('Enter your Gender');
if( user == 'male')
{
  document.write("Good morning sir" + "<br>");
}
if( user == 'female')
{
  document.write("Good morning madam" + "<br>");
}


//task 3:
var color= prompt('Enter SIgnal Color');
document.write("Signal Color" +  "       " + "Message" + "<br>");
if(color == 'red')
{
  document.write(color +  "  " + "Must Stop" + "<br>");
}
if(color == 'yellow')
{
  document.write(color +  "  " + "Ready to move" + "<br>");
}
if(color == 'green')
{
  document.write(color +  "  " + "Move now" + "<br>");
}

//task 4:
var currentfuel = prompt("Enter remaining Fuel in Car(in Litres)")
if (currentfuel < 0.25){
  document.write("Please refill the fuel in your car" + "<br>")
}

//task -5:  // can run
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

//task - 6:  // can not run
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 //task-7:  // condition 2 and 4 is true
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
//task - 8:  // the cost equal
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

//task - 9: // returen true
if (true){
  alert("True");
  }
  if (false){
  alert("False");
  }

  // task 10 : // running
  if("car" < "cat"){
    alert("car is smaller than cat");
    }
    


  // for (var a=1; a <= 100; a = a+10){
  //   for (var b=a ; b <= a+9; b++){
  //     document.write(b)
  //   }
    
  // }