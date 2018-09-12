module.exports = function getZerosCount(number) {
   result = 0
   for (var i = 1; i < number+1; i++) {
       nmb = i
       while (nmb%5 === 0){ 
             nmb /= 5
             result++
       }
   }
   return result
}

