var expression = '';
var result = '';
var num = document.getElementsByClassName('num');
console.log(num);
var result_field = document.getElementsByClassName('result')[0];

for(var i=0;i<num.length;i++){
    num[i].addEventListener('click',(event) => {
        expression = expression.concat(event.target.id);
        result_field.innerText = expression;
    });
}
var operator = document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',(event) => {
        expression = expression.concat(event.target.innerText);
        result_field.innerText = expression;
    });
}

var calcButton = document.getElementById('calc');

const calc = () => {
    var num1 = '';
    var num2 = '';
    var op = '';
    for(var i=0;i<expression.length;i++)
    {
        if(isNaN(expression[i])){
            op = expression[i];
        } else {
            if(op==''){
                num1 = num1.concat(expression[i]);
            } else{
                num2 = num2.concat(expression[i]);
            }
        }
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    console.log(num1+' '+num2);
    if(op==='/'){
        result = (num1/num2).toString();
    } else if(op==='+'){
        result = (num1+num2).toString();
    } else if(op==='-'){
        result = (num1-num2).toString();
    } else if(op==='*'){
        result = (num1*num2).toString();
    } else if(op==='%'){
        result = (num1%num2).toString();
    }
    result_field.innerText = result;
    expression=result;
}

var clear = document.getElementById('clear');
clear.addEventListener('click',() => {
    expression = '';
    result_field.innerText='';
})
calcButton.addEventListener('click',()=>{
    calc();
});