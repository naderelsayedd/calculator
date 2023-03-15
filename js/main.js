var firstNumber = document.getElementById("firstNumber")
var secondNumber = document.getElementById("secondNumber")
var plus = document.getElementById("plus")
var minus = document.getElementById("minus")
var xmark = document.getElementById("xmark")
var divide = document.getElementById("divide")
var percent = document.getElementById("percent")

function Adding(){
    if(firstNumber =="")
    {
        console.log("First Is Required")
    }else if(secondNumber =="")
    {
        console.log("second is Required")
    }else
    {
        result = Number(firstNumber.value) + Number(secondNumber.value)
        document.getElementById("result").innerHTML = result;
    }
}plus.addEventListener("click" , Adding)

function Subtraction(){
    if(firstNumber =="")
    {
        console.log("First Is Required")
    }else if(secondNumber =="")
    {
        console.log("second is Required")
    }else
    {
        result = Number(firstNumber.value) - Number(secondNumber.value)
        document.getElementById("result").innerHTML = result
    }
}minus.addEventListener("click" , Subtraction)

function Multiplication(){
    if(firstNumber =="")
    {
        console.log("First Is Required")
    }else if(secondNumber =="")
    {
        console.log("second is Required")
    }else
    {
        result = Number(firstNumber.value) * Number(secondNumber.value)
        document.getElementById("result").innerHTML = result
    }
}xmark.addEventListener("click" , Multiplication)

function Division(){
    if(firstNumber =="")
    {
        console.log("First Is Required")
    }else if(secondNumber =="")
    {
        console.log("second is Required")
    }else
    {
        result = Number(firstNumber.value) / Number(secondNumber.value)
        document.getElementById("result").innerHTML = result
    }
}divide.addEventListener("click" , Division)

