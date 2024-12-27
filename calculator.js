const Input = document.getElementById("input");
let firstNum = "", secondNum = "", operator = "";

const EnterNum = (num) => {
    //assign all the values to {firstNum}(use concatination)
    //  firstNum = firstNum ? num : firstNum+num;
    if (!operator) {
        firstNum = firstNum + num;
        Input.value += num;
    }
    else {
        secondNum = secondNum + num;
        Input.value += num;
    }
}
const EnterOperator = (operatorInput) => {
    if (firstNum) {
        operator = operatorInput;
        Input.value += operatorInput;

    }
    else {
        alert("Enter First Number");
    }
}
//write calculate function
const calculate = () => {
    let num1=Number(firstNum), num2=Number(secondNum);
    Input.value+="=";
    if (operator === "+") {
        // console.log(Number(firstNum) + Number(secondNum));
        Input.value+= num1+num2;
    }
    else if (operator === "-") {
        Input.value+=num1-num2;
        // console.log(firstNum - secondNum);
    }
    else if (operator === "*") {
        Input.value+=num1*num2;
        // console.log(firstNum * secondNum);
    }
    else if(operator==="%"){
        Input.value+=num1%num2;
    }
    else if(operator==="^2"){
        Input.value+=num1*num1;
    }
    else if(operator==="^3"){
        Input.value+=num1*num1*num1;
    }
    else if(operator==="`2"){
        Input.value+=Math.sqrt(num1);
    
    }else if(operator==="`3"){
        Input.value+=Math.cbrt(num1);
    }
    else {
        Input.value+=num1/num2;
        // console.log(Number(firstNum) / Number(secondNum));
    }
   
}
const BackSpace=()=>{
    Input.value = Input.value.slice(0, -1);

}
const Clear=()=>{
    firstNum = "";
     secondNum = ""; 
    operator = "";
    Input.value="";
}
