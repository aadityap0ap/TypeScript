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