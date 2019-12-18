document.write(typeof "Word");
document.write(typeof 3);

document.write(2E310);
document.write(-2E310);

//Infinity
document.write(10 > 2);
document.write(10 < 2);

console.log(2+2);

//Type coercion 
document.ownerDocument("10" + 5);

document.write (10==10);
document.write (3 == 11);

x=10;
y=10;
document.write(x===y);

a=82;
b="82";
document.write(a===b);

//and
document.write(5 > 2 && 10 > 4);

//or
document.write(5 > 10 || 10 > 20);

//not

function not_Function () {
    document.getElementById("not").innerHTML = !(5>10);
}