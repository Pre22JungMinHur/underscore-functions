console.log('The Iron Yard Rocks');
var c = {};
var numbers = [1,2,3,4,5];
var newArray2 = ["cat", "dog", "monkey", "giraffe"];
var empty;
// for(i=0; i<newArray.length; i++){
//     console.log (newArray[i]);
//   };

// c.newMap = function(array){
//   for(i=0; i<array.length; i++){
//       // console.log (array[i]);
//   };
//     empty.push(array);
//     // console.log(array);
//
// };


// _.size//////////////////////////////////////////////
c.size = function(list){
  console.log(list.length);
};

c.size(newArray2);

//_.isEmpty/////////////////////////////////////////////
c.empty= function(obj){
  if (obj == null)return true;
else{
  return false;
}
console.log(obj);
};

//_.isEqual//////////////////////////////////////////
c.equal= function(a,b){
if (a===b) return true;
else{
  return false;
}
};


c.contains= function(array,y){
  array.forEach(function(z){
    if (y === z) console.log(true);
  });
};
