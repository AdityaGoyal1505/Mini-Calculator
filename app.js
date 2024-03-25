let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let add=document.querySelector("#add");
let minus=document.querySelector("#minus");
let multiply=document.querySelector("#multipy");
let division=document.querySelector("#division");
let displayresult=document.querySelector("#result");

//display
add.addEventListener("click",function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayresult.innerHTML=addTwoNumbers(num_1,num_2);
})

minus.addEventListener("click",function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayresult.innerHTML=minusTwoNumbers(num_1,num_2);
})

multiply.addEventListener("click",function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayresult.innerHTML=multiplyTwoNumbers(num_1,num_2);
})

division.addEventListener("click",function(){
    let num_1=parseInt(num1.value);
    let num_2=parseInt(num2.value);
    displayresult.innerHTML=divideTwoNumbers(num_1,num_2);
})
//operations
function addTwoNumbers(num_1,num_2) {
    let sum=num_1+num_2;
    return sum;
}

function minusTwoNumbers(num_1,num_2){
    let min=num_1-num_2;
    return min;
}

function multiplyTwoNumbers(a,b){
    let mul=a*b;
    return mul;
}

function divideTwoNumbers(a,b){
    let quot=a/b;
    return quot;
}
