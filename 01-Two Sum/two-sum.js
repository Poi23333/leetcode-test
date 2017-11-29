/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result;
    var haveResult = false;
    for(var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                result = [j,i];
                haveResult = true;
                break; 
            }
        }
    }
    if(haveResult){
        return result;
    }else{
        return '没有匹配项';
    }
};

console.log(twoSum([2,3,4,5,6],5));
