let myArr = {};
// Only change code below this line

function* multiplication(x) {
    for (i = x + 1; i >= 0; i--) {
        x *= 2;
        yield x;
     
    }
    return x;
   
}
    var num = multiplication(3);
    
 
    for (let i = 0; i < 3; i++) {
        
        console.log(num.next().value);
    }   
    

// Only change code above this line 
module.exports = multiplication;