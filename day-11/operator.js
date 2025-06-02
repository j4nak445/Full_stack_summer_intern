/*let a=10;
let b=20;
// addition
console.log(a+b)
//subtraction
console.log(a-b)
//Multiplication
console.log(a*b)
// divison
console.log(a/b)
// modulus 
console.log(a%b)
// after increment decreamnet
++a;
b--;
// final values of a and b
console.log(a,b)

a=10;
b='10';
console.log(a!=b)

a=100;
b=10;
console.log(a>b)
a=100;
b=20;
console.log(a<=b)


let age=18;
if(age<10){
    console.log("true")
}
else{
    console.log("false")
}


let a =19;
let b = (a>20)?"ypu are eligible for license " : "not eligible";
console.log(b)

*/

let per = 300;

if(per>=0 && per<=100){

    if(per>80 && per<=100){
        console.log("grade A")
    }

    else if(per >60 && per<=80){
        console.log("grade B")
    }

    else if(per>45 && per<=60){
        console.log("grade c")
    }
    else if(per>33 && per<=45){
        console.log("grade d")
    }
    else{
        console.log("fail")
    }
}

else{
    console.log("invalid")
}