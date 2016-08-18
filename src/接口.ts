interface LabelledValue{
    label:string;
}

function f(labelledObject: LabelledValue){
    console.log(labelledObject.label);
}

// 可选属性
interface SquareConfig{
    color?: string;
    width?: number;
}
function f2(config:SquareConfig):void{

}

// 只读属性 新版本没有了

// 结合类型断言
f2({width:1});
// f2({width:1,a:1}); 报错

f2({width:1,a:1} as SquareConfig);
// 或者
let param = {width:1,a:1};
f2(param);


//--- 函数类型
interface SearchFunc{
    (source:string,substring:string):boolean;
}

let mySearch:SearchFunc = function(src:string,sub:string):boolean{
    return false;
}
// 或者使用类型推导
let mySearch2:SearchFunc = function(src,sub){
    return false;
}

//--- 可索引的类型
interface StringArray{
    [index:number]:string;
}

let myArr:StringArray = ["1","2"];

// 共有支持两种索引签名：字符串和数字。 
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。

//--- 类类型
interface ClockInterface{
    currentTime: Date;
    fuck(a:number):void;
}
class Clock implements ClockInterface{
    currentTime: Date;
    constructor(){}

    fuck(a:number):void{}
}

// 这样实现是不行的，因为接口只对类的实例部分做检查
// interface ClockInterface2{
//     new(hour:number);
// }
// class Clock2 implements ClockInterface2{
//     constructor(hour:number){}
// }

interface ClockInterface2{
    
}
interface ClockInterface2Creator{
    new(hour:number):ClockInterface2;
}
class Clock2 implements ClockInterface2{
    constructor(hour:number){}
}
function createClock2(ctor:ClockInterface2Creator,hour:number){
    return new ctor(hour);
}

//--- 扩展接口
interface Parent1{}
interface Parent2{}
interface Child extends Parent1,Parent2{};

//--- 混合类型
// 一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter():Counter {
    let counter = (function(s:number){}) as Counter;
    counter.interval = 2;
    counter.reset = function (){}
    return counter;
}

//--- 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。