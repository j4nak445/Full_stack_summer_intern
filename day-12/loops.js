for(let i=1; i<=10;i++){
    console.log(2*i);
}
// -------------------
let j = 1;
while (j <= 10) {
    console.log(`2 x ${j} = ${2 * j}`);
    j++;
}
// -----------------
let k = 1;
do {
    console.log(2*k);
    k++;
} while (k <= 10);
// --------------------
let n = 5;
for (let i = 1; i <= n; i++) {
    let star = "*";
    let space = " ";
    console.log(space.repeat(n - i) + star.repeat(i * 2 - 1));
}
// ----------------------
let i1 = 1;
while (i1 <= n) {
    let star = "*";
    let space = " ";
    console.log(space.repeat(n - i1) + star.repeat(i1 * 2 - 1));
    i1++;
}
// -------------------------
let i2 = 1;
do {
    let star = "*";
    let space = " ";
    console.log(space.repeat(n - i2) + star.repeat(i2 * 2 - 1));
    i2++;
} while (i2 <= n);
// -------------------------
let a = 5;
for (let i = 1; i <= a; i++) {
    let star = "*";
    let space = " ";
    console.log(space.repeat(a - i) + star.repeat(i));
}
// -------------------------
let j1 = 1;
while (j1 <= a) {
    let star = "*";
    let space = " ";
    console.log(space.repeat(a - j1) + star.repeat(j1));
    j1++;
}
// -------------------------
let j2 = 1;
do {
    let star = "*";
    let space = " ";
    console.log(space.repeat(a - j2) + star.repeat(j2));
    j2++;
} while (j2 <= a);
// -------------------------
let b = 5;
for (let i = 1; i <= b; i++) {
    let star = "*";
    console.log(star.repeat(i));
}