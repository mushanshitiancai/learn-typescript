// http://tslang.cn/docs/handbook/variable-declarations.html

// 使用let而不是var
// const声明的变量引用的值是不可变的

// 解构
// 解构数组
let input = [1,2];
let [first,second] = input;

function f0([first,second]:[number,number]){
    console.log(first);
    console.log(second);
}

let [first2,...rest] = [1,2,3,4];
let [first3] = [1,2,3,4];
let [,,third,,five] = [1,2,3,4,5];

// 解构对象
let o = {
    a: 1,
    b: 2,
    c: 3
}

let {a,b} = o;
({a,b} = {a:0,b:1});

// 属性重命名
let {a:newA,b:newB} = o;

// 默认值
let {a:newA1,b:newB1 = 1} = o;

function ff({a,b}:{a:string,b:number}){

}