/* 

도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기

*/

interface Member {
  name: string;
  group: string;
};

type DinnerArray = Member[] | string[];

interface Dinner {
  member: Member[];
  menu: string[];
  shuffle(array: DinnerArray): DinnerArray;
  organize(): void;
};

const dinner: Dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "김소현",
      group: "yb",
    },
    {
      name: "김경린",
      group: "yb",
    },
    {
      name: "김민욱",
      group: "ob",
    },
    {
      name: "최승빈",
      group: "ob",
    },
  ],
  menu: ["떡볶이", "찜닭", "곱창", "막창", "마제소바"],
  shuffle(array: DinnerArray) {
    array.sort(() => Math.random() - 0.5);
    return array;
  },
  organize() {
    const dinnerMember: Member[] = this.shuffle(this.member) as Member[];
    const dinnerMenu: string[] = this.shuffle(this.menu) as string[];

    console.log(`결과 ${dinnerMember[0].name}, ${dinnerMember[1].name}, 저녁 메뉴는 "${dinnerMenu[0]}" 입니다.`);
  },
};

dinner.organize();