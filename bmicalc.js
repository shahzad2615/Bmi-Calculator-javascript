const forms=document.querySelector("form");
//                           call back function event
forms.addEventListener("submit",function(event){
    // const height=parseInt(document.querySelector("#Height").value)// it will give empty value and after submit will see empty

    // form submit if get method or post method neither one
// for preventing default value of Submit form
event.preventDefault();
//  This value is in String default we have to convert into numbers using parseInt
const Height=parseInt(document.querySelector('#Height').value);
const Weight=parseInt(document.querySelector("#Weight").value);
const result=document.querySelector("#result");

if(Height==="" || Height<0 || isNaN(Height)){
    result.innerHTML=`<h1>Please Give a Valid Height : ${Height}</h1>`;
}

else if(Weight==="" || Weight<0|| isNaN(Weight)){
    result.innerHTML=`<h1>Please give a valid Weight : ${Weight}</h1>`;
}
else{
    const bmi=(Weight/((Height*Height)/10000)).toFixed(2);
    //  show the result
    result.innerHTML=`<h1><span>${bmi}</span> </h1>`;
}
if(Weight<= 18.6){
    result.innerHTML=`<h1> Under Weight </h1>`
}
// else if(Weight==18.6 && 24.9){
//     result.innerHTML=`<h1> Normal Range`;
// }
// else{
//     result.innerHTML=`<h1> Over Weight`;
// }

});