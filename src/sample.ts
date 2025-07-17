// sample.ts
console.log("Hello, TypeScript!");

// 3-4 型エイリアス
type MeteoraMemberNames = "心音" | "Lapis" | "メルト・ダ・テンシ" | "明雷らいと" | "みかさくん" | "ロゼ";

// 3-5 オブジェクト型
type MemberProfile = {
  readonly name: string;
  age?: number;
  color: string;
};

const rose: MemberProfile = {
  name: "rose",
  age: 28,
  color: "red",
};

// 3-6 Array型とTuple型
let songs: string[]; // これはArray型
songs = ["Want You", "All the way"];

type MemberColor = [name: string, color: string];
let roseColor: MemberColor = ["rose", "red"];

// 3-7 インターセクション型
type GroupObj = {
  groupName: string;
}

type PersonObj = {
  personName: string;
  personColor: string;
}

type MemberObj = GroupObj & PersonObj;

let shion: MemberObj = {
  groupName: "meteorite",
  personName: "shion",
  personColor: "purple",
}