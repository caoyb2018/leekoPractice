// 给你一个整数 n，请你帮忙计算并返回该整数「各位数字之积」与「各位数字之和」的差。
// 示例 1：
// 输入：n = 234
// 输出：15 
// 解释：
// 各位数之积 = 2 * 3 * 4 = 24 
// 各位数之和 = 2 + 3 + 4 = 9 
// 结果 = 24 - 9 = 15
// 示例 2：
// 输入：n = 4421
// 输出：21
// 解释： 
// 各位数之积 = 4 * 4 * 2 * 1 = 32 
// 各位数之和 = 4 + 4 + 2 + 1 = 11 
// 结果 = 32 - 11 = 21
// 提示：
// 1 <= n <= 10^5

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    const arr = [...String(n)]
    var mult = 1;
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        mult *= Number(arr[i])
        sum += Number(arr[i])
    }
    return mult - sum
};

// 数字拆分类型题目一般都是可以通过两个大杀器进行解决：

// 对10进行取余操作，每一步得到该位置上的数字
// 使用wihile循环直到取余结束
// 取余结束的终止条件这个根据不同题目进行不同的设定
// 最好不要使用parseInt(),如果数字太大和太小会出错，原理是该函数会讲第一个参数首先转换成字符串再操作，其次第二个参数不同浏览器默认值不同，我们正常是传10，也就是十进制

var subtractProductAndSum = function (n) {
    let sum = 0;
    let product = 1;
    while (n > 0) {
        digit = n % 10;
        sum += digit;
        product *= digit;
        n = Math.floor((n /= 10));
    }
    return product - sum;
};
console.log(subtractProductAndSum(234))
// console.log(subtractProductAndSum(4421))