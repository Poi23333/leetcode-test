/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    var result = [];
    for(var i=left; i<=right; i++){
        var flag = true;
        var field = i;
        var fields = field.toString();
        for(var j=0; j<fields.length; j++){
            if(field%fields[j] !== 0){
                flag = false;
            }
        }
        if(flag){
            result.push(field);
        }
    }
    return result;
};

console.log(selfDividingNumbers(1,22).toString());