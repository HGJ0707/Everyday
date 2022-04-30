// 第1105天 使用js写一个方法实现链式调用

/**
 * 实现需求如下：
 * 
 * 实现一个可像以下code般链式调用的"变量"。
 * 其中 sleep指会停留，类似暂停；work直接打印；
 * firstSleep也是暂停，但它相当特殊，首先只能调用一次，
 * 其次，无论在链路上何处调用，都必须第一个执行。
 */


// man.work().sleep(1000).firstSleep(5000).work().sleep(1000);

// 执行结果
// 暂停 5 秒 firstSleep(5000)
// 暂停 1 秒 sleep(1000)
// 打印 work()
// 暂停 1 秒 sleep(1000)


class Man {
    constructor() {
        this.quene = []; //收集函数
        this.index = 0;
        this.firstSleepAppear = false; //firstSleep是否已经执行,最多调用一次
        this.init(); //初始化
    }

    init() {
        setTimeout(() => this.run(), 0);
    }

    run() {
        const fn = this.quene[this.index++];
        fn && fn();
    }

    firstSleep(delay) {
        if (this.firstSleepAppear) {
            throw Error("the firstSleepAppear already run");
        }
        this.quene.unshift(() => {
            setTimeout(() => {
                console.log("firstSleep is running!");
                this.run();
            }, delay)
        })
        this.firstSleepAppear = true;
        return this;
    }

    work() {
        this.quene.push(() => {
            console.log("work is running!");
            this.run();
        })
        return this;
    }

    sleep(delay) {
        this.quene.push(() => {
            setTimeout(() => {
                console.log("sleep is running!");
                this.run();
            }, delay)
        })
        return this;
    }
}



const man = new Man();
man.work().sleep(2000).firstSleep(1000).sleep(1000).work().sleep(1000);