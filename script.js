var age=20;
var age=34567890123456788900n;
//means it will be considered as a bigint number and shows the exact value
let userName="Harry";
let FirstName="Erica"
let LastName="Carangui"
let pets = true;
//true or false is a boolean Value
let house= null;
//null means intentially left empty
let a=100;
let b=25;
b= b/5;

let c=100;
let d=25;
let e=true;
let f=false;

if (userName=="Harry"){
    house="Gryffindor";
    console.log(house);
}
let home;
let number=86;

if (number>90){
    home="Grade A"
    console.log(home);
}
else if(number>80){
    home="Grade B"
    console.log(home);

} 
else if (number>70){
    home="Grade 70"
    console.log(home);
}
else{
    home="fail"
    console.log(home);
}
//else if goes in that order if the first one is right then thats the one that will show
//EX: 86 is greater than 80and 70 but since 80 is in line 31 and 70 in line 36 the words that show will be grade B
//so the output of the first correct statment  going in that order



//order logged is ordered shown 
console.log(age);
console.log(userName);
console.log(FirstName + " " + LastName);
const valuePi = 3.14;
console.log(valuePi);
console.log(pets);
console.log(house);
console.log (b);
console.log(c === d);
// Is a Comparison Operator that Means Equal to & type
console.log(e&&f);
// meaning variable e and f arent both the same, && means And
console.log(home);