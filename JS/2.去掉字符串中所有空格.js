/**
 * 2.去掉字符串中所有空格
 * @param {*} str 
 * @returns 
 */
function removeSpace(str) {
    return str.replace(/\s+/g, "");
}

const example = "  a z x c v";

let res = removeSpace(example);
console.log("res:", res);