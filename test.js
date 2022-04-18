async function test(){
    return a+b;
}

then 
test().then(result => {
    console.log(result);
}).catch(err => console(err))

var arr= [1,2,3,4];
var arr1 = [...arr];
/* 
curring function 
how to create promise object 
yield
*/



async function callfunction(){
    var x = await test();
}

callfunction();



const var1 = function(){
    return x+y;
}
var1.promise();