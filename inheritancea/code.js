//Exercice 1
//Using String Object to make filter
String.prototype.filter = function(arr){
    let str;
    for(let i=0; i<arr.length; i++){
        str= this.replace(arr[i], "");
    }
    return str;
};

console.log("This house is not nice!".filter(['not']));
/************************************************************************************************************ */

//Exercice 2
//Using Array Object to make bubbleSort
Array.prototype.bubbleSort = function(){
    let arr= this;
    let len= arr.length;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(arr[j]>arr[j+ 1]){
                let temp=arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1]= temp;
            }
        }
    }
    return arr;
}

let arr = [6, 4, 0, 3, -2, 1];


console.log(arr.bubbleSort());
/************************************************************************************************************ */

//Exercice 3

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}