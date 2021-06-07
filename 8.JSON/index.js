
const bioData={
    name : "shubham",
    age : 21,
    channel : "art plus point",
}
console.log(bioData);
//object convert into json data
const jd = JSON.stringify(bioData);
console.log(jd);
//json data convert into object 
const dat =JSON.parse(jd);
console.log(dat);