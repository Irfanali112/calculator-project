function calc(){

    let number1 = parseInt(document.getElementById("number1").value);

    let number2 = parseInt(document.getElementById("number2").value);

    let oper =  document.getElementById("operators").value;

   
if (oper==="+")
{
    document.getElementById ("result").value=number1+number2;
}
   
if (oper==="-")
{
    document.getElementById ("result").value=number1-number2;
}

if (oper==="/")
{
    document.getElementById ("result").value=number1/number2;
}

if (oper==="x")
{
    document.getElementById ("result").value=number1*number2;
}




}
