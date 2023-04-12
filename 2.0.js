player1=localStorage.getItem("player1:");
player2=localStorage.getItem("player2:");

document.getElementById("q1").innerHTML="question turn - "+player1;
document.getElementById("q2").innerHTML="answer turn -"+player2;


var score_1=0;
var score_2=0;
function back(){
    window.location="index.html";
}
function sendq(){
l_1=document.getElementById("question1").value;
l_2=document.getElementById("question2").value;
 var question=l_1+"x"+l_2;
 localStorage.setItem("question" , question);
 

 localStorage.setItem("num1" , l_1);
 localStorage.setItem("num2" , l_2);

 input="<input id='myInput' type='text' placeholder='enter your answer here'></input><br><br><br>";
 button="<button id='check' class='btn btn-info'>check</button><br><br><br><br>";
 label="<label id=myLabel>Q."+question+"</label><br><br>";
 row=label+input+button;
 document.getElementById("row").innerHTML=row;
 document.getElementById("q").style.height=175;
 document.getElementById("question1").innerHTML="";
 document.getElementById("question2").innerHTML="";
}
