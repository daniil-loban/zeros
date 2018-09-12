module.exports = function getZerosCount(number) {
   result = 0
   for (var i = 1; i <= number; i++) {
       temp = i
       while (temp%5 == 0){ 
             temp /= 5
             result++
       }
   }
   return result
}

