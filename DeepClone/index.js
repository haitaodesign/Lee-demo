// 浅克隆函数

function shallowClone(o) {
    var obj = {};
    for (const i in o) {
        obj[i] = o[i];
    }
    return obj;
}

const oldObj = {
    a: 1,
    b: ['1', '2', '3'],
    c: {
        h: {
            i: 2
        }
    }
}

// const newObj = shallowClone(oldObj);
// 通过JSON.parse()方法实现深克隆,但有很多弊端：
// 1.函数/regexp等特殊函数不能实现
// 2.会抛弃对象的constructor，所有的构造函数会指向Object
// 3.对象有循环引用，会报错
const newObj = JSON.parse(JSON.stringify(oldObj));
console.log(oldObj.c.h, newObj.c.h);
console.log(oldObj.c.h === newObj.c.h); // true,指向同一堆内存

newObj.c.h.i = "newchange";
console.log(oldObj.c.h, newObj.c.h); // 改变克隆的对象，原对象也会跟着改变

// 能够实现同样效果的api, Object.assign()

//构造函数
function person(pname) {
    this.name = pname;
}

const Lee = new person('Lee');
// 函数

function say() {
    console.log('hi');
}

const oldObj2 = {
    a: say,
    b: new Array(1),
    c: RegExp('ab+c', 'i'),
    d: Lee
}

const newObj2 = JSON.parse(JSON.stringify(oldObj2));
// 无法复制函数
console.log('复制函数', newObj2.a, oldObj2.a)

// 稀疏数组复制错误
console.log('数组', newObj2.b[0], oldObj2.b[0]);

// 无法复制正则对象
console.log('正则对象', newObj2.c, oldObj2.c)

// 构造函数指向错误
console.log('构造函数', newObj2.d.constructor, oldObj2.d.constructor)

const oldObj3 = {};
oldObj3.a = oldObj3;

// const newObj3 = JSON.parse(JSON.stringify(oldObj3));
// 对象的循环引用会报错
// console.log(oldObj3.a, newObj3.a)

//对象类型判断函数
const isType = (obj, type) => {
    if (typeof obj !== 'object') return false;
    const typeString = Object.prototype.toString.call(obj);
    let flag;
    switch (type) {
        case 'Array':
            flag = typeString === '[object Array]';
            break;
        case 'Date':
            flag = typeString === '[object Date]';
            break;
        case 'RegExp':
            flag = typeString === '[object RegExp]';
            break;
        default:
            flag = false;
    }
    return flag;
}

//提取正则flags
const getRegExp = re => {
    let flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
}

const clone = parent => {
    //
    const parents = [],
        children = [];

    const _clone = parent => {
        if (parent == null) return null;
        if (typeof parent !== 'object') return parent;
        let child, proto;
        if (isType(parent, 'Array')) {
            child = [];
        } else if (isType(parent, 'RegExp')) {
            // 对正则对象做特殊处理
            child = new RegExp(parent.source, getRegExp(parent));
            if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (isType(parent, 'Date')) {
            child = new Date(parent.getTime());
        } else {
            // 处理对象原型
            proto = Object.getPrototypeOf(parent);
            //利用Object.create切断原型链
            child = Object.create(proto);
        }
        // 处理循环引用
        const index = parents.indexOf(parent);
        if (index != -1) {
            //如果父数组存在本对象，说明之前已经被引用过，直接返回此对象
            return children[index];
        }
        parents.push(parent);
        children.push(child);
        for (let i in parent) {
            child[i] = _clone(parent[i]);
        }
        return child;
    };
    return _clone(parent);
}

const oldObj4 = {
    a: say,
    c: RegExp('ab+c', 'i'),
    d: Lee
}
oldObj4.b = oldObj4;

const newObj4 = clone(oldObj4);
console.log(newObj4.a, oldObj4.a);
console.log(newObj4.b, oldObj4.b);
console.log(newObj4.c, oldObj4.c);
console.log(newObj4.d.constructor, oldObj4.d.constructor);