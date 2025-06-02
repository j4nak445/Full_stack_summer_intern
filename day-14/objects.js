let one= Symbol("key1")
let user={
    "username": "janakkk",
    password: 12345,
    one :"key2",
    email: "xyz@fake.com",
    age: 25,
    isActive: true,
    isMarried: false,
}
console.log(user);
console.log(user.isMarried);
console.log(user["username"]);

user["username"] = "janak bhati";
user["isMarried"]= true;
console.log(user);


