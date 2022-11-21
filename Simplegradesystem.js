var mark=prompt("enter your marks to see your grade");
if (mark >= 90 && mark<=100)
{
alert("Congratulations ! you got A grade. Let's keep it up for next");
}
else if (mark >=80 && mark <90){
alert("well..done, you got B grade");
}
else if (mark >=50 && mark < 80){
alert("not bad, you got c grade");
}
else if (mark >=35 && mark <50 ){
alert ("well, you got D grade need to put some effort");
}
else if (mark >=0 && mark<=35) {
alert("Better luck next time.");
}
else {
alert("check your marks once and try again");
}