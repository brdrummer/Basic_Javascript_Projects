function mathaddition () {
    var addition = 5+5;
    document.getElementById("Math").innerHTML = "5+5 = " + addition;
} 

function mathsubtraction () {
    var subtraction = 5-5;
    document.getElementById("Mathsubtraction").innerHTML = "5-5 = " + subtraction;
} 

function mathmultiplication () {
    var multiplication = 5*5;
    document.getElementById("Mathmultiplication").innerHTML = "5*5 = " + multiplication;
} 

function mathdivision () {
    var division = 5/5;
    document.getElementById("Mathdivision").innerHTML = "5/5 = " + division;
} 

function moremath() {
    var simplemath = (5+5) * 10 / 2-5;
    document.getElementById("MoreMath").innerHTML = "5 plus 5, multiplied by 10, divided in half and then subtracted by 5 equals " + simplemath;
}

function modulus_Operator(){
    var modulus = 25 % 6;
    document.getElementById("modulus").innerHTML = "When you divide 25 by 6 you get a remainder of " + modulus;

}

function negation_Operator(){
    var x= 10;
    document.getElementById("negation").innerHTML = -x;

}

var X=5;
X++;
document.write(X);

var Z=5.25;
Z--;
document.write(Z);

window.alert(Math.random());

window.alert(Math.random() * 100);