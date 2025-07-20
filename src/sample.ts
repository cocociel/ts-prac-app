// sample.ts
// console.log("Hello, TypeScript!");

// 3-4 型エイリアス
// type MeteoraMemberNames = "心音" | "Lapis" | "メルト・ダ・テンシ" | "明雷らいと" | "みかさくん" | "ロゼ";

// 3-5 オブジェクト型
// type MemberProfile = {
//   readonly name: string;
//   age?: number;
//   color: string;
// };

// const rose: MemberProfile = {
//   name: "rose",
//   age: 28,
//   color: "red",
// };

// 3-6 Array型とTuple型
// let songs: string[]; // これはArray型
// songs = ["Want You", "All the way"];

// type MemberColor = [name: string, color: string];
// let roseColor: MemberColor = ["rose", "red"];

// // 3-7 インターセクション型
// type GroupObj = {
//   groupName: string;
// }

// type PersonObj = {
//   personName: string;
//   personColor: string;
// }

// type MemberObj = GroupObj & PersonObj;

// let shion: MemberObj = {
//   groupName: "meteorite",
//   personName: "shion",
//   personColor: "purple",
// }

// 3-11 関数と型
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }

// function printMessage(message?: string): void {
//   if (message) {
//     console.log(message);
//   } else {
//     console.log("No message provided.");
//   }
// }
// printMessage("Hello World!");
// printMessage();

// const addNumbers: (a: number, b: number) => number = (a, b) => a + b;

// type AddFunction = (a: number, b: number) => number;
// const addNumbers: AddFunction = (a, b) => a + b;

// type ReturnVoid = () => void;
// const greetWorld: ReturnVoid = () => {
//   return "Hello world!";
// }
// const result = greetWorld();
// console.log(result);

// 4-1-2
// interface Member {
//   readonly name: string;
//   age?: number;
//   color: string;
//   speak(word: string): void;
// }

// const rose: Member = {
//   name: "rose",
//   age: 30,
//   color: "red",
//   speak: (word) => console.log(word),
// }

// rose.speak("お前の一番奪うから。");


// インデックスシグニチャ
// ＝値代入時にキーも名前をつけられる型指定
// interface StprFamilyMember {
//   [memberName: string]: string;
// }

// const stprFamily: StprFamilyMember = {};
// stprFamily.shion = "shion";
// stprFamily.jel = "jel";

// 4-2-1 クラスの基本
class Member {
  name: string;
  color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  greet(greeting: string): void {
    console.log(
      `${greeting}, my name is ${this.name} and member color is ${this.color}.`
    );
  }
}

const rose = new Member("rose", "red");
rose.greet("Hi");

