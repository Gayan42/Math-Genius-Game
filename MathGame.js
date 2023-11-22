var number1 = 0;
var number2 = 0;
var signnumber = 0;
var answerPlace =  0;
var answer = 0;
var wrongID = 0;

document.getElementById("playbtn").onclick = btnClick;

document.getElementById("firstAnswer").onclick = firstAnsbtnClick;
document.getElementById("secondAnswer").onclick = secondAnsbtnClick;
document.getElementById("thridAnswer").onclick = thirdAnsbtnClick;
document.getElementById("fourthAnswer").onclick = forthAnsbtnClick;

function btnClick(){
    if (document.getElementById("playbtn").value === "Play"){
    document.getElementById("answerHead").style.visibility =  "visible";
    document.getElementById("playbtn").value = "Stop";
    document.getElementById("firstAnswer").disabled = false;
        document.getElementById("secondAnswer").disabled = false;
        document.getElementById("thridAnswer").disabled = false;
        document.getElementById("fourthAnswer").disabled = false;
    playing();
    } else{
        document.getElementById("answerHead").style.visibility =  "hidden";
        document.getElementById("playbtn").value = "Play"; 
        document.getElementById("firstAnswer").disabled = true;
        document.getElementById("secondAnswer").disabled = true;
        document.getElementById("thridAnswer").disabled = true;
        document.getElementById("fourthAnswer").disabled = true;
        intialize();
    }
}

function playing(){
    number1 = (Math.floor(Math.random()*10)+1);
    number2 = (Math.floor(Math.random()*10)+1);
    signnumber = (Math.floor(Math.random()*4)+1);

if (signnumber===1){
    document.getElementById("signId").innerHTML = "+";
     answer = number1 + number2;
} else if (signnumber===2){
    document.getElementById("signId").innerHTML = "-";
    answer = number1 - number2;
} else if (signnumber===3){
    document.getElementById("signId").innerHTML = "/";
    answer = number1 / number2;
} else if (signnumber===4){
    document.getElementById("signId").innerHTML = "*";
    answer = number1 * number2;
} else {

}

document.getElementById("firstNumber").innerHTML = number1;
document.getElementById("secondNumber").innerHTML = number2;

  answerPlace = (Math.floor(Math.random()*4)+1);
if (answerPlace===1){
    document.getElementById("firstAnswer").value = answer;
    //document.querySelectorAll("input")[0].setAttribute("value",answer);
    generateWrongAnswers(1);
} else if(answerPlace===2){
    document.getElementById("secondAnswer").value = answer;
    //document.querySelectorAll("input")[1].setAttribute("value",answer);
    generateWrongAnswers(2);
}  else if(answerPlace===3){
    document.getElementById("thridAnswer").value = answer;
   // document.querySelectorAll("input")[2].setAttribute("value",answer);
    generateWrongAnswers(3);
} else if(answerPlace===4){
    document.getElementById("fourthAnswer").value = answer;
   // document.querySelectorAll("input")[3].setAttribute("value",answer);
   generateWrongAnswers(4);
} else {

}
}

function generateWrongAnswers(answerPlace){
    for (var i = 1; i < 5; i++){
        var randomNumber = (Math.floor(Math.random()*3)+1);
        if (answerPlace !== (i)) {
            document.querySelectorAll("input")[i].setAttribute("value",(answer+randomNumber));
        }  
      
    }
}


function firstAnsbtnClick(){
    if (answerPlace===1){
        playing();
    }else{

    }
}
function secondAnsbtnClick(){
    if (answerPlace===2){
        playing();
    }else{
        
    }
}
function thirdAnsbtnClick(){
    if (answerPlace===3){
        playing();
    }else{
        
    }
}
function forthAnsbtnClick(){
    if (answerPlace===4){
        playing();
    }else{
        
    }
}

function intialize(){
    document.getElementById("firstNumber").innerHTML = "?";
    document.getElementById("secondNumber").innerHTML = "?";
    
    document.getElementById("signId").innerHTML = "?";
    document.getElementById("signId").value = "?";
    document.getElementById("firstAnswer").value = "?";
    document.getElementById("secondAnswer").value = "?";
    document.getElementById("thridAnswer").value = "?";
    document.getElementById("fourthAnswer").value = "?";
}

