// let x : number = 1;
// console.log(x);

// function greet(firstName : string){
//     console.log("Hello" + firstName);
// }

// greet("Aditya");

// function sum(a:number,b:number){
//     console.log(a+b);
// }

// sum(4,50);

// function sum1(a:number,b:number){
//     return a + b;
// }

// let ans = sum1(4,6);
// console.log(ans);

// function isLegal(a:number){
//     if(a >= 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(isLegal(56));

// function startTimer(fn:()=>void){
//     setTimeout(fn,2000);
// }
// startTimer(function(){
//     console.log("Timer Started After 2 sec");
// })

// //what if the input type or in general type is non primitive -->like obj..how to give it type to it in typescript

// function welcomeOnBoard(user :{
//     name : string,
//     age : number
// }){
//     console.log("Hello"+  user.name + "you are" + user.age + "years old !");
// }

// welcomeOnBoard({
//     name : "Aditya Priyadarshi",
//     age : 21
// })

// //but on larger codebases the code will become ugly..so for those cases we will use interfaces
// interface userType {
//     name: string,
//     age : number,
//     lastName: string
// }

// function welcome(user : userType){
//     console.log("Welcome On Board" + " " + user.name);
//     console.log("You are" + " " + user.age + " " + "years old");
//     console.log("Pleasure having You Mr " + " " + user.lastName);
// }

// welcome({
//     name : "Aditya",
//     age : 25,
//     lastName :"Priyadarshi"
// });

// //types and interfaces are two sort of similar things ..but types lets us do  unions and intersection

// interface employee {
//     name : string,
//     age : number
// }

// interface specialization {
//     name : string,
//     department : string,
//     spec : string
// }

// type employeeDetails = employee & specialization;

// let user1 : employeeDetails = {
//     name : "Aditya",
//     age  : 21,
//     department : "CSE",
//     spec : "Problem Solving"
// }

// console.log(user1);

// //SOME USE CASES OF INTERFACES
// interface details {
//     name : string,
//     age : number,
//     profession : string,
//     address ? :{
//         village : string,
//         state : string,
//         pincode : number
//     }
// }

// let user1Details : details = {
//     name : "Aditya",
//     age : 25,
//     profession : "Software Debeloper",
//     address : {
//         village : "Raxaul",
//         state : "Bihar",
//         pincode : 845305
//     }
// }

// console.log(user1Details);

// //there is one thing which interfaces are used..like in from userdetails we want to make address portion optional so we can do put ? after address 
// //address ? :{
//     //     village : string,
//     //     state : string,
//     //     pincode : number
//     // }

// //now we can use or log user2Details without AddressField

// let user2Details : details = {
//     name : "Sumit G",
//     age : 54,
//     profession : "Senior SoftWare Developer"
// }

// console.log(user2Details);

// //but we can not partially use address means either we have to define full address or donot define the address at all
// // means we cant do this
// // let user2Details : details = {
// //     name : "Sumit G",
// //     age : 54,
// //     profession : "Senior SoftWare Developer",
// //     address : {
// //         pincode : 845305,
// //     }
// // }
// //if we have to use it in that way also then we have to put ? to that particular fields

// //now there is a other concept that is interfaces can use other interfaces also..--> this will help us in reduce redundency..
// //like for address we can use a interface defined earlier ..so if in future we have to change something in address interface then we donot have to go and change at every place the adress is used..we will only change to addressinterface

// interface address {
//      village : string,
//         state : string,
//         pincode : number
// }
// interface details2 {
//     name : string,
//     age : number,
//     profession : string,
//     address ? : address
// }

// let user1Details1 : details = {
//     name : "Aditya",
//     age : 25,
//     profession : "Software Debeloper",
//     address : {
//         village : "Raxaul",
//         state : "Bihar",
//         pincode : 845305
//     }
// }

// console.log(user1Details1);

// let user2Details2 : details = {
//     name : "Sumit G",
//     age : 54,
//     profession : "Senior SoftWare Developer"
// }

// console.log(user2Details2);

// //another usecase is class can also implements interfaces

// interface studentDetails {
//     name : string;
//     age : number;
//     standard : number;
//     section : string;
// }

// class SchoolLog implements studentDetails {
//     name : string;
//     age : number;
//     standard : number;
//     section : string;
//     constructor( name : string,age : number,standard : number,section : string){
//         this .name = name;
//         this.age = age;
//         this.standard = standard;
//         this.section = section
//     }
// }

// let student1 = new SchoolLog("Aditya",21,10,"A");
// console.log(student1.standard);

//create 2 types user and admin..
//create a function which take either user or admin as an input and returns a string saying welcome [name];

// interface userData {
//     name : string,
//     age : number,
//     totalCoursesPurchased : number
// }

// interface adminData {
//     name : string,
//     age : number,
//     rating : number
// }

// type userAdminDash = userData | adminData;

// function gret(data : userAdminDash) : string {
//     return `Welcome ${data.name}`;
// }

// let User : userData = {
//     name : "Rahul",
//     age : 25,
//     totalCoursesPurchased : 6
// }

// let admin : adminData = {
//     name : "Shubham",
//     age : 28,
//     rating : 4
// }

// console.log(gret(User));
// console.log(gret(admin));

//how to give array as types in typescript

// function getmax(nums : number[]) : number{
//     if (nums.length === 0) {
//         throw new Error("Array is empty");
//     }
//     let maxVal = nums[0];
//     for(let i = 1;i<nums.length;i++){
//         if(nums[i] > maxVal){
//             maxVal = nums[i];
//         }
//     }
//     return maxVal;
// }

// getmax([1,5,8,7,6,12,4]);
