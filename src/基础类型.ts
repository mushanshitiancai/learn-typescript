// 1 布尔型
let isDone: boolean = false;

// 2 数字
let dec: number = 1;
let hex: number = 0xf;
let binary: number = 0b001;
let octal: number = 0o17;

// 3 字符串
// name已经被定义了
//let name: string = "bob";

let thing: string = "sun";
let color: string = "red";
let sentence: string = `the ${thing} 

is ${color}`;

// 4 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 5 元组
let tuple: [string, number] = ["hello", 1];

// 6 枚举
enum Color {
    Red, Green = 2, Blue
}
let aColor: Color = Color.Red;
let colorName: string = Color[2];

// 7 任意值
let notSure: any = 1;
notSure = "fuck";
let anyList: any[] = [1, false, "hehe"];

// 8 空值
let unusable: void = null;
let unusable2:void = undefined;
function doNothing():void{}

// null和undefined，新版本中已经没有了。 
