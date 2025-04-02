
const nums = [2,7,11,15]
const target = 9


for(let lastIndex = nums.length - 1; nums[lastIndex] >= target; lastIndex-- ){
    console.log([lastIndex, nums.length, nums[lastIndex] ])
}