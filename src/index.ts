let x : number = 1;
console.log(x);

function greet(firstName : string){
    console.log("Hello" + firstName);
}

greet("Aditya");

function sum(a:number,b:number){
    console.log(a+b);
}

sum(4,50);

function sum1(a:number,b:number){
    return a + b;
}

let ans = sum1(4,6);
console.log(ans);

function isLegal(a:number){
    if(a >= 18){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLegal(56));

function startTimer(fn:()=>void){
    setTimeout(fn,2000);
}
startTimer(function(){
    console.log("Timer Started After 2 sec");
})

//what if the input type or in general type is non primitive -->like obj..how to give it type to it in typescript

function welcomeOnBoard(user :{
    name : string,
    age : number
}){
    console.log("Hello"+  user.name + "you are" + user.age + "years old !");
}

welcomeOnBoard({
    name : "Aditya Priyadarshi",
    age : 21
})

//but on larger codebases the code will become ugly..so for those cases we will use interfaces
interface userType {
    name: string,
    age : number,
    lastName: string
}

function welcome(user : userType){
    console.log("Welcome On Board" + " " + user.name);
    console.log("You are" + " " + user.age + " " + "years old");
    console.log("Pleasure having You Mr " + " " + user.lastName);
}

welcome({
    name : "Aditya",
    age : 25,
    lastName :"Priyadarshi"
});

//types and interfaces are two sort of similar things ..but types lets us do  unions and intersection

interface employee {
    name : string,
    age : number
}

interface specialization {
    name : string,
    department : string,
    spec : string
}

type employeeDetails = employee & specialization;

let user1 : employeeDetails = {
    name : "Aditya",
    age  : 21,
    department : "CSE",
    spec : "Problem Solving"
}

console.log(user1);