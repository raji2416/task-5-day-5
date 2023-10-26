//FOR
var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {
   console.log(numbers[i])
}


//FOR IN
var obj = {a: 1, b: 2, c: {a: 1, b: 2}};
function walk(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var val = obj[key];
      console.log(val);
      walk(val);
    }
  }
}
walk(obj);

//FOR EACH 

var names = ["jerry", "tom", "pluto", "micky", "mini"];
names.forEach(function1);
function function1(currentValue, index) {
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}