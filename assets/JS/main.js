// first
"use strict";

//  let number = [1, 4, 7, 9, 123, 18, 165, 246, 178];
 
// function maxNumbers(array, callback) {
//     return callback(array); 
// }

// console.log(maxNumbers(number, function (array) {
//     let max = array[0]; 
//     for (let item of array) {
//         if (item > max) {
//             max = item;
//         }
//     }
//     return max;
// }));



// second

// let numbers = [11, 4, 7, 9, 123, 18, 165, 246, 178];

// function minNumbers(array,callback){
//     return callback(array);
// }


// console.log(minNumbers(numbers,function(array){
//     let min=array[0];
//     for(let item of array){
//         if(item<min){
//            min=item 
//         }
//     }
//     return min;
// }));





// third

// let numberr = [11, 14, 7, 9, 123, 18, 165, 246, 178];

// function minIndex(array,callback){
//     return callback(array);
// }


// console.log(minIndex(numberr,function(array){
//     let min=0;
//     for(let i=0;i<array.length;i++){
//         if(array[i]<array[min]){
//            min=i;
//         }
//     }
//     return min;
// }));


//  fourth
// let numberss = [11, 4, 7, 9, 123, 18, 165, 246, 178];

// function maxIndex(array,callback){
//     return callback(array);
// }

// console.log(maxIndex(numberss,function(array){
//     let max=0;
//     for(let i=0;i<array.length;i++){
//         if(array[i]>array[max]){
//             max=i;
//         }
//     }
//     return max;
// }));


// fifth

// let arr = [11, 4, 7, 9, 123, 18, 165, 246, 178];

// function oddToSum(array,callback){
//     return callback(array);
// }

// console.log(oddToSum(arr,function(array){
//     let sum=0;
//     for(let i=1;i<array.length;i+=2){
//      sum+=array[i];
    
//     }
//     return sum;
    
// }));


// sixth

// let num=[10,34,65,78,675,34,234,12,98,76,56];
// function myReverse(array,callback){
//     callback(array);
// }


// console.log(myReverse(num,function(array){
//     for(let i=0;i<array.length/2;i++){
//          let temp=array[i];
//         array[i]=array[array.length-1-i];
//     array[array.length-1-i]=temp;
    
//     }

//     console.log(array);
   
// }
// ));


// seventh

// let numbr=[12,334,23,45,678,123,4,5];

// function myOdd(array,callback){
//    return callback(array);
// }

// console.log(myOdd(numbr,function(array){
//     let count=0;
//     for(let i=0;i<array.length;i+=2){
//         count++;      
//     }
//     return count;
// }));


// eighth

// let numbrs=[123,456,12,34,89,980,65,74];

// function myChange(array,callback){
//     callback(array);
// }

// console.log(myChange(numbrs,function(array){

//     let division=array.length/2;
//     let newArray=[];
     
//     for( let i=division;i<array.length;i++){
//         newArray.push(array[i]);
        
//     }
//     for(let i=0;i<division;i++){
//         newArray.push(array[i]);
//     }
//     console.log(newArray);
    
// }))


// ninth

// let arr=[12,34,56,43,21,67,980,746];

// function bubbleSort(array){
//   let x=array.length;
//   for( let i=0;i<x;i++){
//     for(let j=0;j<x-1-i;j++){
//       if(array[j]>array[j+1]){
//         let temp=array[j];
//        array[j]=array[j+1];
//        array[j+1]=temp;   
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSort(arr));





// tenth

let array=[12,34,56,43,21,67,980,746];

function bubbleSortToMin(array){
let y=array.length;
for( let i=0;i<y;i++){
  for( let j=0;j<y-1-i;j++){
    if(array[j]<array[j+1]){
      let temp=array[j];
      array[j]=array[j+1];
      array[j+1]=temp;
    }
  }
}
return array;
}

console.log(bubbleSortToMin(array));


