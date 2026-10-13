//1. var — 10 Questions//
//Create a var variable called name and initialize it with your name. Print it.//
var name ="sachin";
console.log(name);
//op: sachin//

//Create a var variable called age with value 25. Reassign it to 30 and print it.//
var age = 25;
age = 30;
console.log(age);
//0p:30//

//Create a var variable called city, assign "Chennai", then reassign "Bangalore". Print the final value.//
var city ="chennai";
city = "bangalore";
console.log(city);
//0p:bangalore//

//Create a var variable called salary and initialize it with 25000. Redeclare it with 35000. Print the value.//
var salary=25000;
salary=35000;
console.log(salary);
//output:35000//

//Create a var variable, assign a value, reassign it, and redeclare it. Print the final value.//
var mobile ="motorola";
mobile ="iphone";
var mobile =" google pixel";
console.log(mobile);
//op:google pixel//

//Create a var variable called department with "ECE" and redeclare it with "CSE".//
var department = "ECE";
var department = "CSE";
console.log(department);
//op:CSE//

//Create a var variable called mark with 50, reassign it to 75, and print it.//
var mark =50;
mark=75;
console.log(mark);
//op:75//

//Create a var variable called company and redeclare it with another company name.//
var company = "AMAZON";
var company ="STACKLY";
console.log(company);
//op:STACKLY//

//Create a var variable without assigning a value, then initialize it later and print it.//
var player;
player = "Hp";
console.log(player);
//op:Hp//

//Create one var variable and change its value three times. Print the final value.//
var dog="German Shepherd";
dog="dobberman";
dog="chippi paarai";
console.log(dog);
//op:chippi paarai//

//2 .let — 10 Questions//

//Create a let variable called age and initialize it with your age. Print it.//
let age2 = 22;
console.log(age2);
//op: 22//

//Create a let variable called salary, initialize it with 30000, then reassign it to 40000.//
let salary1 =30000;
salary1=40000;
console.log(salary1);
//op:40000;

//Create a let variable called name, assign your name, then change it to another name.//
let name1="sachin";
name1="ajith";
console.log(name1);
//op:ajith//

//Create a let variable called department and change its value from "ECE" to "CSE".//
let department1 = "ECE";
department1="CSE";
console.log(department1);
//op:CSE//

//Create a let variable called mark, initialize it with 60, then reassign it to 90.//
let mark1=60;
mark1=90;
console.log(mark1);
//op:90//

//Declare a let variable without initialization. Later assign a value and print it.//
let brand;
brand="TATA"
console.log(brand);
//op:TATA//

//Try to redeclare the same let variable. Observe what happens.//
//let brand ="SUZUKI"//
//console.log(brand);//
//op:'brand' has already been declared//

//Create a let variable called city and reassign it two times. Print the final value.//
let a= 10;
a=20;
a=30;
console.log(a);
//op:30//

//Create three different let variables and print all three.//
let b=20;
let c=30;
let d =40;
console.log(b,c,d);
//op:20,30,40//

//Create a let variable, initialize it, reassign it, and try to redeclare it.//
//let car= "polo";
//car= "benz";
//let car="jaquar";
//console.log(car);
//Output:Identifier 'mark' has already been declared

// const — 8 Questions//
//Create a const variable called age with value 25 and print it.//
const age3=25;
console.log(age3);
//op:25//

//Create a const variable called salary with value 50000 and print it.
const salary3=50000;
console.log(salary3);
//op:50000

//Create a const variable called company with "Stackly" and print it.
const company3= "stackly"
console.log(company3);
//op:stackly

//Try to reassign a const variable with another value. Observe the result.
//const f=100;
//f=200;
//console.log(f);
//op:Assignment to constant variable

//Try to redeclare a const variable. Observe the result.
//const age3 =10;
//console.log(age3);
//op: Identifier 'age3' has already been declared

//Create a const variable called college and initialize it with your college name.
const college= "vsb";
console.log(college);
//op:vsb

//Create three const variables for name, age, and department. Print them.
const name7 = "sachin";
const age7= 22;
const department7="CSE";
console.log(name7,age7,department7);    
//op:sachin 22 CSE

//Write a program using one var, one let, and one const variable. Print all three.
var actor="ajith";
let actress ="samantha";
const movies2="mankatha"
console.log(actor,actress,movies2);
// op:ajith samantha mankatha

//4. Printing Statements — 7 Questions
//Print your name using console.log().
console.log("sachin");
//op: sachin

//Create a variable containing your age and print it using console.log().
let age17=22;
console.log(age17);

//Print the number 100 using console.log().
let num =100;
console.log(num);
//op:100

//create three variables and print their values using console.log().
let x =33;
let y=17;
let z=7;
console.log(x,y,z);
//op:33 17 7

//Create a variable called message with "Hello JavaScript" and print it.
var message= "Hello Javascript";
console.log(message);
//op:Hello Javascript

//Create a variable, print its value, change its value, and print it again.
let s=5;
console.log(s);
s=7;
console.log(s);
//op:5 7

//Print your name, age, and qualification using three separate console.log() statements.
console.log("sachin");
console.log(22);
console.log("BE-CSE");
//op:sachin 22 BE-CSE

//5. alert() — 5 Questions
//Display "Welcome to JavaScript" using alert().
alert("Welcome to JavaScript");

//Create a variable called userName and display it using alert().
let username="abd";
alert("username"); 

//Create a variable called userAge and display it using alert().
let userage=22;
alert("userage");

//Create a variable containing "Welcome Naveen" and show it in a popup.
let nme= "Welcome Naveen";
alert("nme");

//Create a variable containing your qualification and display it using alert().
let qualificationn = "BE-CSE";
alert("qualificationn");

//6. prompt() — 5 Questions
//Ask the user "What is your name?" using prompt() and print the answer in the console.
let name15= prompt("What is your name?");
console.log(name15);

//Ask the user "How old are you?" using prompt() and display the answer using alert().
let agee=prompt("How old are you?");
alert("agee");

//Ask the user for their qualification and print the answer in the console.
let qualification=prompt("what is your qualification");
console.log("qualification");

//Ask the user for their name and show the entered name in a popup.
let userName = prompt("What is your name?");
alert(userName);

//Ask the user for their age and print the entered age in the console.
let userAge = prompt("How old are you?");
console.log(userAge);

//7. confirm() & document.writeln() — 3 Questions
//Create a confirmation box asking "Do you know programming?".
confirm("Do you know programming?");

//Create a variable containing "Welcome to Batch 41" and display it using document.writeln().
let information = "Welcome to Batch 41";
document.writeln(information);

//Output:Welcome to Batch 41

//Ask the user "Do you want to continue?" using confirm().
confirm("Do you want to continue?");
//Output:Do you want to continue?
//[OK] [Cancel]

//8. Console Methods — 2 Questions
//Write one program that uses console.log(), console.warn(), and console.error() to display three different messages.
console.log("this is one information");
console.warn("dont copy the code");
console.error("time is getting over") ;

//Write a program using console.log(), console.warn(), console.error(), and console.clear(). Observe what happens after each statement.
console.log("nothing");
console.warn("smile");
console.error("over"); 
console.clear();
//op:The previous console messages are cleared and the console is empty