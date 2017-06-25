string
number
boolen
null
undefined

var = "relay"
var a =10.0
var a = true

array

var toy =["fbfgb","ffgrg","frfg"]
var toy = [2,2,7,9]

var a = [1,"dfg",4,5,"sf",true]

var a = 10
undefined
typeof(a)
"number"
var b = "relay"
undefined
typeof(b)
"string"

var a = "react"
undefined
var b=" relay"
undefined
a+b
"react relay"
var a = 10
undefined
var b = 20
undefined
a+b
30


var a = "10"
undefined
typeof(a)
"string"


10+10+"10"
"2010"
"10"+10+10
"101010"
10+"10"+10
"101010"

1 == "1"
true
1 === "1"
false
7*7
49



var a = [1,2,3,4,5,6,7,8,9]
undefined
a[0]
1
a.length
9


var a = [1,2,3,[4,5,6,[7,8,9],10],11]
undefined
a
(5) [1, 2, 3, Array(5), 11]
a[3][0]
4
a[3][3][0]
7


function isEven(a){
	if(a%2==0){
		console.log("number is even")
	} else{
		console.log("number is odd")
	}
}

function isEven(a){
	if(a=="realy"){
		console.log("number is even")
	} else{
		console.log("number is odd")
	}
}

isEven(15)
VM377:5 number is odd
undefined
isEven(10)
VM377:3 number is even

var animal={
	color:"red",
	age:20
}
Object {color: "red", age: 20}
animal.color
"red"
animal.age
20
animal["color"]
"red"
animal.legs =4
4
animal
Object {color: "red", age: 20, legs: 4}
delete animal.age
true
animal
Object {color: "red", legs: 4}




var toy = new Object();
toy.color ="red"

function add(a,b){
	return a+b;
}
add(2,3);


var add = function(a,b){
	return a+b;
}

add(1,2)

var bob = new Object();
bob.age =10;
bob.setage = function(newAge){
	bob.age = newAge
}

bob.setage(17)

bob
Object {age: 10, setage: function}
bob.age
10
bob.setage(17)
undefined
bob.age;


var setage = function(newAge){
	this.age = newAge
}

var tony = new Object();
tony.age = 10;
tony.setage =setage

tony.setage(14)

var react = new Object();
react.age = 12;
react.setage = setage


var square = new Object();
square.sidelength = 6;

square.calcArea =function(){
	return this.sidelength *this.sidelength;
}


var p = square.calcArea;



function area(h,w){
	this.h = h;
	this.w = w;
	this.calcArea =function(){
		return this.h* this.w
	}
}


var rec = new area(4,5)

var area1 = rec.calcArea();






function animal(name,color){
	this.name =name;
	this.color=color;
}

var dog = new animal("tony","black")

var toy = function(name,color){
	this.name =name;
	this.color=color;
}


//prototype

function toy(type,color){
	this.type=type;
	this.color=color;
}

toy.prototype.move=function(){
	console.log("i can do");
}
var car = new toy("auto","blue");
car.type;
car.color;
car.move;
var teddy = new toy("fluffy","brown");























