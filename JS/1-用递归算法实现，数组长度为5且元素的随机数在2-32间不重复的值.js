// 1.用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值


/**
 * @param {*} arr 数组
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @param {*} len 数组长度
 * @returns 
 */
function randomArr(arr, min, max, len) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!arr.includes(number)) {
        arr.push(number);
    }

    return arr.length === len ? arr : randomArr(arr, min, max, len);
}


let res = randomArr([], 2, 32, 5);
console.log("res:", res);