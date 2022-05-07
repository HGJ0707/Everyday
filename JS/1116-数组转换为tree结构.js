let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 3 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门3', pid: 0 },
    { id: 5, name: '部门4', pid: 4 },
    { id: 6, name: '部门5', pid: 0 },
    { id: 7, name: '部门5', pid: 6 },
    { id: 8, name: '部门5', pid: 7 },
]


/**
 * 数组结构转tree结构
 * @param {*} data 
 */
function arrayToTree(data) {
    let result = [];
    let itemMap = {};
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let id = item.id;
        let pid = item.pid;
        if (!itemMap[id]) {
            itemMap[id] = {
                children: []
            }
        }
        itemMap[id] = {
            ...item,
            children:itemMap[id]['children']
        }
        let treeItem = itemMap[id];
        if(pid === 0) {
            result.push(treeItem);
        } else {
            if(!itemMap[pid]) {
                itemMap[pid] = {
                    children:[]
                }
            }
            itemMap[pid]['children'].push(treeItem);
        }
    }
    return result;
}
console.log(arrayToTree(arr));