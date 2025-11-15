//short circuiting -> if in js if we have logical and , logical or operator - we evaluate an first expression 
//and then according to result of first expression we deside to return output or go to evaluate second expression


//find which is true and which is false

//  let value ={}
// if(value){
//     console.log(value, "is true")
// }
//  value 
/*
======= number =======
1-true
-1-true
10-true
0-false(this false only)

======= string =======

""-false(empty string is false only)
"se"-true

======= null =======
null- false

======= undefine =======
undefine- false

======= object =======
true alway 
{}-true
{ a: true }-true

======= Array =======
[]- true
[2,43,23,4]-true



*/

//and = &&
let a = true && true;//first operand is true hence evaluate second expression itt is true now no expression to evaluate return second operand value (true)
console.log({ a })


a = true && false;//first operand is true hence evaluate second expression it is false now emediatly return second operand value (false)
console.log({ a })

a = false && true;//first operand is false - short circuiting (no need to evaluate other operand )  return value of falsy operand (false)
console.log({ a });


a = true && 10;//first operand is true hence evaluate second expression it is true and no further expression to evaluate hance return operand value (10)
console.log({a}); //this is the catch value of a is 10  because second expression 10 is true (and no further expression return 10)



a = true && 0 && 10;//first operand is true hence evaluate second expression it is flase return  emediatly operand value (0)
console.log({a}); //this is the catch value of a is 0  because second expression 0 is false (and no further evaluation of  expression return 0)



a = 0 && true && 10;//short circuit return 0 (0 is false)
console.log({a});

a = 4 && "" && 10;//short circuit return "" ("" is false)
console.log({a});

a = 4 && null && 10;//short circuit return null (null is false)
console.log({a});


a = 4 && [] && 10;//4 - ture //[] -also true// 10 -true - no further expression - return 10
console.log({a});



a = 4 && {} && 10;//4 - ture //{} -also true// 10 -true - no further expression - return 10
console.log({a});


// OR Operator

a = true || false //->true //as soon as true return it's operand value
console.log({a});

a = false || true || false //->true //as soon as true return it's operand value(true)
console.log({a});

a = false || 10 || false //->10 is true //as soon as true return it's operand value(10)
console.log({a});

a = 5 || 10 || false //->5 is true //as soon as true return it's operand value(5)
console.log({a});

a = null || 10 || false //->5 is true //as soon as true return it's operand value(10)
console.log({a});

a = "" || 10 || false //""-false //->10 is true //as soon as true return it's operand value (10)
console.log({a});

a = [] || 10 || false //->[] is true //as soon as true return it's operand value ([])
console.log({a});


a = [20] || 10 || false //->[20] is true //as soon as true return it's operand value ([20])
console.log({a});

a ={} || 10 || false //->{} is true //as soon as true return it's operand value ({})
console.log({a});

a ={"name":"ganesh"} || 10 || false //->{"name":"ganesh"} is true //as soon as true return it's operand value ({"name":"ganesh"})
console.log({a});


// ?? Nullish coalescing (??)

//only check for null and undefined value if other than that return it
a =    null ??10  //->null is false and (null or undefined) //go to right side and return right side operand value(10)
console.log({a});


a =    null ??10??20  //->null is false and (null or undefined) //go to right side and return right side operand value(10) don't go further oprand
console.log({a});

a =0 ??10  //->0 is false but not (null or undefined) //dont go right side return this oprand value(0)
console.log({a})

a =undefined ??0  //->0 is false but not (null or undefined)  return  oprand value(0)
console.log({a})


a =undefined ??null  //->null  is (null or undefined) but no further expression   return  oprand value(null)
console.log({a})


//let value =0
// if(value){
//     console.log(value, "is true")
// }
// else{
//     console.log(value, "is false")
// }

//  value

a=20>4&&true
console.log({a})

