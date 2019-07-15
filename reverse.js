// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
var reverse = function(x) {
    if(x< -Math.pow(2,31) || x>Math.pow(2,31)-1){
        return 0
    }
    let t = x
    if(x<0){
        t=-x;
    }
    let strX = t.toString();
    let resX = '';
    let lenX = strX.length;
    for(let i=lenX-1;i>=0;i--){
        resX = resX+strX.substr(i,1)
    }
    if(resX.startsWith('0')){
        resX = resX.slice(1)
    }
    if(x<0){
        resX = '-'+resX
    }
    resX = Number(resX);
    if(resX< -Math.pow(2,31) || resX>Math.pow(2,31)-1){
        return 0
    }
    return resX
};
console.log(reverse(1534236469))