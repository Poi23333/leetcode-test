/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result;
    for(var i=0; i<nums.length; i++){
        for(var j=0; j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                result = [j,i];
                break; 
            }
        }
    }
    return result;
};

console.log(twoSum([2,3,4,5,6],5));
