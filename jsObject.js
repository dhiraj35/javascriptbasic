/* object is similar to associative array */
let objData = {
    fname:'Vishal',
    lname:'Yadav',
    age:'28',
    city:["mumbai","Noida"],
    qualification:{
        ssc:"78",
        hsc:"47"
    },
    fullname:function(){
        return this.fname +' '+this.lname;
    }

}
document.write(objData.city[0]);//get city name 
document.write(objData.fullname());//get full name 


var checkdata = 
[{
    fname:'Vishal',
    lname:'Yadav',
    age:'28',
    city:["mumbai","Noida"],
    qualification:{
        ssc:"78",
        hsc:"47"
    },
    fullname:function(){
        return this.fname +' '+this.lname;
    }

},
{
    fname:'Dhiraj',
    lname:'Yadav',
    age:'28',
    city:["mumbai","Noida"],
    qualification:{
        ssc:"78",
        hsc:"47"
    },
    fullname:function(){
        return this.fname +' '+this.lname;
    }

}
]
checkdata.forEach(testfunction);
function testfunction(value){
    document.write(value.fname);
}